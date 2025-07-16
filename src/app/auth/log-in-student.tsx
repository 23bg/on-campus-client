import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonInput from "@/components/common/CommonInput";
import CommonButton from "@/components/common/CommonButton";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const StudentLoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://imrabo.onrender.com/auth/student/log-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Student OTP sent!");
        sessionStorage.setItem("email", email);
        navigate("/verification");
      } else {
        toast.error(data.msg || "Login failed");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <Label>Email</Label>
        <CommonInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="student@example.com"
        />
      </div>
      <div>
        <Label>Password</Label>
        <CommonInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
        />
      </div>
      <CommonButton type="submit" className="w-full">
        Login as Student
      </CommonButton>
    </form>
  );
};

export default StudentLoginForm;
