import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate for React Router
import { toast } from "sonner"; // Assuming you're using 'sonner' for toasts

import { Label } from "@/components/ui/label"; // Assuming custom Label component
import CommonInput from "@/components/common/CommonInput"; // Assuming custom input component
import CommonButton from "@/components/common/CommonButton"; // Assuming custom button component

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // useNavigate for navigation in React

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://imrabo.onrender.com/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("OTP sent! Please check your email.");
        navigate("/verification"); // Navigate to the verification page
      } else {
        setError(data.msg || "Password reset failed. Please try again.");
        toast.error(data.msg || "Password reset failed.");
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
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Forgot Password</h1>
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
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <CommonButton
                type="submit"
                className="w-full bg-green-500 text-black"
                disabled={!email || loading}
                loading={loading}
              >
                Reset Password
              </CommonButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
