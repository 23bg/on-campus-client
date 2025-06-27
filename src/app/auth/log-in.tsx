/*

  * @file LogIn.tsx
  * @description This file contains the LogIn component for user authentication.
  * It handles user login with email and password, and provides options for social login.
  * this is for the login as a student and member for both

*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from react-router-dom
import { toast } from "sonner"; // Assuming you're using 'sonner' for toast notifications
import { Button } from "@/components/ui/button"; // Assuming you're using custom button component
import { Label } from "@/components/ui/label"; // Assuming you're using custom label component
import CommonInput from "@/components/common/CommonInput"; // Assuming you're using a custom CommonInput component
import CommonButton from "@/components/common/CommonButton"; // Assuming you're using a custom CommonButton component
import { Helmet } from "react-helmet-async";

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(""); // new password state
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // Replacing useRouter with useNavigate from react-router-dom
  const [isStudent, setIsStudent] = useState<boolean>(false);

  useEffect(() => {
    // document.title = "Log In - On Campus"; // Set the document title
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Navigate to dashboard if token exists
    }
  }, [navigate]);

  const handleMemberLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://imrabo.onrender.com/auth/log-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // Added password to the body
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("OTP sent! Please verify your email.");
        sessionStorage.setItem("email", email);
        navigate("/verification"); // Navigate to verification page after success
      } else {
        setError(data.msg || "Login failed. Please try again.");
        toast.error(data.msg || "Login failed.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleStudnetLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student login clicked");
    setError("");
    setLoading(true);
    toast.error("Member login is not implemented yet. Please try again later.");
    setLoading(false);
  }



  return (
    <>
      <Helmet>
        <title>Log In - On Campus Portal</title>
      </Helmet>
      <div className="min-h-screen w-full flex flex-col px-4  bg-zinc-50 text-sm font-normal">

        {/* Header with logo and actions */}
        <header className="w-full flex justify-between items-center py-4">
          <img src="src\assets\favicon.ico" alt="On Campus Logo" className="h-10" />

          <div className="flex items-center gap-4">
           
            <div className="flex justify-center items-center">
            <span>Login as</span>
            <Button
              variant="link"
              size="sm"
              className="text-green-600"
              onClick={() => setIsStudent(!isStudent)}
            >
              {isStudent ? "Student?" : "Member?"}
            </Button>
          </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center w-full max-w-xs mx-auto space-y-6">

          {/* Welcome Section */}
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-gray-900">
              Welcome to <span className="text-green-600">On Campus</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Empowering campuses with smart, secure placement solutions for tomorrow’s workforce.
            </p>
          </div>

          {/* Form Section */}
          {isStudent ? (
            // Member Login
            <form onSubmit={handleMemberLogin} className="w-full space-y-4">
              <div className="space-y-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <CommonInput
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <CommonInput
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <CommonButton
                  type="submit"
                  className="w-full bg-[var(--brand)] text-black"
                  disabled={!email || !password || loading}
                  loading={loading}
                >
                  Login
                </CommonButton>
              </div>

              <div className="text-center pt-2">
                <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          ) : (
            // Student Login
            <form onSubmit={handleStudnetLogin} className="w-full space-y-4">
              <div className="space-y-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <CommonInput
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <CommonButton
                  type="submit"
                  className="w-full bg-[var(--brand)] text-black"
                  disabled={!email || loading}
                  loading={loading}
                >
                  Login
                </CommonButton>
              </div>

              <div className="text-center text-sm pt-1">
                Don’t have an account?{" "}
                <a href="/sign-up" className="underline underline-offset-4 text-green-600">
                  Sign up
                </a>
              </div>
            </form>
          )}

          {/* Privacy Info */}
          <p className="text-[11px] text-center text-muted-foreground mt-4">
            Your information is securely stored and never shared without consent.
          </p>
        </main>

        {/* Footer Section */}
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

    </>


  );
};

export default LogIn;
