
import React from 'react';
import { Sidebar } from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showBackButton = false, 
  title 
}) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {!isMobile && !isLoginPage && <Sidebar />}
      <main className="flex-1 flex flex-col relative">
        {!isLoginPage && (
          <div className="bg-background sticky top-0 z-10 border-b border-border/50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              {showBackButton ? (
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}
              
              {title && (
                <h1 className="text-xl font-semibold text-center flex-1">{title}</h1>
              )}
              
              <div className="w-24" />
            </div>
          </div>
        )}
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};
