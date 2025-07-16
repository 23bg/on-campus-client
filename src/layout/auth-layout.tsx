import React from "react";
import { Outlet } from "react-router-dom";
import DashboardFooter from "@/components/custom/dashboard-footer";
import logo from '@/assets/favicon.ico'

const AuthLayout: React.FC = () => {
  return (
    <>

      <div className="min-h-screen flex flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">

        {/* Header */}
        <header className="px-6 py-4 flex items-center justify-between   ">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="On Campus Logo"
              className="h-10 w-auto"
            />
         
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <a href="/support" className="hover:text-black dark:hover:text-white">Support</a>
            <a href="/docs" className="hover:text-black dark:hover:text-white">Docs</a>
          </div>
        </header>

        {/* Main Outlet */}
        <main className="flex-grow flex items-center justify-center px-4">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="shrink-0 border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950">
          <DashboardFooter />
        </footer>
      </div>
    </>
  );
};

export default AuthLayout;
