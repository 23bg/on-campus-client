import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from react-router-dom
import { toast } from "sonner"; // Assuming you're using 'sonner' for toast notifications
import { Label } from "@/components/ui/label"; // Assuming you have a custom Label component
import CommonInput from "@/components/common/CommonInput"; // Assuming you have a custom CommonInput component
import CommonButton from "@/components/common/CommonButton"; // Assuming you have a custom CommonButton component

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // Replacing Next.js' useRouter with useNavigate from react-router-dom

  const handleSetNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("https://imrabo.onrender.com/auth/set-new-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Password updated successfully!");
        navigate("/login"); // Navigate to login after successful password reset
      } else {
        setError(data.msg || "Failed to set new password.");
        toast.error(data.msg || "Failed to set new password.");
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
          <form onSubmit={handleSetNewPassword} className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Set New Password</h1>
            </div>

            <div className="space-y-2">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="password">New Password</Label>
                  <CommonInput
                    id="password"
                    type="password"
                    placeholder="New password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <CommonInput
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <CommonButton
                type="submit"
                className="w-full bg-[var(--brand)] text-black"
                disabled={!password || !confirmPassword || loading}
                loading={loading}
              >
                Set New Password
              </CommonButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
