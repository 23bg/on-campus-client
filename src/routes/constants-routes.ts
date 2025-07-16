export const ROUTES = {

  AUTH: {
    LOGIN: "/log-in",
    VERIFICATION: "/verification",   
    STUDENT_SIGNUP: "/student-sign-up",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password/:token",
  },

  // Dashboard Base
  DASHBOARD: "/",

  // Dashboard Sub Routes
  DASHBOARD_HOME: "", // Optional: use with nested routing
  DASHBOARD_COLLEGES: "colleges",
  DASHBOARD_JOBS: "jobs",
  DASHBOARD_STUDENTS: "students",
  DASHBOARD_EDUCATORS: "educators",
  DASHBOARD_COMPANIES: "companies",
  DASHBOARD_SETTINGS: "settings",
  DASHBOARD_FIND_TALENT: "find-talent",
  DASHBOARD_MEMBERS: "members",
  DASHBOARD_MESSAGES: "messages",

  // College & Company Routes
  COLLEGE_CREATE: "colleges/create",
  DASHBOARD_COLLEGE: "colleges/:username",
  DASHBOARD_COLLEGE_UPDATE: "colleges/:username/update",

  DASHBOARD_COMPANY: "companies/:username",
  DASHBOARD_COMPANY_UPDATE: "companies/:username/update",

  // Generic User Profile
  DASHBOARD_USER: "users/:username",

  // Support & Help Routes
  SUPPORT: "/support",
  HELP: "/help",
  FAQ: "/help/faq",
  CONTACT_SUPPORT: "/help/contact",
};
