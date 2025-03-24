
import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Info, Check, X } from 'lucide-react';
import { toast } from 'sonner';

const RegisterPage = () => {
  const [commercialReg, setCommercialReg] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const navigate = useNavigate();
  
  const registrationSteps = [
    { id: 1, title: 'Commercial Registration', description: 'Enter your registration number' },
    { id: 2, title: 'Verification', description: 'Verify account details' },
    { id: 3, title: 'Terms & Conditions', description: 'Review and accept' },
    { id: 4, title: 'Apply', description: 'Complete application' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (commercialReg.length < 10) {
      toast.error('Please enter a valid commercial registration number');
      setIsValid(false);
      return;
    }
    
    setIsValid(true);
    setTimeout(() => {
      navigate('/terms');
    }, 1000);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits
    const value = e.target.value.replace(/\D/g, '');
    setCommercialReg(value);
    setIsValid(null);
  };

  return (
    <MainLayout title="Commercial Registration Verification" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={registrationSteps} currentStep={1} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 animate-fade-in">
            <div className="bg-card rounded-xl shadow-sm border border-border p-8">
              <div className="max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Enter your Commercial Registration</h2>
                <p className="text-muted-foreground mb-8">
                  Please enter your commercial registration number to begin the verification process.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="commercial-reg" className="text-sm font-medium">
                      Commercial Registration Number
                    </label>
                    <div className="relative">
                      <input
                        id="commercial-reg"
                        type="text"
                        value={commercialReg}
                        onChange={handleInputChange}
                        placeholder="Enter your 10-digit number"
                        maxLength={10}
                        className={`input-field ${
                          isValid === true ? 'border-green-500 pr-10' : 
                          isValid === false ? 'border-red-500 pr-10' : ''
                        }`}
                      />
                      {isValid === true && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <Check className="text-green-500" size={20} />
                        </div>
                      )}
                      {isValid === false && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <X className="text-red-500" size={20} />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Format: 10-digit number (e.g., 1234567890)
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      type="submit" 
                      className="btn-primary"
                    >
                      Continue
                    </button>
                  </div>
                </form>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
                  <Info size={20} className="text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-blue-800 font-medium">Need help?</p>
                    <p className="text-xs text-blue-600 mt-1">
                      If you're having trouble with your commercial registration, please contact our support team at 
                      <a href="mailto:support@riyadbank.com" className="text-blue-700 underline ml-1">
                        support@riyadbank.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block animate-slide-in">
            <div className="bg-card rounded-xl shadow-sm border border-border p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HelpCircle size={18} className="text-primary" />
                What is a Commercial Registration?
              </h3>
              
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  A Commercial Registration (CR) is a document issued by the Ministry of Commerce that 
                  allows businesses to operate legally in Saudi Arabia.
                </p>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="text-foreground font-medium mb-2">Where to find it?</h4>
                  <p>
                    Your CR number can be found on your Commercial Registration certificate issued by the 
                    Ministry of Commerce. It's typically a 10-digit number.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="text-foreground font-medium mb-2">Why do we need it?</h4>
                  <p>
                    We need your CR number to verify your business details and assess your eligibility 
                    for financing products offered by Riyad Bank.
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="text-foreground font-medium mb-2">Is my information secure?</h4>
                  <p>
                    Yes, all information provided is encrypted and securely processed according to the 
                    highest banking standards and Saudi Arabian Monetary Authority (SAMA) regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
