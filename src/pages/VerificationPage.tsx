
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CheckCircle2, Fingerprint, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

const VerificationPage = () => {
  const [activeTab, setActiveTab] = useState('nafath');
  const [verifying, setVerifying] = useState(false);
  const [nafathVerified, setNafathVerified] = useState(false);
  const [wathqVerified, setWathqVerified] = useState(false);
  const [countdown, setCountdown] = useState(45);
  const navigate = useNavigate();
  
  const registrationSteps = [
    { id: 1, title: 'Commercial Registration', description: 'Enter your registration number' },
    { id: 2, title: 'Verification', description: 'Verify account details' },
    { id: 3, title: 'Terms & Conditions', description: 'Review and accept' },
    { id: 4, title: 'Apply', description: 'Complete application' },
  ];
  
  // Countdown timer for Nafath verification
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (activeTab === 'nafath' && verifying && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    
    if (countdown === 0 && verifying && activeTab === 'nafath') {
      setVerifying(false);
      setNafathVerified(true);
      toast.success('Nafath verification successful');
    }
    
    return () => clearTimeout(timer);
  }, [countdown, verifying, activeTab]);
  
  const handleStartNafathVerification = () => {
    setVerifying(true);
    toast.info('Verification process started. Please approve the request in your Nafath app.');
  };
  
  const handleStartWathqVerification = () => {
    setVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setVerifying(false);
      setWathqVerified(true);
      toast.success('Wathq verification successful');
    }, 3000);
  };
  
  const handleContinue = () => {
    if (!nafathVerified || !wathqVerified) {
      toast.error('Please complete both verification steps to continue');
      return;
    }
    
    navigate('/eligibility');
  };
  
  const resetVerification = () => {
    setVerifying(false);
    setCountdown(45);
  };

  return (
    <MainLayout title="Account Verification" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={registrationSteps} currentStep={2} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Nafath Verification Panel */}
            <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden animate-fade-in">
              <div className="flex items-center">
                <button 
                  className={`flex-1 py-4 px-6 font-medium text-sm ${
                    activeTab === 'nafath' 
                      ? 'text-primary bg-primary/5 border-b-2 border-primary' 
                      : 'text-muted-foreground border-b border-border'
                  }`}
                  onClick={() => { resetVerification(); setActiveTab('nafath'); }}
                >
                  Nafath Verification
                </button>
                <button 
                  className={`flex-1 py-4 px-6 font-medium text-sm ${
                    activeTab === 'wathq' 
                      ? 'text-primary bg-primary/5 border-b-2 border-primary' 
                      : 'text-muted-foreground border-b border-border'
                  }`}
                  onClick={() => { resetVerification(); setActiveTab('wathq'); }}
                >
                  Wathq Verification
                </button>
              </div>
              
              <div className="p-8">
                {activeTab === 'nafath' && (
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      {nafathVerified ? (
                        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                          <CheckCircle2 size={40} className="text-green-500" />
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                            <Fingerprint size={40} className="text-primary" />
                          </div>
                          {verifying && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full w-24 h-24 border-4 border-primary border-t-transparent animate-spin"></div>
                              <div className="absolute text-xl font-bold text-primary">{countdown}</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">
                      {nafathVerified ? 'Verification Complete' : 'Your account needs to be verified through Nafath'}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      {nafathVerified 
                        ? 'Your identity has been successfully verified through Nafath.' 
                        : 'Verify your identity using the Nafath app linked to your Absher account.'}
                    </p>
                    
                    {!nafathVerified && (
                      <div className="space-y-4">
                        {verifying ? (
                          <div className="p-4 bg-blue-50 rounded-lg text-blue-700 text-sm">
                            Please approve the verification request in your Nafath app. 
                            This request will expire in <span className="font-bold">{countdown} seconds</span>.
                          </div>
                        ) : (
                          <button 
                            onClick={handleStartNafathVerification}
                            className="btn-primary mx-auto"
                            disabled={verifying}
                          >
                            {verifying ? 'Verifying...' : 'Start Verification'}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'wathq' && (
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      {wathqVerified ? (
                        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                          <CheckCircle2 size={40} className="text-green-500" />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <ShieldCheck size={40} className="text-primary" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">
                      {wathqVerified ? 'Verification Complete' : 'Verify your business through Wathq'}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      {wathqVerified 
                        ? 'Your business information has been successfully verified through Wathq.' 
                        : 'We need to verify your business details through the Ministry of Commerce.'}
                    </p>
                    
                    {!wathqVerified && (
                      <button 
                        onClick={handleStartWathqVerification}
                        className="btn-primary mx-auto"
                        disabled={verifying}
                      >
                        {verifying ? (
                          <span className="flex items-center gap-2">
                            <Loader2 size={18} className="animate-spin" />
                            Verifying...
                          </span>
                        ) : 'Verify Business'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Verification Status */}
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">Verification Status</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Fingerprint size={20} className="text-muted-foreground" />
                    <span className="font-medium">Nafath Verification</span>
                  </div>
                  <div>
                    {nafathVerified ? (
                      <span className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded-full font-medium">
                        Verified
                      </span>
                    ) : (
                      <span className="text-xs bg-amber-100 text-amber-700 py-1 px-2 rounded-full font-medium">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-muted-foreground" />
                    <span className="font-medium">Wathq Verification</span>
                  </div>
                  <div>
                    {wathqVerified ? (
                      <span className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded-full font-medium">
                        Verified
                      </span>
                    ) : (
                      <span className="text-xs bg-amber-100 text-amber-700 py-1 px-2 rounded-full font-medium">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  onClick={handleContinue}
                  className={`w-full py-3 rounded-lg font-medium text-center transition-all ${
                    nafathVerified && wathqVerified 
                      ? 'bg-brand-teal text-white hover:translate-y-[-2px] hover:shadow-md' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!nafathVerified || !wathqVerified}
                >
                  Continue to Next Step
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Wathq Information */}
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 animate-slide-in">
              <h3 className="text-lg font-semibold mb-4">Wathq Information</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Company Name</span>
                    <span className="text-sm font-medium">Techline Company</span>
                  </div>
                  <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                    <div className="h-full bg-brand-teal w-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">CR Number</span>
                    <span className="text-sm font-medium">1010234567</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Issue Date</span>
                    <span className="text-sm font-medium">12/01/2023</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Expiry Date</span>
                    <span className="text-sm font-medium">12/01/2028</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Legal Status</span>
                    <span className="text-sm font-medium">Limited Liability Company</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Business Type</span>
                    <span className="text-sm font-medium">Information Technology</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Location</span>
                    <span className="text-sm font-medium">Riyadh</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-md font-medium mb-3">Owner Information</h4>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Owner Name</span>
                    <span className="text-sm font-medium">Ahmed Al-Saud</span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">National ID</span>
                    <span className="text-sm font-medium">104*******1</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-md font-medium mb-3">E-Commerce Information</h4>
                
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle size={16} className="text-amber-500" />
                  <span className="text-muted-foreground">
                    E-Commerce license is not registered with this CR.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Verification Guide */}
            <div className="bg-primary/5 rounded-xl p-6 animate-slide-in">
              <h3 className="text-lg font-semibold mb-4 text-primary">Verification Guide</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Nafath Verification:</strong> Make sure you have the Nafath app installed on your phone and it's connected to your Absher account.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ministry of Commerce Verification:</strong> Your business information will be verified automatically against the Ministry of Commerce records.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Complete Both Steps:</strong> You must complete both verification steps to proceed with your financing application.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-primary/20">
                <p className="text-xs text-muted-foreground">
                  For assistance, contact our support team at <a href="tel:+966114013030" className="text-primary font-medium">+966 11 401 3030</a> during business hours (8 AM - 4 PM, Sunday - Thursday).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VerificationPage;
