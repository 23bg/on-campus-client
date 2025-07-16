
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/log-in',
    SIGNUP: '/auth/sign-up',
    VERIFY_OTP: '/auth/verify-otp',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    LOGOUT: '/auth/logout',
  },

  STUDENT: {
    PROFILE: '/student/profile',
    UPDATE: '/student/update',
  },

  MEMBER: {
    PROFILE: '/member/profile',
    UPDATE: '/member/update',
  },

  COLLEGES: {
    GET_ALL: '/colleges',
    CREATE: '/college/create',
    UPDATE: (username: string) => `/college/${username}/update`,
    GET_BY_USERNAME: (username: string) => `/college/${username}`,
  },

  COMPANIES: {
    GET_ALL: '/companies',
    GET_BY_USERNAME: (username: string) => `/company/${username}`,
  },

  DASHBOARD: {
    STATS: '/dashboard/stats',
    NOTIFICATIONS: '/dashboard/notifications',
  },

  COMMON: {
    UPLOAD_IMAGE: '/upload/image',
    STATUS: '/status',
  },
};
