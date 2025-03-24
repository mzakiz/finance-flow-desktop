
import React from 'react';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, CreditCard, PieChart, Settings, Users, LogOut } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active }) => (
  <Link to={to} className={`nav-item ${active ? 'active' : ''}`}>
    {icon}
    <span>{label}</span>
  </Link>
);

export const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navigationItems = [
    { icon: <Home size={18} />, label: 'Home', to: '/dashboard' },
    { icon: <FileText size={18} />, label: 'Apply for Financing', to: '/register' },
    { icon: <CreditCard size={18} />, label: 'My Applications', to: '/applications' },
    { icon: <PieChart size={18} />, label: 'Repayments', to: '/repayments' },
    { icon: <Users size={18} />, label: 'Profile', to: '/profile' },
    { icon: <Settings size={18} />, label: 'Settings', to: '/settings' },
  ];
  
  return (
    <aside className="h-screen w-64 border-r border-border bg-card flex flex-col">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="px-3 py-2 flex-1">
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <NavItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={location.pathname === item.to}
            />
          ))}
        </nav>
      </div>
      
      <div className="p-3 border-t border-border">
        <button className="nav-item w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};
