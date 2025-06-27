import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants-routes";

// Import your page components here
import DashboardLayout from "@/layout/dashboard-layout";
import Home from "@/app/dashboard/home";
import Jobs from "@/app/dashboard/jobs";
import Settings from "@/app/dashboard/settings";
import Students from "@/app/dashboard/students";
import Messages from "@/app/dashboard/message";
import ProfilePage from "@/app/profiles/personal";
import OrganizationProfile from "@/app/profiles/organization";
import Members from "@/app/dashboard/members";
import FindTalent from "@/app/dashboard/find-talent";
import CoursesPage from "@/app/dashboard/courese";
import LogIn from "@/app/auth/log-in";
import ForgotPassword from "@/app/auth/forget-password";
import SignUp from "@/app/auth/sign-up";
import Verification from "@/app/auth/verification";
import ResetPassword from "@/app/auth/reset-password";
import { CollegeForm } from "@/app/college/college-form";
// import AuthLayout from "@/layout/auth-layout";


const router = createBrowserRouter([

 
  {
    path:"/log-in",
    element:<LogIn/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:"/sign-up",
    element:<SignUp/>
  },
  {
    path:"/verification/:username",
    element:<Verification/>
  },
  {
    path:"/:username/reset-password/:token",
    element:<ResetPassword/>
  },

  {
    path: '/',
    element: <DashboardLayout />,  
    children: [
      {
        path: ROUTES.DASHBOARD_HOME,
        element: <Home />,
      },

      {
        path:ROUTES.DASHBOARD_JOBS,
        element:<Jobs/>
      },
      {
        path:ROUTES.DASHBOARD_SETTINGS,
        element:<Settings/>
      },
      {
        path:ROUTES.DASHBOARD_STUDENTS,
        element:<Students/>
      },
      {
        path:ROUTES.DASHBOARD_MESSAGES,
        element:<Messages/>
      },
      {
        path:ROUTES.DASHBOARD_FIND_TALENT,
        element:<FindTalent/>
      },
      {
        path:ROUTES.DASHBOARD_MEMBERS,
        element:<Members/>
      },
      
      {
        path:ROUTES.DASHBOARD_USER,
        element:<ProfilePage/>
      },
      {
        path:ROUTES.DASHBOARD_COLLEGES,
        element:<OrganizationProfile/>
      },
      {
        path:ROUTES.DASHBOARD_COLLEGE_UPDATE,
        element:<CollegeForm/>
      },
      {
        path:'courses',
        element:<CoursesPage/>
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
