/**
 * KM PROJECTS WEBSITE CONFIGURATION
 *
 * Confirmed brand and service details are configured below. Empty contact fields,
 * service-area details and illustrative images are intentional placeholders until
 * KM Projects supplies the real information. Keep indexing disabled until launch details
 * and the contact form have been confirmed and tested.
 */
module.exports = {
  /* ------------------------------------------------------------------ */
  /* BUSINESS                                                            */
  /* ------------------------------------------------------------------ */
  business: {
    name: "KM PROJECTS",
    legalName: "KM Projects",
    industry: "Home renovations, cabinetry and security installations",
    tagline: "Practical home improvements. Quality workmanship.",
    shortDescription: "KM Projects provides home renovations, kitchen cabinets, built-in cabinets, driveway gates and burglar bars. Contact the team to discuss your project.",
    foundedYear: null, // e.g. 2012. Leave null to hide "since" mentions.
    // Schema.org type. Use the most specific one that fits, e.g. "HomeAndConstructionBusiness",
    // "Dentist", "Restaurant", "LegalService", "Store", "AutoRepair", "ProfessionalService".
    schemaType: "HomeAndConstructionBusiness",
    priceRange: null, // e.g. "$$". Leave null if unknown.
    areaServed: [], // PLACEHOLDER: add the actual towns/areas KM Projects serves.,
    // Logo slot. type:
    //   "image+name"  logo image on the LEFT with the business name beside it
    //   "image"       logo image only (for logos that already include the name)
    //   "text"        letter badge + name, no image needed
    // Replace src with your logo (SVG or PNG), then set width/height to its display size in px.
    // srcOnDark: optional light version for the dark footer. Without it the logo sits on a white tile.
    logo: {
      type: "image",
      src: "assets/img/km-projects-logo.svg", // Supplied KM Projects logo.
      srcOnDark: "",
      alt: "KM Projects",
      width: 220,
      height: 74,
      mark: "KM", // letter used for the "text" type and the generated favicon
    },
  },

  /* ------------------------------------------------------------------ */
  /* SITE / TECHNICAL                                                    */
  /* ------------------------------------------------------------------ */
  site: {
    url: "https://test-sites-flowlinestudio10.vercel.app", // Temporary hosting URL; replace with KM Projects' confirmed domain before launch.
    language: "en",
    locale: "en_ZA",
    // Keep false until real content is in place. true = indexable by search engines.
    indexable: false,
    outputDir: "dist",
    ogImage: "assets/img/og-default.svg", // 1200x630 PNG/JPG for social sharing
    titleSeparator: " | ",
  },

  /* ------------------------------------------------------------------ */
  /* THEME: colours, type, shape                                         */
  /* ------------------------------------------------------------------ */
  theme: {
    colors: {
      primary: "#176B2C",
      primaryDark: "#10451F",
      onPrimary: "#ffffff",
      accent: "#2D8A43",
      ink: "#202820",
      muted: "#68736A",
      line: "#DCE6DD",
      surface: "#F4F8F4",
      background: "#FFFFFF",
    },
    fonts: {
      // Modern sans-serif pairing with system-font fallbacks.
      // Set googleFontsUrl to null to use only system fonts (fastest, no download).
      heading: '"Manrope", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      body: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      googleFontsUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
    },
    radius: "6px", // clean, practical finish
  },

  /* ------------------------------------------------------------------ */
  /* CONTACT                                                             */
  /* ------------------------------------------------------------------ */
  contact: {
    email: "",
    phone: "",
    phoneHref: "",
    whatsapp: "",
    whatsappMessage: "Hello, I'd like to make an enquiry.",
    whatsappFloating: true, // floating chat button on every page except Contact
    address: {
      street: "",
      locality: "",
      region: "KwaZulu-Natal",
      postalCode: "",
      country: "ZA",
      countryName: "South Africa",
    },
    // Google Maps: paste the "Embed a map" src URL. "" hides the map.
    mapEmbedUrl: "",
    mapLink: "", // link to open the location in Google Maps
    // days: schema.org day names. closed: true shows "Closed". Example hours: replace with your own.
    hours: [],
    social: [
      // { name: "Facebook", url: "https://facebook.com/yourpage" }
      // Supported icons: Facebook, Instagram, LinkedIn, X, YouTube, TikTok
    ],
  },

  /* ------------------------------------------------------------------ */
  /* NAVIGATION + FOOTER                                                 */
  /* ------------------------------------------------------------------ */
  // Slim contact strip above the header. enabled: false removes it.
  topBar: { enabled: true, message: "HOME RENOVATIONS  /  CABINETRY  /  SECURITY", showHours: false, showEmail: false },

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
    blurb: "Home renovations, custom cabinetry and security installations by KM Projects.",
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
    endpoint: "",
    enquiryTypes: ["Request a quote", "Home renovations", "Kitchen cabinets", "Built-in cabinets", "Driveway gates", "Burglar bars", "General enquiry"],
    quoteType: "Request a quote", // pre-selected when arriving from a quote button
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
    itemLabel: "service",
    itemLabelPlural: "services",
    items: [
      {
        id: "home-renovations",
        icon: "wrench",
        name: "Home Renovations",
        summary: "Refresh and improve your home with renovation work planned around your space and needs.",
        description: "From updating existing rooms to improving the way your home works, discuss the renovation you have in mind and the work required.",
        benefits: ["Work planned around your home", "Options discussed to suit your project", "A clear scope before work begins"],
        price: null,
        cta: "Enquire about renovations",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85", alt: "Construction work on a residential renovation site", width: 1200, height: 900 },
      },
      {
        id: "kitchen-cabinets",
        icon: "layers",
        name: "Kitchen Cabinets",
        summary: "Kitchen cabinetry to help make your kitchen more organised and functional.",
        description: "Discuss cabinet layouts, storage needs, finishes and the look you want for your kitchen. Add project photographs and material options here when available.",
        benefits: ["Cabinet layout to suit the space", "Storage and finish options", "Designed around your kitchen requirements"],
        price: null,
        cta: "Enquire about kitchen cabinets",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", alt: "Fitted kitchen cabinets and work surfaces", width: 1200, height: 900 },
      },
      {
        id: "built-in-cabinets",
        icon: "building",
        name: "Built-in Cabinets",
        summary: "Built-in storage solutions for bedrooms and other areas around the home.",
        description: "Make better use of available space with built-in cabinets planned around your storage requirements and preferred finish.",
        benefits: ["Storage tailored to the available space", "Choice of layout and finish", "Practical everyday organisation"],
        price: null,
        cta: "Enquire about built-in cabinets",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85", alt: "Illustrative image of built-in bedroom storage", width: 1200, height: 900 },
      },
      {
        id: "driveway-gates",
        icon: "shield",
        name: "Driveway Gates",
        summary: "Driveway gate solutions to suit your property's entrance and access needs.",
        description: "Discuss the style, opening requirements and dimensions for a driveway gate that suits your property. Add gate types, automation options and project photos here when confirmed.",
        benefits: ["Options for different entrances", "Style and access requirements considered", "Project-specific measurements and details"],
        price: null,
        cta: "Enquire about driveway gates",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85", alt: "Residential driveway entrance with a metal gate", width: 1200, height: 900 },
      },
      {
        id: "burglar-bars",
        icon: "shield",
        name: "Burglar Bars",
        summary: "Security bars for windows and other suitable openings around your home.",
        description: "Discuss the openings that need protection, preferred designs and measurements. Add confirmed design choices and installation details here when available.",
        benefits: ["Options for different window openings", "Design discussed to suit the property", "Measurements confirmed for each project"],
        price: null,
        cta: "Enquire about burglar bars",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85", alt: "Metal burglar bars fitted to residential windows", width: 1200, height: 900 },
      },
    ],
    pricing: {
      heading: "A scope-led approach to pricing",
      intro: "Every project is different. Pricing is prepared once the scope, specifications and relevant site details are understood.",
      tiers: [],
    },
  },

  /* ------------------------------------------------------------------ */
  /* PAGES: SEO + ordered sections                                       */
  /* Reorder, remove or duplicate sections freely. Each is {type,...}.   */
  /* ------------------------------------------------------------------ */
  pages: {
    home: {
      slug: "",
      seo: {
        title: "KM Projects | Home Renovations, Cabinets & Security",
        description: "KM Projects offers home renovations, kitchen cabinets, built-in cabinets, driveway gates and burglar bars. Get in touch to discuss your project.",
        keywords: ["home renovations", "kitchen cabinets", "built-in cabinets", "driveway gates", "burglar bars"],
      },
      sections: [
        {
          type: "hero",
          eyebrow: "Home renovations · Cabinetry · Security",
          headline: "Make more of your home.",
          text: "From kitchen and built-in cabinets to home renovations, driveway gates and burglar bars, KM Projects helps you improve the spaces that matter.",
          primaryCta: { label: "Request a quote", page: "contact", query: "?enquiry=quote" },
          secondaryCta: { label: "Explore our services", page: "services" },
          highlights: ["Home renovations", "Kitchen & built-in cabinets", "Gates & burglar bars"],
          image: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=88", alt: "Home renovation and building work in progress", width: 1800, height: 1400 },
        },
        {
          type: "intro",
          eyebrow: "KM Projects",
          heading: "Practical improvements, made for your home.",
          paragraphs: [
            "Whether you are updating a kitchen, adding built-in storage or improving your property's security, start with a clear idea of what you need.",
            "Tell KM Projects about your space and the work you have in mind. The details of your project can then be discussed before a quote is prepared.",
          ],
          link: { label: "Learn more about our services", page: "services" },
          image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88", alt: "Illustrative image of a fitted kitchen", width: 1400, height: 1050 },
        },
        {
          type: "catalogue",
          eyebrow: "What we do",
          heading: "Our services",
          intro: "Explore the home improvement, cabinetry and security services offered by KM Projects.",
          featuredOnly: true,
          link: { label: "View all services", page: "services" },
        },
        {
          type: "features",
          eyebrow: "Getting started",
          heading: "A straightforward way to plan your project.",
          items: [
            { icon: "message-circle", title: "Tell us what you need", text: "Share the type of work, the area of your home and what you would like to change." },
            { icon: "clipboard-check", title: "Discuss the details", text: "Go through measurements, design preferences, materials and practical requirements." },
            { icon: "check", title: "Request your quote", text: "Use the agreed project details as the basis for a quotation." },
          ],
        },
        {
          type: "cta",
          heading: "Have a project in mind?",
          text: "Get in touch with KM Projects and tell us what you would like done.",
          primaryCta: { label: "Request a quote", page: "contact", query: "?enquiry=quote" },
          secondaryCta: { label: "View services", page: "services" },
        },
      ],
    },
    about: {
      slug: "about",
      seo: {
        title: "About KM Projects | Home Improvement Services",
        description: "Find out more about KM Projects and its home renovation, cabinetry and property security services.",
        keywords: ["about KM Projects", "home improvement", "cabinet installation"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "About KM Projects",
          heading: "Improvements that work for your home.",
          text: "KM Projects provides home renovation, cabinetry and property security services.",
        },
        {
          type: "story",
          heading: "A project starts with what you need.",
          paragraphs: [
            "Every home and property is different. The right solution depends on the space, the way it is used and the result you want to achieve.",
            "KM Projects works across home renovations, kitchen cabinets, built-in cabinets, driveway gates and burglar bars. Contact the team to discuss your requirements and confirm the details for your project.",
          ],
          image: { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88", alt: "Residential home improvement detail", width: 1400, height: 1050 },
        },
        {
          type: "values",
          eyebrow: "Our approach",
          heading: "What matters when planning the work.",
          items: [
            { title: "Understand the space", text: "Consider the property's layout, measurements and how the finished work will be used." },
            { title: "Choose suitable details", text: "Discuss materials, finishes and design choices that fit the project." },
            { title: "Keep the scope clear", text: "Confirm the work required before moving ahead with a quotation." },
          ],
        },
        {
          type: "cta",
          heading: "Let's discuss your project.",
          text: "Get in touch with KM Projects to talk through the work you have in mind.",
          primaryCta: { label: "Contact KM Projects", page: "contact" },
        },
      ],
    },
    services: {
      slug: "services",
      seo: {
        title: "Services | KM Projects",
        description: "Explore KM Projects services including home renovations, kitchen cabinets, built-in cabinets, driveway gates and burglar bars.",
        keywords: ["home renovations", "kitchen cabinets", "built-in cabinets", "driveway gates", "burglar bars"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "Our services",
          heading: "Home improvements and practical solutions.",
          text: "Explore the services offered by KM Projects and get in touch to discuss the details of your project.",
        },
        { type: "catalogueDetail" },
        {
          type: "faq",
          eyebrow: "Before you enquire",
          heading: "A few helpful questions.",
          items: [
            { q: "How do I request a quote?", a: "Use the contact form to describe the work you need. Include measurements, photos or other details if you have them available." },
            { q: "Can I enquire about more than one service?", a: "Yes. Select the closest enquiry type and explain all the work you would like to discuss in your message." },
            { q: "Do I need measurements or photographs?", a: "They can help explain your project. If you do not have them yet, start with a short description of the space and the work required." },
          ],
        },
        {
          type: "cta",
          heading: "Not sure where to start?",
          text: "Send an enquiry and explain what you would like to improve.",
          primaryCta: { label: "Get in touch", page: "contact", query: "?enquiry=quote" },
        },
      ],
    },
    contact: {
      slug: "contact",
      seo: {
        title: "Contact KM Projects | Request a Quote",
        description: "Contact KM Projects about home renovations, kitchen cabinets, built-in cabinets, driveway gates or burglar bars.",
        keywords: ["contact KM Projects", "home renovation quote", "cabinet quote"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "Contact KM Projects",
          heading: "Tell us what you have in mind.",
          text: "Send through a few details about your project and the team can follow up using the contact information you provide.",
        },
        { type: "contactMain" },
      ],
    },
  },

};
