import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import StudentLoginForm from "./log-in-student";
import MemberLoginForm from "./log-in-member";
import DashboardFooter from "@/components/custom/dashboard-footer";

const LoginScreen: React.FC = () => {
  const [role, setRole] = useState<"student" | "member">("student");

  const handleToggle = () => {
    setRole((prev) => (prev === "student" ? "member" : "student"));
  };

  return (
    <>
      <Helmet>
        <title>Login - On Campus</title>
      </Helmet>

      <div className=" w-full flex flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">

       
        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-md space-y-6 text-center">
            <h1 className="text-2xl font-semibold">
              Login as{" "}
              <span className="text-green-600 capitalize">{role}</span>
            </h1>

            <Button
              variant="link"
              onClick={handleToggle}
              className="text-sm text-green-600"
            >
              {role === "student"
                ? "Switch to Member Login"
                : "Switch to Student Login"}
            </Button>

            {role === "student" ? <StudentLoginForm /> : <MemberLoginForm />}
          </div>
        </main>


      </div>
    </>
  );
};

export default LoginScreen;
