import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants-routes";

// Import your page components here
import DashboardLayout from "@/layout/dashboard-layout";
import Jobs from "@/app/dashboard/jobs";
import Settings from "@/app/dashboard/settings";
import Students from "@/app/dashboard/students";
import Messages from "@/app/dashboard/message";
import ProfilePage from "@/app/profiles/personal";
import OrganizationProfile from "@/app/profiles/organization";
import Members from "@/app/dashboard/members";
import FindTalent from "@/app/dashboard/find-talent";
import CoursesPage from "@/app/dashboard/courese";
import ForgotPassword from "@/app/auth/forget-password";
import SignUp from "@/app/auth/sign-up";
import Verification from "@/app/auth/verification";
import ResetPassword from "@/app/auth/reset-password";
import { CollegeForm } from "@/app/college/college-form";
import Overview from "@/app/overview/overview";
import NotFound from "@/app/error/not-found";
import LoginScreen from "@/app/auth/log-in";
import AuthLayout from "@/layout/auth-layout";
// import AuthLayout from "@/layout/auth-layout";


const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginScreen />,
      },
      {
        path: ROUTES.AUTH.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
      {
        path: ROUTES.AUTH.STUDENT_SIGNUP,
        element: <SignUp />,
      },
      {
        path: ROUTES.AUTH.VERIFICATION,
        element: <Verification />,
      },
      {
        path: ROUTES.AUTH.RESET_PASSWORD,
        element: <ResetPassword />,
      },
    ],
  }
  ,

  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: ROUTES.DASHBOARD_HOME,
        element: <Overview />,
      },

      {
        path: ROUTES.DASHBOARD_JOBS,
        element: <Jobs />
      },
      {
        path: ROUTES.DASHBOARD_SETTINGS,
        element: <Settings />
      },
      {
        path: ROUTES.DASHBOARD_STUDENTS,
        element: <Students />
      },
      {
        path: ROUTES.DASHBOARD_MESSAGES,
        element: <Messages />
      },
      {
        path: ROUTES.DASHBOARD_FIND_TALENT,
        element: <FindTalent />
      },
      {
        path: ROUTES.DASHBOARD_MEMBERS,
        element: <Members />
      },

      {
        path: ROUTES.DASHBOARD_USER,
        element: <ProfilePage />
      },
      {
        path: ROUTES.DASHBOARD_COLLEGES,
        element: <OrganizationProfile />
      },
      {
        path: ROUTES.DASHBOARD_COLLEGE_UPDATE,
        element: <CollegeForm />
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },

    ],

  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
