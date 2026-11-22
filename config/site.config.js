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
    name: "AUREL CONSTRUCTION",
    legalName: "Aurel Construction",
    industry: "Construction & property development",
    tagline: "Considered construction. Enduring spaces.",
    shortDescription: "A design-led construction studio shaping refined residential, commercial and renovation spaces.",
    foundedYear: null, // e.g. 2012. Leave null to hide "since" mentions.
    // Schema.org type. Use the most specific one that fits, e.g. "HomeAndConstructionBusiness",
    // "Dentist", "Restaurant", "LegalService", "Store", "AutoRepair", "ProfessionalService".
    schemaType: "HomeAndConstructionBusiness",
    priceRange: null, // e.g. "$$". Leave null if unknown.
    areaServed: ["Durban", "KwaZulu-Natal", "South Africa"],
    // Logo slot. type:
    //   "image+name"  logo image on the LEFT with the business name beside it
    //   "image"       logo image only (for logos that already include the name)
    //   "text"        letter badge + name, no image needed
    // Replace src with your logo (SVG or PNG), then set width/height to its display size in px.
    // srcOnDark: optional light version for the dark footer. Without it the logo sits on a white tile.
    logo: {
      type: "text",
      src: "",
      srcOnDark: "",
      alt: "Aurel Construction",
      width: 44,
      height: 44,
      mark: "A", // letter used for the "text" type and the generated favicon
    },
  },

  /* ------------------------------------------------------------------ */
  /* SITE / TECHNICAL                                                    */
  /* ------------------------------------------------------------------ */
  site: {
    url: "https://test-sites-flowlinestudio10.vercel.app", // production origin, no trailing slash
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
      primary: "#292A26",
      primaryDark: "#171815",
      onPrimary: "#ffffff",
      accent: "#B18A58",
      ink: "#252621",
      muted: "#77766F",
      line: "#DEDAD1",
      surface: "#F1EFE9",
      background: "#FAF9F6",
    },
    fonts: {
      // Modern sans-serif pairing with system-font fallbacks.
      // Set googleFontsUrl to null to use only system fonts (fastest, no download).
      heading: '"Manrope", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      body: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      googleFontsUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
    },
    radius: "2px", // refined, architectural edges
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
  topBar: { enabled: true, message: "DESIGN-LED CONSTRUCTION  /  DURBAN, SOUTH AFRICA", showHours: false, showEmail: false },

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
    blurb: "Considered construction for spaces designed to be lived in, worked in and remembered.",
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
    itemLabel: "service",
    itemLabelPlural: "services",
    items: [
      {
        id: "residential-construction",
        icon: "house",
        name: "Residential Construction",
        summary: "Thoughtful new-build homes shaped around the people who live in them.",
        description: "From early planning through to the finishing details, residential projects are approached with a focus on function, proportion, materials and the way each space will be used.",
        benefits: ["A clear project brief", "Practical planning and coordination", "Considered material and finish choices"],
        price: null,
        cta: "Discuss a residential project",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", alt: "Contemporary residential architecture", width: 1200, height: 900 },
      },
      {
        id: "commercial-projects",
        icon: "building-2",
        name: "Commercial Projects",
        summary: "Purposeful spaces for businesses, teams and customers.",
        description: "Commercial environments need to balance practical requirements with a coherent experience. The brief, layout, materials and delivery sequence all contribute to the finished space.",
        benefits: ["Function-led space planning", "Coordination around project requirements", "Durable, considered finishes"],
        price: null,
        cta: "Discuss a commercial project",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", alt: "Contemporary commercial workspace", width: 1200, height: 900 },
      },
      {
        id: "renovations-extensions",
        icon: "hammer",
        name: "Renovations & Extensions",
        summary: "Rework existing spaces to better suit changing needs.",
        description: "A renovation is an opportunity to improve how a property works without losing sight of its character. Each scope is considered in relation to the existing structure, priorities and practical constraints.",
        benefits: ["Respect for the existing property", "Clear scope and finish decisions", "Improvements focused on everyday use"],
        price: null,
        cta: "Discuss a renovation",
        featured: true,
        image: { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", alt: "Refined renovated living space", width: 1200, height: 900 },
      },
      {
        id: "project-coordination",
        icon: "clipboard-check",
        name: "Project Coordination",
        summary: "Keep decisions, sequencing and communication connected.",
        description: "Good coordination helps keep the wider project in view. Scope, key decisions, site activity and finishing requirements are considered as connected parts of the work.",
        benefits: ["Clear communication points", "Practical sequencing of work", "Attention to the overall brief"],
        price: null,
        cta: "Discuss project coordination",
        featured: false,
        image: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85", alt: "Construction team reviewing work on site", width: 1200, height: 900 },
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
        title: "Aurel Construction | Refined Building & Design",
        description: "Aurel Construction brings a considered approach to residential builds, commercial spaces and renovations across Durban and KwaZulu-Natal.",
        keywords: ["construction Durban", "residential construction", "commercial building", "renovations KwaZulu-Natal"],
      },
      sections: [
        {
          type: "hero",
          eyebrow: "Construction · Development · Renovation",
          headline: "Built with intention. Made to endure.",
          text: "A considered approach to residential and commercial construction, where thoughtful planning meets lasting craftsmanship.",
          primaryCta: { label: "Discuss your project", page: "contact", query: "?enquiry=quote" },
          secondaryCta: { label: "Explore our work", page: "services" },
          highlights: ["Residential & commercial", "Renovations & extensions", "A considered project process"],
          image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88", alt: "Contemporary residence with refined architectural detailing", width: 1800, height: 1400 },
        },
        {
          type: "intro",
          eyebrow: "A more considered way to build",
          heading: "Good spaces begin with good decisions.",
          paragraphs: [
            "From the first conversation to the final finish, every project deserves clear thinking, careful coordination and attention to the details that shape how a space feels.",
            "Aurel brings construction, practical planning and a design-conscious perspective together to help turn considered ideas into places with purpose.",
          ],
          link: { label: "Discover our approach", page: "about" },
          image: { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88", alt: "Warm, minimal interior with natural materials", width: 1400, height: 1050 },
        },
        {
          type: "catalogue",
          eyebrow: "What we do",
          heading: "Spaces shaped around the brief.",
          intro: "A focused range of construction services for new spaces, evolving properties and more considered ways of working.",
          featuredOnly: true,
          link: { label: "View all services", page: "services" },
        },
        {
          type: "features",
          eyebrow: "The Aurel approach",
          heading: "The details make the difference.",
          items: [
            { icon: "compass", title: "Thoughtful planning", text: "A clear understanding of the brief, priorities and practical requirements before work begins." },
            { icon: "layers", title: "Careful coordination", text: "A joined-up approach to the moving parts that bring a construction project together." },
            { icon: "eye", title: "Attention to detail", text: "Material choices, proportions and finishes are considered as part of the whole." },
            { icon: "message-circle", title: "Clear communication", text: "Straightforward updates help keep decisions, expectations and next steps visible." },
          ],
        },
        {
          type: "cta",
          heading: "Have a project in mind?",
          text: "Start with a conversation. Tell us what you are planning and what matters most.",
          primaryCta: { label: "Start an enquiry", page: "contact", query: "?enquiry=quote" },
          secondaryCta: { label: "Explore services", page: "services" },
        },
      ],
    },

    about: {
      slug: "about",
      seo: {
        title: "About Aurel | A Considered Approach",
        description: "Discover Aurel Construction's considered approach to planning, coordination and craftsmanship across residential and commercial projects.",
        keywords: ["about Aurel Construction", "construction approach", "building company Durban"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "About Aurel",
          heading: "Built around a better way of working.",
          text: "A design-conscious construction concept grounded in practical thinking, clear communication and respect for the brief.",
        },
        {
          type: "story",
          heading: "A clear vision, carefully carried through.",
          paragraphs: [
            "Aurel is presented as a modern construction studio for clients who value a thoughtful process as much as the finished space. The focus is on understanding the brief, resolving the details and keeping the work aligned with the original intent.",
            "Rather than treating design and construction as separate conversations, the Aurel approach brings them together around the needs of each project.",
          ],
          image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88", alt: "Modern home with clean architectural lines and landscaped setting", width: 1400, height: 1050 },
        },
        {
          type: "missionVision",
          mission: { heading: "Our purpose", text: "To make the building process more considered, understandable and connected to the needs of the people who use each space." },
          vision: { heading: "Our perspective", text: "A built environment where thoughtful design, practical construction and enduring materials work together." },
        },
        {
          type: "values",
          eyebrow: "What guides the work",
          heading: "Principles behind every decision.",
          items: [
            { title: "Clarity", text: "A shared understanding of the brief, scope and decisions ahead." },
            { title: "Craft", text: "Care for the materials, junctions and finishes that shape the result." },
            { title: "Consideration", text: "Respect for the site, the people involved and the way a space will be used." },
            { title: "Accountability", text: "A practical, transparent approach to communication and coordination." },
          ],
        },
        {
          type: "differentiators",
          eyebrow: "A considered process",
          heading: "A strong result starts long before the build.",
          items: [
            { title: "Understand the brief", text: "Start with the purpose of the space, the priorities and the constraints." },
            { title: "Plan the details", text: "Work through materials, sequencing and practical requirements before they become site decisions." },
            { title: "Keep the whole in view", text: "Balance function, finish and the wider intent throughout the project." },
          ],
        },
        {
          type: "cta",
          heading: "Let's talk about what you want to build.",
          text: "Share the outline of your project and the outcome you have in mind.",
          primaryCta: { label: "Contact Aurel", page: "contact" },
        },
      ],
    },

    services: {
      slug: "services",
      seo: {
        title: "Construction Services | Aurel",
        description: "Explore Aurel's residential construction, commercial projects, renovations and project coordination services in Durban and KwaZulu-Natal.",
        keywords: ["construction services Durban", "home renovations", "commercial construction", "project coordination"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "Our services",
          heading: "The right team for the next stage of your space.",
          text: "From a new build to a considered renovation, each project begins with a clear brief and a practical plan.",
        },
        { type: "catalogueDetail" },
        {
          type: "process",
          eyebrow: "How we work",
          heading: "A clear path from idea to completion.",
          intro: "A considered process helps make complex projects easier to understand and manage.",
          items: [
            { title: "01 · Discover", text: "We begin by understanding your goals, site, priorities and the scope of work." },
            { title: "02 · Define", text: "The brief is shaped into a practical direction, with key decisions and requirements identified." },
            { title: "03 · Coordinate", text: "The work is organised around the agreed scope, sequence and communication points." },
            { title: "04 · Complete", text: "The focus moves to the finishing details, final checks and a clear handover." },
          ],
        },
        {
          type: "faq",
          eyebrow: "Useful to know",
          heading: "A few common questions.",
          items: [
            { q: "What types of projects do you take on?", a: "The Aurel concept covers residential construction, commercial spaces, renovations and extensions. The suitability of a project depends on its scope and requirements." },
            { q: "Can I discuss an early-stage idea?", a: "Yes. An initial enquiry can outline the idea, location, approximate scope and what you would like to achieve." },
            { q: "Do you work from existing plans?", a: "Project discussions can start with existing drawings, a written brief or an early concept. The next steps depend on the information available." },
            { q: "How is a project quotation prepared?", a: "A useful quotation depends on a defined scope, specifications and site information. These details are reviewed before pricing is confirmed." },
          ],
        },
        {
          type: "cta",
          heading: "Every project starts with a conversation.",
          text: "Tell us about the space, the scope and what a successful result looks like to you.",
          primaryCta: { label: "Request a consultation", page: "contact", query: "?enquiry=quote" },
        },
      ],
    },

    contact: {
      slug: "contact",
      seo: {
        title: "Contact Aurel | Discuss Your Project",
        description: "Start a conversation with Aurel Construction about a residential, commercial or renovation project in Durban and KwaZulu-Natal.",
        keywords: ["contact construction company Durban", "building quote", "renovation enquiry"],
      },
      sections: [
        {
          type: "pageHeader",
          eyebrow: "Start a conversation",
          heading: "Tell us what you have in mind.",
          text: "Share a few details about your project. The more context you provide, the easier it is to understand the next step.",
        },
        { type: "contactMain" },
      ],
    },
  },
};
