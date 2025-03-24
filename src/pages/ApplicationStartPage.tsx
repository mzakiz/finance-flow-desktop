
import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ApplicationStartPage = () => {
  const navigate = useNavigate();
  
  const applicationSteps = [
    { id: 1, title: 'Start Application', description: 'Review verified information' },
    { id: 2, title: 'Bank Details', description: 'Your account information' },
    { id: 3, title: 'Financing Terms', description: 'Select your preferences' },
    { id: 4, title: 'Review & Submit', description: 'Confirm your application' },
  ];

  const handleStart = () => {
    navigate('/bank-details');
  };

  return (
    <MainLayout title="Start Your Application" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={applicationSteps} currentStep={1} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2 border-brand-teal/20 bg-gradient-to-br from-white to-brand-teal/5 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark">Ready to start your financing application</CardTitle>
              <CardDescription>
                Based on your eligibility, you can now proceed with your financing application. 
                The following information has been verified through Wathq.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Building2 className="text-brand-teal mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Business Information</h3>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Company Name:</span>
                          <span className="font-medium">Al Madar Trading Co.</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">CR Number:</span>
                          <span className="font-medium">1010123456</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Established:</span>
                          <span className="font-medium">2015</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <FileText className="text-brand-teal mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Legal Information</h3>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entity Type:</span>
                          <span className="font-medium">Limited Liability</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">VAT Number:</span>
                          <span className="font-medium">300012345600003</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">License:</span>
                          <span className="font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-brand-teal/10 rounded-lg border border-brand-teal/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-teal mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Eligibility Status</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your business has been verified and is eligible for the following financing options:
                    </p>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Business Working Capital - Up to SAR 2,000,000</li>
                      <li>Business Expansion Loan - Up to SAR 5,000,000</li>
                      <li>Equipment Financing - Up to SAR 3,000,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-brand-teal/20 animate-fade-in">
              <CardHeader>
                <CardTitle>Application Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Application Process</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Your application will be processed in 4 easy steps:</p>
                    <ol className="mt-2 space-y-2 list-decimal pl-4">
                      <li>Verify your information</li>
                      <li>Provide your bank details</li>
                      <li>Select financing terms</li>
                      <li>Review and submit</li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Time to Complete</h3>
                  <p className="text-sm text-muted-foreground">
                    This application typically takes about 10-15 minutes to complete.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Required Information</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Bank account details</li>
                    <li>Preferred financing amount</li>
                    <li>Financing duration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              className="w-full py-6 text-base bg-brand-teal hover:bg-brand-teal/90"
              onClick={handleStart}
            >
              Start Application
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <div className="text-center">
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationStartPage;
