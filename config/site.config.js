/**
 * SITE CONFIGURATION: the single source of truth.
 *
 * TEMPLATE VERSION. Every value below is neutral placeholder content.
 * To build a real site: replace the placeholders (or paste this file into ChatGPT/Claude
 * together with CUSTOMISE-PROMPT.md), add real images to src/assets/img, then run `node build.js`.
 * The build prints a launch checklist of anything still unfinished.
 *
 * While `site.indexable` is false the build adds noindex and blocks crawlers,
 * so unfinished content can never be indexed by accident.
 */
module.exports = {
  /* ------------------------------------------------------------------ */
  /* BUSINESS                                                            */
  /* ------------------------------------------------------------------ */
  business: {
    name: "Your Business Name",
    legalName: "Your Business Name (Pty) Ltd",
    industry: "Your industry",
    tagline: "Your tagline goes here.",
    shortDescription: "A short description of what your business does and who it helps.",
    foundedYear: null, // e.g. 2012. Leave null to hide "since" mentions.
    // Schema.org type. Use the most specific one that fits, e.g. "HomeAndConstructionBusiness",
    // "Dentist", "Restaurant", "LegalService", "Store", "AutoRepair", "ProfessionalService".
    schemaType: "LocalBusiness",
    priceRange: null, // e.g. "$$". Leave null if unknown.
    areaServed: [], // e.g. ["Cape Town", "Stellenbosch"]. Used in structured data.
    // Logo slot. type:
    //   "image+name"  logo image on the LEFT with the business name beside it
    //   "image"       logo image only (for logos that already include the name)
    //   "text"        letter badge + name, no image needed
    // Replace src with your logo (SVG or PNG), then set width/height to its display size in px.
    // srcOnDark: optional light version for the dark footer. Without it the logo sits on a white tile.
    logo: {
      type: "image+name",
      src: "assets/img/logo-placeholder.svg",
      srcOnDark: "",
      alt: "Your Business Name logo",
      width: 44,
      height: 44,
      mark: "Y", // letter used for the "text" type and the generated favicon
    },
  },

  /* ------------------------------------------------------------------ */
  /* SITE / TECHNICAL                                                    */
  /* ------------------------------------------------------------------ */
  site: {
    url: "https://www.example.com", // production origin, no trailing slash
    language: "en",
    locale: "en_ZA",
    // Keep false until real content is in place. true = indexable by search engines.
    indexable: false,
    outputDir: "dist",
    ogImage: "assets/img/og-default.png", // 1200x630 PNG/JPG for social sharing
    titleSeparator: " | ",
  },

  /* ------------------------------------------------------------------ */
  /* THEME: colours, type, shape                                         */
  /* ------------------------------------------------------------------ */
  theme: {
    colors: {
      primary: "#0f766e", // main brand colour (buttons, links, accents)
      primaryDark: "#115e59", // hover state
      onPrimary: "#ffffff", // text colour on primary
      accent: "#b45309", // secondary highlight (used sparingly)
      ink: "#111827", // body text and dark sections
      muted: "#4b5563", // secondary text
      line: "#e5e7eb", // hairline borders
      surface: "#f3f5f7", // alternate section background
      background: "#ffffff", // page background
    },
    fonts: {
      // Modern sans-serif pairing with system-font fallbacks.
      // Set googleFontsUrl to null to use only system fonts (fastest, no download).
      heading: '"Manrope", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      body: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      googleFontsUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
    },
    radius: "8px", // corner radius: "0" for sharp, "12px" for softer
  },

  /* ------------------------------------------------------------------ */
  /* CONTACT                                                             */
  /* ------------------------------------------------------------------ */
  contact: {
    email: "hello@example.com", // PLACEHOLDER
    phone: "+00 000 000 0000", // PLACEHOLDER (display format)
    phoneHref: "+000000000000", // digits for tel: links
    whatsapp: "000000000000", // PLACEHOLDER: international format, no + or spaces. "" hides the buttons
    whatsappMessage: "Hello, I'd like to make an enquiry.",
    whatsappFloating: true, // floating chat button on every page except Contact
    address: {
      street: "123 Street Name", // PLACEHOLDER
      locality: "Your City",
      region: "Your Province",
      postalCode: "0000",
      country: "ZA",
      countryName: "Your Country",
    },
    // Google Maps: paste the "Embed a map" src URL. "" hides the map.
    mapEmbedUrl: "",
    mapLink: "", // link to open the location in Google Maps
    // days: schema.org day names. closed: true shows "Closed". Example hours: replace with your own.
    hours: [
      { label: "Monday – Friday", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
      { label: "Saturday", days: ["Saturday"], opens: "09:00", closes: "13:00" },
      { label: "Sunday and public holidays", days: [], closed: true },
    ],
    social: [
      // { name: "Facebook", url: "https://facebook.com/yourpage" }
      // Supported icons: Facebook, Instagram, LinkedIn, X, YouTube, TikTok
    ],
  },

  /* ------------------------------------------------------------------ */
  /* NAVIGATION + FOOTER                                                 */
  /* ------------------------------------------------------------------ */
  // Slim contact strip above the header. enabled: false removes it.
  topBar: { enabled: true, message: "", showHours: true, showEmail: true },

  nav: {
    items: [
      { page: "home", label: "Home" },
      { page: "about", label: "About" },
      { page: "services", label: "Services" },
      { page: "contact", label: "Contact" },
    ],
    cta: { label: "Get a quote", page: "contact", query: "?enquiry=quote" },
  },
  footer: {
    blurb: "A short line about your business that appears in the footer of every page.",
    columns: ["explore", "contact", "hours"], // order of footer columns
    legal: "All rights reserved.",
    extraLinks: [], // e.g. { label: "Privacy policy", href: "/privacy" } (page must exist)
    // Credit line at the very bottom of every page. Set enabled: false to hide it.
    credit: { enabled: true, text: "Website by", name: "Flowline Studio", url: "https://flowlinestudio.co.za" },
  },

  /* ------------------------------------------------------------------ */
  /* CONTACT FORM                                                        */
  /* ------------------------------------------------------------------ */
  form: {
    // "/api/contact" is the built-in Vercel function (api/contact.js) that emails enquiries through
    // Resend. It needs RESEND_API_KEY and CONTACT_TO set in Vercel (see README). You can also use
    // Formspree, Getform, Basin or your own API. Leave "" to show the honest "not connected" message.
    endpoint: "/api/contact",
    enquiryTypes: ["General enquiry", "Request a quote", "Existing customer", "Something else"],
    quoteType: "Request a quote", // pre-selected when arriving from a service button
    messages: {
      success: "Thank you. Your message has been sent and we'll reply as soon as we can.",
      error: "Sorry, something went wrong and your message was not sent. Please try again, or contact us by phone or email.",
      notConnected: "Online sending isn't set up yet, so your message has not been sent. Use the button below to send it by email instead.",
    },
    privacyNote: "We only use your details to respond to your enquiry.",
  },

  /* ------------------------------------------------------------------ */
  /* SERVICES / PRODUCTS (shared by Home and Services pages)             */
  /* For products: set itemLabel to "product", fill `price` on each item.*/
  /* ------------------------------------------------------------------ */
  catalogue: {
    itemLabel: "service", // "service" | "product" | "treatment" ...
    itemLabelPlural: "services",
    items: [
      {
        id: "service-one",
        icon: "layers",
        name: "Service One",
        summary: "One sentence describing this service and who it is for.",
        description:
          "Describe this service in two or three sentences: what the customer gets, how it works and why it matters to them.",
        benefits: ["Benefit one", "Benefit two", "Benefit three"],
        price: null, // e.g. { from: "$100", unit: "per visit", note: "excl. materials" }
        cta: "Enquire about this service",
        featured: true,
        image: { src: "assets/img/placeholder-service-1.svg", alt: "Placeholder image for Service One", width: 1200, height: 900 },
      },
      {
        id: "service-two",
        icon: "wrench",
        name: "Service Two",
        summary: "One sentence describing this service and who it is for.",
        description:
          "Describe this service in two or three sentences: what the customer gets, how it works and why it matters to them.",
        benefits: ["Benefit one", "Benefit two", "Benefit three"],
        price: null,
        cta: "Enquire about this service",
        featured: true,
        image: { src: "assets/img/placeholder-service-2.svg", alt: "Placeholder image for Service Two", width: 1200, height: 900 },
      },
      {
        id: "service-three",
        icon: "building",
        name: "Service Three",
        summary: "One sentence describing this service and who it is for.",
        description:
          "Describe this service in two or three sentences: what the customer gets, how it works and why it matters to them.",
        benefits: ["Benefit one", "Benefit two", "Benefit three"],
        price: null,
        cta: "Enquire about this service",
        featured: true,
        image: { src: "assets/img/placeholder-service-3.svg", alt: "Placeholder image for Service Three", width: 1200, height: 900 },
      },
      {
        id: "service-four",
        icon: "bolt",
        name: "Service Four",
        summary: "One sentence describing this service and who it is for.",
        description:
          "Describe this service in two or three sentences: what the customer gets, how it works and why it matters to them.",
        benefits: ["Benefit one", "Benefit two", "Benefit three"],
        price: null,
        cta: "Enquire about this service",
        featured: false, // featured items also appear on the Home page
        image: { src: "assets/img/placeholder-service-4.svg", alt: "Placeholder image for Service Four", width: 1200, height: 900 },
      },
    ],
    // Optional pricing table (Services page, section type "pricing"). Set tiers: [] to hide it.
    // The prices below are placeholders: replace them or remove the tiers.
    pricing: {
      heading: "Pricing heading",
      intro: "A short sentence explaining how your pricing works.",
      tiers: [
        { name: "Package One", price: "$00", unit: "per project", features: ["Feature one", "Feature two", "Feature three"], cta: "Choose this package", highlight: false },
        { name: "Package Two", price: "$00", unit: "per project", features: ["Feature one", "Feature two", "Feature three"], cta: "Choose this package", highlight: true },
        { name: "Package Three", price: "$00", unit: "per project", features: ["Feature one", "Feature two", "Feature three"], cta: "Choose this package", highlight: false },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  /* PAGES: SEO + ordered sections                                       */
  /* Reorder, remove or duplicate sections freely. Each is {type,...}.   */
  /* ------------------------------------------------------------------ */
  pages: {
    home: {
      slug: "", // "" = site root
      seo: {
        title: "Your main service and location",
        description:
          "Write a 120 to 160 character summary of your business for search results. Mention your main service and where you work.",
        keywords: ["your main keyword", "your service and city"],
      },
      sections: [
        {
          type: "hero",
          eyebrow: "Your industry or location",
          headline: "Your main headline goes here.",
          text: "A short paragraph under the headline that explains what your business does and who it helps.",
          primaryCta: { label: "Get a quote", page: "contact", query: "?enquiry=quote" },
          secondaryCta: { label: "View services", page: "services" },
          highlights: ["Key benefit one", "Key benefit two", "Key benefit three"],
          image: { src: "assets/img/placeholder-hero.svg", alt: "Placeholder for your main hero image", width: 1200, height: 960 },
        },
        {
          type: "intro",
          eyebrow: "Who we are",
          heading: "A short introduction to your business.",
          paragraphs: [
            "Use this space for two short paragraphs introducing your business: who you are, what you do and who you do it for.",
            "Add a second paragraph with a specific detail that sets you apart, such as your approach, experience or promise to customers.",
          ],
          link: { label: "More about us", page: "about" },
          image: { src: "assets/img/placeholder-intro.svg", alt: "Placeholder for an introduction image", width: 1200, height: 900 },
        },
        {
          type: "catalogue",
          eyebrow: "What we offer",
          heading: "Our services",
          intro: "A short sentence introducing your services.",
          featuredOnly: true,
          link: { label: "See all services", page: "services" },
        },
        {
          type: "features",
          eyebrow: "Why choose us",
          heading: "Why customers choose us",
          items: [
            { icon: "check", title: "Reason one", text: "Explain this reason in one or two short sentences." },
            { icon: "user", title: "Reason two", text: "Explain this reason in one or two short sentences." },
            { icon: "clock", title: "Reason three", text: "Explain this reason in one or two short sentences." },
            { icon: "shield", title: "Reason four", text: "Explain this reason in one or two short sentences." },
          ],
        },
        {
          type: "stats",
          // Placeholders: replace with real, verifiable figures or remove this section.
          items: [
            { value: "00", label: "Statistic one (replace)" },
            { value: "00", label: "Statistic two (replace)" },
            { value: "00%", label: "Statistic three (replace)" },
          ],
          sample: true,
        },
        {
          type: "testimonials",
          eyebrow: "Client feedback",
          heading: "What customers say",
          sample: true, // set false once these are real testimonials (with permission)
          items: [
            { quote: "Replace this with a genuine customer testimonial, used with their permission.", name: "Customer name", role: "Role or location" },
            { quote: "Add a second genuine testimonial here, or delete this entry.", name: "Customer name", role: "Role or location" },
          ],
        },
        {
          type: "cta",
          heading: "A closing call to action.",
          text: "One sentence inviting visitors to get in touch.",
          primaryCta: { label: "Get a quote", page: "contact", query: "?enquiry=quote" },
          secondaryCta: { label: "Call us", phone: true },
        },
      ],
    },

    about: {
      slug: "about",
      seo: {
        title: "About us",
        description:
          "Write a 120 to 160 character summary of your About page: who you are, your story and what makes your business different.",
        keywords: ["about your business"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "About us",
          heading: "A headline about your business.",
          text: "A short sentence about who you are and how you work.",
        },
        {
          type: "story",
          heading: "Our story",
          paragraphs: [
            "Tell the story of your business: who started it, why, and how it has grown. Specific, true detail is more persuasive than general claims.",
            "Add a second paragraph about your approach or what you stand for.",
          ],
          image: { src: "assets/img/placeholder-story.svg", alt: "Placeholder for a story image", width: 1200, height: 900 },
        },
        {
          type: "missionVision",
          mission: { heading: "Our mission", text: "One or two sentences describing what your business is here to do." },
          vision: { heading: "Our vision", text: "One or two sentences describing where your business is heading." },
        },
        {
          type: "values",
          eyebrow: "Values",
          heading: "What we stand for",
          items: [
            { title: "Value one", text: "Describe this value in one short sentence." },
            { title: "Value two", text: "Describe this value in one short sentence." },
            { title: "Value three", text: "Describe this value in one short sentence." },
            { title: "Value four", text: "Describe this value in one short sentence." },
          ],
        },
        {
          type: "differentiators",
          eyebrow: "What sets us apart",
          heading: "Different where it matters",
          items: [
            { title: "Difference one", text: "Explain what makes your business different in one or two sentences." },
            { title: "Difference two", text: "Explain what makes your business different in one or two sentences." },
            { title: "Difference three", text: "Explain what makes your business different in one or two sentences." },
          ],
        },
        {
          type: "team",
          optional: true,
          eyebrow: "Our team",
          heading: "The people behind the business",
          // Add real people. With members: [] this section is hidden automatically.
          members: [],
          // { name: "Full name", role: "Role", bio: "One or two sentences.", image: { src: "assets/img/team-1.jpg", alt: "Full name" } }
        },
        {
          type: "cta",
          heading: "Let's talk about your project.",
          text: "One sentence inviting visitors to get in touch.",
          primaryCta: { label: "Contact us", page: "contact" },
        },
      ],
    },

    services: {
      slug: "services",
      seo: {
        title: "Services",
        description:
          "Write a 120 to 160 character summary of your Services page that names your main services and your location.",
        keywords: ["your services"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "Services",
          heading: "What we can do for you.",
          text: "A short sentence introducing your services and how customers can get started.",
        },
        { type: "catalogueDetail" },
        {
          type: "process",
          eyebrow: "How it works",
          heading: "From first contact to finished work",
          intro: "A short sentence explaining your process.",
          items: [
            { title: "Step one", text: "Describe the first step of working with you." },
            { title: "Step two", text: "Describe the second step of working with you." },
            { title: "Step three", text: "Describe the third step of working with you." },
            { title: "Step four", text: "Describe the final step of working with you." },
          ],
        },
        { type: "pricing" },
        {
          type: "faq",
          eyebrow: "Questions",
          heading: "Common questions",
          sample: true, // replace with real answers, then set false
          items: [
            { q: "Question one goes here?", a: "Write a clear, honest answer to this question in one or two sentences." },
            { q: "Question two goes here?", a: "Write a clear, honest answer to this question in one or two sentences." },
            { q: "Question three goes here?", a: "Write a clear, honest answer to this question in one or two sentences." },
            { q: "Question four goes here?", a: "Write a clear, honest answer to this question in one or two sentences." },
            { q: "Question five goes here?", a: "Write a clear, honest answer to this question in one or two sentences." },
          ],
        },
        {
          type: "cta",
          heading: "Not sure what you need?",
          text: "Describe what you are looking for and we'll recommend the right option.",
          primaryCta: { label: "Ask for advice", page: "contact", query: "?enquiry=quote" },
        },
      ],
    },

    contact: {
      slug: "contact",
      seo: {
        title: "Contact us",
        description:
          "Write a 120 to 160 character summary of your Contact page that invites visitors to request a quote or ask a question.",
        keywords: ["contact your business"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "Contact",
          heading: "Get in touch.",
          text: "Send an enquiry using the form, or reach us directly using the details below.",
        },
        { type: "contactMain" },
      ],
    },
  },
};
