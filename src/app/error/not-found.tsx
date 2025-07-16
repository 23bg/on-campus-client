// src/pages/NotFound.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // If you're using shadcn/ui or your own button
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | On Campus</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
        <img
          src="/404-illustration.svg" // Optional: replace with your asset
          alt="404 Not Found"
          className="max-w-xs mb-6"
        />

        <h1 className="text-4xl font-bold mb-2 text-green-600">404</h1>
        <p className="text-lg font-medium mb-2">Oops! Page not found</p>
        <p className="text-sm text-gray-500 text-center max-w-sm mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <Button
          onClick={() => navigate("/")}
          className="bg-[var(--brand)] text-black px-4 py-2 rounded-md"
        >
          Go to Home
        </Button>
      </div>
    </>
  );
};

export default NotFound;
