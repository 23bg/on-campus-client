import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants-routes";

// Import your page components here
import DashboardLayout from "@/layout/dashboard-layout";
import Home from "@/app/dashboard/home";
import Jobs from "@/app/dashboard/jobs";
import Settings from "@/app/dashboard/settings";
import Students from "@/app/dashboard/students";
import Colleges from "@/app/dashboard/colleges";
import Companies from "@/app/dashboard/companies";
import Messages from "@/app/dashboard/message";
import ProfilePage from "@/app/profiles/personal";
import OrganizationProfile from "@/app/profiles/organization";
import Members from "@/app/dashboard/members";
import FindTalent from "@/app/dashboard/find-talent";
import CoursesPage from "@/app/dashboard/courese";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,  
    children: [
      {
        path: ROUTES.DASHBOARD_HOME,
        element: <Home />,
      },
      {
        path:ROUTES.DASHBOARD_COLLEGES,
        element:<Colleges/>
      },
      {
        path:ROUTES.DASHBOARD_COMPANIES,
        element:<Companies/>
      },
      {
        path:ROUTES.DASHBOARD_COMPANIES,
        element:<Companies/>
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
        path:ROUTES.DASHBOARD_ORG,
        element:<OrganizationProfile/>
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
