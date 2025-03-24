
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-9 h-9 rounded-md bg-brand-purple flex items-center justify-center text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 16L21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-foreground">Riyad Bank</span>
        <span className="text-xs text-muted-foreground">Corporate Banking</span>
      </div>
    </Link>
  );
};
