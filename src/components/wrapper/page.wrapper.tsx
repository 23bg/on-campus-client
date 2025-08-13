// components/layout/PageWrapper.tsx
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface PageWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({
  title,
  subtitle,
  children,
  className = "",
}: PageWrapperProps) {
  return (
    <div className={`dark:bg-black min-h-screen ${className}`}>
      {/* Helmet for dynamic page title */}
      <Helmet>
        <title>{title} | OnCampus Portal</title>
      </Helmet>

      {/* Page Header */}
      <div className="border-b bg-white dark:bg-black">
        <div className="pt-24 px-6 md:px-36 pb-10 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-muted-foreground text-md">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="px-6 md:px-36 pt-16 pb-20 space-y-10">{children}</div>
    </div>
  );
}
