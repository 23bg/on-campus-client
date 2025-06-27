import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from react-router-dom
import { toast } from "sonner"; // Assuming you're using 'sonner' for toast notifications

import { Label } from "@/components/ui/label"; // Assuming you have a custom Label component
import CommonInput from "@/components/common/CommonInput"; // Assuming you have a custom CommonInput component
import CommonButton from "@/components/common/CommonButton"; // Assuming you have a custom CommonButton component

const Verification: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // Replacing Next.js' useRouter with useNavigate from react-router-dom

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://imrabo.onrender.com/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("OTP verified! Please set your new password.");
        navigate("/new-password"); // Navigate to new-password page after successful OTP verification
      } else {
        setError(data.msg || "OTP verification failed. Please try again.");
        toast.error(data.msg || "OTP verification failed.");
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
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Verify OTP</h1>
            </div>

            <div className="space-y-2">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="otp">OTP</Label>
                  <CommonInput
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <CommonButton
                type="submit"
                className="w-full bg-[var(--brand)] text-black"
                disabled={!otp || loading}
                loading={loading}
              >
                Verify OTP
              </CommonButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
