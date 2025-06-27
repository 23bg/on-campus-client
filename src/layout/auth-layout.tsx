import { Button } from "@/components/ui/button";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {


    return (
        <div>
            <header className="w-full flex justify-between items-center py-4">
                <img src="src\assets\favicon.ico" alt="On Campus Logo" className="h-10" />

                <div className="flex items-center gap-4">

                    <div className="flex justify-center items-center">
                        <span>Login as</span>
                        <Button
                            variant="link"
                            size="sm"
                            className="text-green-600"
                        //   onClick={() => setIsStudent(!isStudent)}
                        >
                            {/* {isStudent ? "Student?" : "Member?"} */}
                        </Button>
                    </div>
                </div>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer className="mt-auto pt-6 pb-4 text-center text-xs text-muted-foreground space-y-2">
          

          <div>
            By logging in, you agree to our{" "}
            <a
              href="/terms"
              className="underline text-green-600 hover:text-green-700 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline text-green-600 hover:text-green-700 transition-colors"
            >
              Privacy Policy
            </a>.
          </div>
        </footer>
        </div>
    );
};

export default AuthLayout;
