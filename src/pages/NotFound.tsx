
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-6 py-12 bg-card rounded-2xl shadow-sm border border-border text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-5xl font-bold text-primary">404</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 py-3 px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
