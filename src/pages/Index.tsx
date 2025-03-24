
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }
    
    // For demo purposes, we'll just navigate to the registration page
    toast.success('Login successful');
    navigate('/dashboard');
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left panel - Login form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 justify-center">
        <div className="max-w-md mx-auto w-full">
          <Logo className="mb-10" />
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to Riyad Bank Corporate</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">Username</label>
              <div className="relative">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <button 
                  type="button" 
                  className="text-xs text-primary hover:underline"
                  onClick={() => navigate('/forgot-password')}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="input-field pr-10"
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>
            </div>
            
            <button type="submit" className="w-full btn-primary flex items-center justify-center">
              Log in
            </button>
          </form>
          
          <div className="mt-8">
            <p className="text-sm text-center text-muted-foreground">
              Don't have a corporate account?{' '}
              <button 
                onClick={() => navigate('/register')}
                className="text-primary hover:underline"
              >
                Apply for Financing
              </button>
            </p>
          </div>
        </div>
      </div>
      
      {/* Right panel - Background image */}
      <div className="hidden md:block md:w-1/2 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/90 to-brand-blue/70 mix-blend-multiply"></div>
        <div className="relative z-10 p-12 flex flex-col h-full justify-between">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Instant Financing</h2>
            <p className="text-white/80 max-w-md">
              Quick business loan financing to support your business viability
            </p>
          </div>
          
          <div className="text-white/80 text-sm">
            <p>© 2023 Riyad Bank. All rights reserved.</p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-tl-full transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default Index;
