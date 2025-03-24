
import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Download, ArrowRight, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ApplicationConfirmationPage = () => {
  const navigate = useNavigate();
  const applicationId = 'FIN-2023-78945';
  const applicationDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-scale-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Application Submitted Successfully!</h1>
          <p className="text-muted-foreground">
            Your financing application has been received and is now under review.
            We'll notify you of any updates via email and SMS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <Card className="animate-fade-in border-brand-purple/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText size={18} className="text-brand-purple" />
                Application Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Application ID:</span>
                  <span className="font-medium">{applicationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date Submitted:</span>
                  <span className="font-medium">{applicationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Financing Type:</span>
                  <span className="font-medium">Business Financing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">SAR 500,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in border-brand-teal/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock size={18} className="text-brand-teal" />
                Processing Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Initial Review:</span>
                  <span className="font-medium">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Credit Assessment:</span>
                  <span className="font-medium">3-5 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Final Approval:</span>
                  <span className="font-medium">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Disbursement:</span>
                  <span className="font-medium">1 business day</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in border-brand-blue/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar size={18} className="text-brand-blue" />
                Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-blue font-medium text-xs">1</span>
                  </div>
                  <span>Application review by our financing team</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-blue font-medium text-xs">2</span>
                  </div>
                  <span>Credit assessment and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-blue font-medium text-xs">3</span>
                  </div>
                  <span>Financing agreement signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-blue font-medium text-xs">4</span>
                  </div>
                  <span>Funds disbursement to your account</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="animate-fade-in bg-gradient-to-br from-white to-brand-teal/5 border-brand-teal/20">
            <CardHeader>
              <CardTitle>Download Confirmation</CardTitle>
              <CardDescription>
                Save a copy of your application details for your records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Download className="mr-2" size={16} />
                Download Application Summary
              </Button>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in bg-gradient-to-br from-white to-amber-50 border-amber-200/50">
            <CardHeader>
              <CardTitle>Add to Calendar</CardTitle>
              <CardDescription>
                Set a reminder to check your application status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2" size={16} />
                Add to Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            className="py-6 px-8 bg-brand-teal hover:bg-brand-teal/90"
            onClick={() => navigate('/application-tracking')}
          >
            Track Application
            <ArrowRight className="ml-2" size={16} />
          </Button>
          
          <Button 
            variant="outline" 
            className="py-6 px-8"
            onClick={() => navigate('/dashboard')}
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationConfirmationPage;
