import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from react-router-dom
import { toast } from "sonner"; // Assuming you're using 'sonner' for toast notifications
import { Button } from "@/components/ui/button"; // Assuming you're using custom button component
import { Label } from "@/components/ui/label"; // Assuming you're using custom label component
import { Phone, User, } from "lucide-react"; // Using lucide-react for icons
import CommonInput from "@/components/common/CommonInput"; // Assuming you're using a custom CommonInput component
import CommonButton from "@/components/common/CommonButton"; // Assuming you're using a custom CommonButton component

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(""); // new password state
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // Replacing useRouter with useNavigate from react-router-dom

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Navigate to dashboard if token exists
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
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

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col px-4 py-8 md:py-12 font-normal bg-grey-100 text-sm bg-zinc-50">
      <div className="flex-grow w-full max-w-xs mx-auto">
        <div className="flex flex-col gap-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              {/* Welcome Heading */}
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
                Welcome to <span className="text-green-600">On Campus</span>
              </h1>
              <p className="text-xs text-muted-foreground text-center max-w-xs">
                Empowering campuses with smart, secure placement solutions for tomorrow’s workforce.
              </p>
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
                Login
              </CommonButton>
            </div>

            {/* Forgot Password Button */}
            <div className="text-center py-2">
              <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-muted" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-muted" />
            </div>

            {/* Social Logins */}
            <div className="flex flex-col gap-2 pt-2">
              {/* <CommonButton
                variant="outline"
                className="w-full border-muted font-thin hover:bg-brand-green/90"
                icon={<User className="h-4 w-4" />}
                onClick={() => handleSocialLogin("Google")}
              >
                Continue with Google
              </CommonButton> */}

              <CommonButton
                variant="outline"
                className="w-full border-muted font-thin hover:text-white"
                style={{
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00a264")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                icon={<User className="h-4 w-4" />}
                onClick={() => handleSocialLogin("Google")}
              >
                Continue with Google
              </CommonButton>

              <CommonButton
                variant="outline"
                className="w-full border-muted hover:bg-green-400"
                icon={<Phone className="h-4 w-4" />}
                onClick={() => navigate("/phone-login")}
              >
                Login with Phone & OTP
              </CommonButton>
            </div>
          </form>

          <div className="text-center text-sm pt-1">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="underline underline-offset-4 mx-1 text-green-500">
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Footer */}
      <div className="w-full mt-auto py-4">
        <div className="text-center text-xs text-muted-foreground">
          <p>
            By clicking continue, you agree to our <br />
            <Button variant="link" size="sm" className="text-xs text-black dark:text-white">
              Terms of Service
            </Button>
            and
            <Button variant="link" size="sm" className="text-xs text-black dark:text-white">
              Privacy Policy
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
