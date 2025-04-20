import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate from react-router-dom for navigation
import { toast } from "sonner"; // Assuming you're using 'sonner' for toast notifications

import { Label } from "@/components/ui/label"; // Assuming a custom Label component
import CommonInput from "@/components/common/CommonInput"; // Assuming a custom input component
import CommonButton from "@/components/common/CommonButton"; // Assuming a custom button component

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
    <div className="flex min-h-screen w-full flex-col px-4 py-8 md:py-12 font-normal bg-grey-100 text-sm">
      <div className="flex-grow w-full max-w-xs mx-auto">
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Sign Up</h1>
            </div>

            <div className="space-y-2">
              <div className="grid gap-4">
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
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <CommonButton
                type="submit"
                className="w-full bg-green-500 text-black"
                disabled={!email || !password || loading}
                loading={loading}
              >
                Sign Up
              </CommonButton>
            </div>
          </form>

          <div className="text-center text-sm pt-1">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4 mx-1 text-green-500">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
