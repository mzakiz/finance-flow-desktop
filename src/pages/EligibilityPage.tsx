
import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, X, AlertTriangle } from 'lucide-react';

const EligibilityPage = () => {
  const navigate = useNavigate();
  
  const registrationSteps = [
    { id: 1, title: 'Commercial Registration', description: 'Enter your registration number' },
    { id: 2, title: 'Verification', description: 'Verify account details' },
    { id: 3, title: 'Terms & Conditions', description: 'Review and accept' },
    { id: 4, title: 'Apply', description: 'Complete application' },
  ];

  return (
    <MainLayout title="Eligibility Confirmation" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={registrationSteps} currentStep={4} />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-xl p-10 border border-brand-teal/20 mb-8 animate-scale-in">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={40} className="text-green-500" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Congratulations! You are eligible for financing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Based on your business details, you qualify for our business financing options. 
                Complete your application to receive a personalized financing offer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-brand-purple mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6M12 18V22M6 12H2M22 12H18M20 4L17 7M4 4L7 7M20 20L17 17M4 20L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Quick Disbursement</h3>
                <p className="text-sm text-muted-foreground">
                  Get funds disbursed to your account in as little as 24 hours after approval.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-brand-purple mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 3V7H19M9 7H13M9 11H15M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Minimal Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Streamlined application process with minimal paperwork required.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-brand-purple mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.071 4.92896L16.243 7.75696M4.929 4.92896L7.757 7.75696M19.071 19.071L16.243 16.243M4.929 19.071L7.757 16.243" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Flexible Repayment</h3>
                <p className="text-sm text-muted-foreground">
                  Choose repayment terms that suit your business cash flow.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button 
                onClick={() => navigate('/application-start')}
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">Eligibility Factors</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-500" />
                  </div>
                  <span className="text-sm">Active Commercial Registration</span>
                </div>
                
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-500" />
                  </div>
                  <span className="text-sm">Business age: 2+ years</span>
                </div>
                
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-500" />
                  </div>
                  <span className="text-sm">Good credit history with SIMAH</span>
                </div>
                
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-green-500" />
                  </div>
                  <span className="text-sm">Acceptable financial performance</span>
                </div>
                
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={14} className="text-amber-500" />
                  </div>
                  <span className="text-sm">Additional collateral may be required for larger amounts</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 animate-fade-in">
              <h3 className="text-lg font-semibold mb-4">Available Financing Products</h3>
              
              <div className="space-y-4">
                <div className="p-3 border border-border rounded-lg bg-white hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Business Working Capital</h4>
                    <span className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded-full">Recommended</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Short-term financing for operational expenses and inventory.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Up to SAR 2,000,000</span>
                    <span className="font-medium">12-36 months</span>
                  </div>
                </div>
                
                <div className="p-3 border border-border rounded-lg bg-white hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Business Expansion Loan</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 py-1 px-2 rounded-full">Popular</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Medium-term financing for business growth and expansion.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Up to SAR 5,000,000</span>
                    <span className="font-medium">36-60 months</span>
                  </div>
                </div>
                
                <div className="p-3 border border-border rounded-lg bg-white hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Equipment Financing</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Financing for purchase of business equipment and machinery.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Up to SAR 3,000,000</span>
                    <span className="font-medium">24-48 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-3 animate-fade-in">
            <AlertTriangle size={20} className="text-amber-500 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium">Important Notice</p>
              <p className="text-xs text-amber-700 mt-1">
                Final approval and financing terms are subject to complete application review and credit assessment. 
                The rates and limits shown here are indicative and may vary based on your specific business profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EligibilityPage;
