import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate from react-router-dom for navigation
import { toast } from "sonner"; // Assuming you're using 'sonner' for toast notifications

import { Label } from "@/components/ui/label"; // Assuming a custom Label component
import CommonInput from "@/components/common/CommonInput"; // Assuming a custom input component
import CommonButton from "@/components/common/CommonButton"; // Assuming a custom button component
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // useNavigate hook for navigation in React

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://imrabo.onrender.com/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Sign up successful! Please check your email for verification.");
        navigate("/verification"); // Navigate to the verification page after successful sign up
      } else {
        setError(data.msg || "Sign up failed. Please try again.");
        toast.error(data.msg || "Sign up failed.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
      <title>Sign Up - On Campus Portel</title>
    </Helmet>
    <div className="min-h-screen flex flex-col px-4 bg-zinc-50 text-sm font-normal">

      {/* Header */}
      <header className="w-full flex justify-between items-center py-4">
        <img src="/favicon.ico" alt="On Campus Logo" className="h-10" />

        <div className="flex items-center gap-4">
          <Link to="/log-in">
            <Button variant="link" size="sm" className="text-green-600">
              Log In
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Sign Up Form */}
      <main className="flex-grow w-full max-w-xs mx-auto flex flex-col justify-center items-center">
         <div className="text-center space-y-2 py-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Welcome to <span className="text-green-600">On Campus</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Empowering campuses with smart, secure placement solutions for tomorrow’s workforce.
            </p>
          </div>
        <form onSubmit={handleSignUp} className="w-full space-y-6">
         

          {/* Input Fields */}
          <div className="space-y-4">
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

            {/* Error Message */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Submit Button */}
            <CommonButton
              type="submit"
              className="w-full bg-[var(--brand)] text-black"
              disabled={!email || !password || loading}
              loading={loading}
            >
              Sign Up
            </CommonButton>
          </div>

          {/* Already have an account? */}
          {/* <div className="text-center text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="underline underline-offset-4 text-green-600 hover:text-green-700"
            >
              Log in
            </a>
          </div> */}
            <p className="text-[11px] text-center text-muted-foreground mt-4">
            Your information is securely stored and never shared without consent.
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-xs text-muted-foreground px-4">
        <p>
          By signing up, you agree to our{" "}
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
        </p>
      </footer>
    </div>
    </>

  );
};

export default SignUp;
