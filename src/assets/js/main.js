/* Navigation, scroll reveal and contact form. No dependencies. */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var header = document.querySelector(".site-header");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!header || !header.contains(e.target)) setOpen(false);
    });
  }
  if (header) {
    var heroImg = document.querySelector(".hero__media img");
    var ticking = false;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      if (heroImg && !ticking && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        ticking = true;
        requestAnimationFrame(function () {
          if (window.scrollY < 900) heroImg.style.setProperty("--py", (window.scrollY * 0.07).toFixed(1));
          ticking = false;
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Scroll reveal (staggered), heading underline, stat count-up ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll("[data-reveal], .section__head");
  // Stagger siblings: each reveal item gets an index within its parent.
  var seen = new Map();
  document.querySelectorAll("[data-reveal]").forEach(function (el) {
    var n = seen.get(el.parentNode) || 0;
    el.style.setProperty("--d", Math.min(n, 6));
    seen.set(el.parentNode, n + 1);
  });
  // Stats: animate numbers from 0 when they scroll into view.
  var counters = [];
  if (!reduce) {
    document.querySelectorAll(".stats strong").forEach(function (el) {
      var m = el.textContent.match(/^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
      if (!m) return;
      var end = parseFloat(m[2].replace(/,/g, ""));
      var dec = (m[2].split(".")[1] || "").length;
      counters.push({ el: el, pre: m[1], suf: m[3], end: end, dec: dec, comma: m[2].indexOf(",") > -1, done: false });
    });
  }
  function fmt(c, v) {
    var t = v.toFixed(c.dec);
    if (c.comma) t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return c.pre + t + c.suf;
  }
  function runCounter(c) {
    if (c.done) return;
    c.done = true;
    var t0 = null, dur = 1400;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      c.el.textContent = fmt(c, c.end * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (items.length) {
    if ("IntersectionObserver" in window && !reduce) {
      document.documentElement.classList.add("reveal-ready");
      counters.forEach(function (c) { c.el.textContent = fmt(c, 0); });
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              counters.forEach(function (c) { if (en.target.contains(c.el)) runCounter(c); });
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      items.forEach(function (el) { io.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');
  var data = form.dataset;

  // Pre-fill from links such as /contact/?enquiry=quote&service=Renovations
  try {
    var params = new URLSearchParams(window.location.search);
    var typeSel = form.elements.enquiryType;
    if (params.get("enquiry") === "quote" && data.quoteType) {
      for (var i = 0; i < typeSel.options.length; i++) {
        if (typeSel.options[i].value === data.quoteType) typeSel.selectedIndex = i;
      }
    }
    var svc = params.get("service");
    if (svc && !form.elements.message.value) {
      form.elements.message.value = "I'm interested in: " + svc.slice(0, 120) + "\n\n";
    }
  } catch (e) { /* non-critical */ }

  var rules = {
    name: function (v) { return v.trim().length < 2 ? "Please enter your full name." : ""; },
    email: function (v) {
      if (!v.trim()) return "Please enter your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address, like name@example.com.";
    },
    phone: function (v) {
      if (!v.trim()) return ""; // optional
      var digits = v.replace(/\D/g, "");
      return /^[+\d][\d\s().\-]*$/.test(v.trim()) && digits.length >= 7 && digits.length <= 15 ? "" : "Please enter a valid phone number, or leave it blank.";
    },
    enquiryType: function (v) { return v ? "" : "Please choose an enquiry type."; },
    message: function (v) { return v.trim().length < 10 ? "Please write a message of at least 10 characters." : ""; }
  };
  var ids = { name: "f-name", email: "f-email", phone: "f-phone", enquiryType: "f-type", message: "f-message" };

  function setError(name, msg) {
    var input = form.elements[name];
    var out = document.getElementById(ids[name] + "-err");
    var wrap = input.closest(".field");
    out.textContent = msg;
    wrap.classList.toggle("has-error", !!msg);
    if (msg) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid");
    return !msg;
  }
  function validateField(name) { return setError(name, rules[name](form.elements[name].value)); }

  Object.keys(rules).forEach(function (name) {
    var el = form.elements[name];
    el.addEventListener("blur", function () { if (el.value || el.hasAttribute("aria-invalid")) validateField(name); });
    el.addEventListener("input", function () { if (el.hasAttribute("aria-invalid")) validateField(name); });
    el.addEventListener("change", function () { if (el.hasAttribute("aria-invalid")) validateField(name); });
  });

  function show(kind, text, extraNode) {
    status.innerHTML = "";
    var box = document.createElement("div");
    box.className = "is-" + kind;
    var p = document.createElement("p");
    p.textContent = text;
    box.appendChild(p);
    if (extraNode) box.appendChild(extraNode);
    status.appendChild(box);
    status.focus();
  }

  function mailtoLink(values) {
    var subject = values.enquiryType + " (" + data.business + " website)";
    var body = "Name: " + values.name + "\nEmail: " + values.email + (values.phone ? "\nPhone: " + values.phone : "") + "\n\n" + values.message;
    var a = document.createElement("a");
    a.className = "btn btn--primary btn--sm";
    a.textContent = "Open in your email app";
    a.href = "mailto:" + data.mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    return a;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.innerHTML = "";

    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      if (!validateField(name) && !firstInvalid) firstInvalid = form.elements[name];
    });
    if (firstInvalid) {
      firstInvalid.focus();
      show("error", "Please fix the highlighted fields and try again.");
      firstInvalid.focus();
      return;
    }

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (form.elements.website.value) { show("success", data.msgSuccess); form.reset(); return; }

    var values = {};
    Object.keys(rules).forEach(function (n) { values[n] = form.elements[n].value.trim(); });

    // No backend connected yet: be honest, offer a pre-filled email.
    if (!data.endpoint) {
      if (data.mailto) {
        show("info", data.msgNotconnected, mailtoLink(values));
      } else {
        show("info", "This demo enquiry form is not connected yet. Add a business email address or connect a form service before launch.");
      }
      return;
    }

    submitBtn.disabled = true;
    var original = submitBtn.textContent;
    submitBtn.textContent = "Sending…";

    var controller = "AbortController" in window ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, 15000) : null;

    fetch(data.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: values.name, email: values.email, phone: values.phone,
        enquiryType: values.enquiryType, message: values.message,
        _subject: values.enquiryType + " (" + data.business + " website)",
        _page: window.location.href,
        website: form.elements.website.value
      }),
      signal: controller ? controller.signal : undefined
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        show("success", data.msgSuccess);
      })
      .catch(function () {
        show("error", data.msgError, data.mailto ? mailtoLink(values) : null);
      })
      .then(function () {
        if (timer) clearTimeout(timer);
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      });
  });
})();
