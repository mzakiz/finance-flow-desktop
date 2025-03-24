
import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const TermsPage = () => {
  const [expanded, setExpanded] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const navigate = useNavigate();
  
  const registrationSteps = [
    { id: 1, title: 'Commercial Registration', description: 'Enter your registration number' },
    { id: 2, title: 'Verification', description: 'Verify account details' },
    { id: 3, title: 'Terms & Conditions', description: 'Review and accept' },
    { id: 4, title: 'Apply', description: 'Complete application' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms || !acceptedPrivacy) {
      toast.error('Please accept all terms to continue');
      return;
    }
    
    toast.success('Terms accepted');
    navigate('/verification');
  };
  
  return (
    <MainLayout title="Terms & Conditions" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={registrationSteps} currentStep={3} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-sm border border-border p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Accept Terms & Conditions</h2>
            <p className="text-muted-foreground mb-8">
              Review the terms and conditions below. You must accept these to continue.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center justify-between p-4 bg-muted rounded-t-lg cursor-pointer" onClick={() => setExpanded(!expanded)}>
                <h3 className="font-medium">Terms and Conditions for Financing Application</h3>
                {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              
              {expanded && (
                <div className="p-6 border border-border rounded-b-lg bg-white max-h-60 overflow-y-auto text-sm text-muted-foreground">
                  <div className="space-y-4">
                    <p>Last updated: January 1, 2023</p>
                    
                    <h4 className="font-medium text-foreground">1. Introduction</h4>
                    <p>These Terms and Conditions govern your application for financing through Riyad Bank's digital platforms. By accessing or using our services, you agree to be bound by these Terms.</p>
                    
                    <h4 className="font-medium text-foreground">2. Eligibility</h4>
                    <p>To be eligible for financing, applicants must:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Be a registered business entity in Saudi Arabia with a valid Commercial Registration</li>
                      <li>Have been operational for at least one year</li>
                      <li>Have a satisfactory credit history with SIMAH</li>
                      <li>Meet all regulatory requirements stipulated by SAMA</li>
                      <li>Provide all required documentation and information as requested</li>
                    </ul>
                    
                    <h4 className="font-medium text-foreground">3. Application Process</h4>
                    <p>The application process involves:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Submitting your Commercial Registration for verification</li>
                      <li>Completing identity verification through approved government channels</li>
                      <li>Providing required business documentation</li>
                      <li>Undergoing credit assessment</li>
                      <li>Receiving and accepting financing offers if approved</li>
                    </ul>
                    
                    <h4 className="font-medium text-foreground">4. Documentation</h4>
                    <p>Riyad Bank reserves the right to request additional documentation at any stage of the application process. Failure to provide requested documents may result in delays or rejection of the application.</p>
                    
                    <h4 className="font-medium text-foreground">5. Financing Approval</h4>
                    <p>All financing approvals are subject to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Satisfactory credit assessment</li>
                      <li>Compliance with all regulatory requirements</li>
                      <li>Final approval from Riyad Bank's credit committee</li>
                    </ul>
                    <p>Riyad Bank reserves the right to approve or reject any application at its sole discretion.</p>
                    
                    <h4 className="font-medium text-foreground">6. Disbursement</h4>
                    <p>Upon approval, funds will be disbursed to the designated business account. The timing of disbursement will be communicated to the applicant.</p>
                    
                    <h4 className="font-medium text-foreground">7. Repayment</h4>
                    <p>Repayment terms will be outlined in the financing offer. Failure to make payments according to the agreed schedule may result in additional fees and adverse credit reporting.</p>
                    
                    <h4 className="font-medium text-foreground">8. Fees and Charges</h4>
                    <p>All applicable fees and charges will be clearly disclosed in the financing offer. By accepting the offer, you agree to pay all fees as stipulated.</p>
                    
                    <h4 className="font-medium text-foreground">9. Amendments</h4>
                    <p>Riyad Bank reserves the right to amend these Terms and Conditions at any time. Any changes will be communicated through our official channels.</p>
                    
                    <h4 className="font-medium text-foreground">10. Governing Law</h4>
                    <p>These Terms and Conditions are governed by the laws of the Kingdom of Saudi Arabia and SAMA regulations.</p>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={() => setAcceptedTerms(!acceptedTerms)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm">
                    I have read and agree to the <span className="text-primary font-medium">Terms and Conditions</span> for using Riyad Bank's financing services.
                  </label>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <input
                      id="privacy"
                      type="checkbox"
                      checked={acceptedPrivacy}
                      onChange={() => setAcceptedPrivacy(!acceptedPrivacy)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <label htmlFor="privacy" className="text-sm">
                    I consent to Riyad Bank collecting, storing, and processing my business information in accordance with the <span className="text-primary font-medium">Privacy Policy</span>.
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end mt-8">
                <button 
                  type="submit" 
                  className="btn-primary flex items-center gap-2"
                  disabled={!acceptedTerms || !acceptedPrivacy}
                >
                  <span>Continue</span>
                  {acceptedTerms && acceptedPrivacy && <CheckCircle2 size={18} />}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              If you have any questions about these terms, please contact our support team at{' '}
              <a href="tel:+966114013030" className="text-primary">+966 11 401 3030</a>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsPage;
