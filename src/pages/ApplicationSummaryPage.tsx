
import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Building, CreditCard, Calculator, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ApplicationSummaryPage = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  
  const applicationSteps = [
    { id: 1, title: 'Start Application', description: 'Review verified information' },
    { id: 2, title: 'Bank Details', description: 'Your account information' },
    { id: 3, title: 'Financing Terms', description: 'Select your preferences' },
    { id: 4, title: 'Review & Submit', description: 'Confirm your application' },
  ];

  const handleSubmit = () => {
    if (termsAccepted) {
      navigate('/application-confirmation');
    }
  };
  
  return (
    <MainLayout title="Review & Submit" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={applicationSteps} currentStep={4} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          <div className="lg:col-span-5 space-y-6 animate-fade-in">
            <Card className="border-brand-teal/20">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-dark">Application Summary</CardTitle>
                <CardDescription>
                  Please review all details before submitting your application.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Accordion type="multiple" defaultValue={['business', 'bank', 'financing']} className="space-y-4">
              <AccordionItem value="business" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-background hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Building className="text-brand-teal" size={20} />
                    <span className="font-medium">Business Information</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm text-muted-foreground">Company Name</h4>
                        <p className="font-medium">Al Madar Trading Co.</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">CR Number</h4>
                        <p className="font-medium">1010123456</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Establishment Date</h4>
                        <p className="font-medium">January 15, 2015</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Legal Entity</h4>
                        <p className="font-medium">Limited Liability Company</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">VAT Number</h4>
                        <p className="font-medium">300012345600003</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Business Activity</h4>
                        <p className="font-medium">Trading</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="bank" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-background hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-brand-teal" size={20} />
                    <span className="font-medium">Bank Details</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm text-muted-foreground">Bank Name</h4>
                        <p className="font-medium">Riyad Bank</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Account Type</h4>
                        <p className="font-medium">Business Account</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-sm text-muted-foreground">IBAN</h4>
                        <p className="font-medium">SA44 2000 0001 2345 6789 1234</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                      <p className="text-sm text-blue-800">
                        The disbursement of your financing will be made to this account.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="financing" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-background hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Calculator className="text-brand-teal" size={20} />
                    <span className="font-medium">Financing Terms</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm text-muted-foreground">Financing Amount</h4>
                        <p className="font-medium">SAR 500,000</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Repayment Period</h4>
                        <p className="font-medium">24 months</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Financing Purpose</h4>
                        <p className="font-medium">Working Capital</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Profit Rate</h4>
                        <p className="font-medium">12.0% per annum</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Administrative Fee</h4>
                        <p className="font-medium">SAR 5,000</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-muted-foreground">Monthly Installment</h4>
                        <p className="font-medium text-brand-teal">SAR 24,333</p>
                      </div>
                    </div>
                    
                    <div className="p-3 border border-brand-teal/20 rounded-md bg-brand-teal/5">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Repayment Amount:</span>
                        <span className="font-medium">SAR 584,000</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Card className="border-brand-purple/20 bg-brand-purple/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} className="text-brand-purple" />
                  <span>Terms & Conditions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="max-h-60 overflow-y-auto p-4 bg-white rounded-md border text-sm">
                  <h3 className="font-medium mb-2">Financing Agreement</h3>
                  <p className="mb-3">This Financing Agreement (the "Agreement") is entered into between Riyad Bank ("Bank") and the business entity applying for financing ("Customer").</p>
                  
                  <h4 className="font-medium mb-1">1. Financing Terms</h4>
                  <p className="mb-3">The Bank agrees to provide financing to the Customer according to the terms specified in the application, subject to final approval. The profit rate, administrative fees, and repayment schedule specified in the application summary will apply to this financing.</p>
                  
                  <h4 className="font-medium mb-1">2. Disbursement</h4>
                  <p className="mb-3">Upon approval, the financing amount will be disbursed to the bank account provided by the Customer. The disbursement date will be considered the commencement date of the financing term.</p>
                  
                  <h4 className="font-medium mb-1">3. Repayment</h4>
                  <p className="mb-3">The Customer agrees to repay the financing amount plus profit according to the repayment schedule. Each installment will be due on the same day of each month following the disbursement date.</p>
                  
                  <h4 className="font-medium mb-1">4. Early Settlement</h4>
                  <p className="mb-3">The Customer may settle the financing amount partially or fully before the end of the financing term without incurring penalties, subject to the Bank's early settlement policies.</p>
                  
                  <h4 className="font-medium mb-1">5. Default</h4>
                  <p>If the Customer fails to pay any installment on the due date, the Bank reserves the right to take appropriate action according to its policies and applicable regulations.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                  />
                  <div>
                    <Label htmlFor="terms" className="text-base font-medium cursor-pointer">
                      I accept the Terms & Conditions
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      By checking this box, I confirm that I have read, understood, and agree to be 
                      bound by the terms and conditions of this financing agreement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <Card className="border-brand-teal/20 bg-gradient-to-br from-white to-brand-teal/5 sticky top-24 animate-fade-in">
              <CardHeader>
                <CardTitle>Total Financing</CardTitle>
                <CardDescription>
                  Summary of your financing application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Financing Amount:</span>
                    <span className="font-medium">SAR 500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Profit:</span>
                    <span className="font-medium">SAR 79,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Administrative Fee:</span>
                    <span className="font-medium">SAR 5,000</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-muted-foreground">Total Repayment:</span>
                    <span className="font-semibold">SAR 584,000</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Monthly Installment:</span>
                    <span className="font-semibold text-xl text-brand-teal">SAR 24,333</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    First payment due 30 days after disbursement
                  </p>
                </div>
                
                <div className="space-y-2 pt-3">
                  <Button 
                    className="w-full py-6 text-base bg-brand-teal hover:bg-brand-teal/90"
                    onClick={handleSubmit}
                    disabled={!termsAccepted}
                  >
                    Submit Application
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/financing-terms')}
                  >
                    Back to Financing Terms
                  </Button>
                </div>
                
                <div className="pt-3">
                  <p className="text-xs text-muted-foreground">
                    By submitting this application, you confirm that all information provided is true and accurate.
                    Your application will be processed within 24-48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationSummaryPage;
