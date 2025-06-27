export const ROUTES = {
    // Auth Routes
    LOGIN: "/log-in",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  
    // Dashboard Routes
    DASHBOARD: "/",
    DASHBOARD_HOME: "",
    DASHBOARD_COLLEGES: "colleges",
    DASHBOARD_JOBS: "jobs",
    DASHBOARD_STUDENTS: "students",
    DASHBOARD_EDUCATORS: "educators",
    DASHBOARD_COMPANIES: "companies",
    DASHBOARD_SETTINGS: "settings",
    DASHBOARD_FIND_TALENT: "find-talent",
    DASHBOARD_MEMBERS: "members", 
    DASHBOARD_MESSAGES: "messages", 


    COLLEGE_CREATE: "college/create",

  // Profile
    DASHBOARD_COLLEGE: "college/:username", 
    DASHBOARD_COMPANY: "company/:username", 
    DASHBOARD_COLLEGE_UPDATE: "college/:username/update", 
    DASHBOARD_COMPANY_UPDATE: "company/:username/update", 
    DASHBOARD_USER: ":username", 
    
    // Support & Help Routes
    SUPPORT: "/support", // Main support page
    HELP: "/help", // Main help page
    FAQ: "/help/faq", // Frequently Asked Questions
    CONTACT_SUPPORT: "/help/contact", // Contact support page
  };
  