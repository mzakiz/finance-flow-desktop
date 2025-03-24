
import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, FileText, Upload, AlertCircle, ArrowRight, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ApplicationTrackingPage = () => {
  const navigate = useNavigate();
  const applicationId = 'FIN-2023-78945';
  
  // Example application data
  const application = {
    id: applicationId,
    status: 'in_review',
    amount: 500000,
    term: 24,
    submitDate: '2023-06-15',
    currentStage: 1,
    expectedCompletion: '2023-06-25',
  };
  
  // Application stages
  const stages = [
    { 
      id: 1, 
      name: 'Initial Review', 
      status: 'in_progress', 
      date: '2023-06-15',
      description: 'Application is being reviewed by our team for completeness and eligibility.',
      estimatedCompletion: '2023-06-16'
    },
    { 
      id: 2, 
      name: 'Credit Assessment', 
      status: 'pending', 
      date: '',
      description: 'Detailed credit analysis and business evaluation.',
      estimatedCompletion: '2023-06-21'
    },
    { 
      id: 3, 
      name: 'Final Approval', 
      status: 'pending', 
      date: '',
      description: 'Final decision on your financing application.',
      estimatedCompletion: '2023-06-23'
    },
    { 
      id: 4, 
      name: 'Disbursement', 
      status: 'pending', 
      date: '',
      description: 'Funds transfer to your specified bank account.',
      estimatedCompletion: '2023-06-25'
    },
  ];
  
  // Helper function to get stage status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-gray-300';
      case 'on_hold':
        return 'bg-amber-500';
      default:
        return 'bg-gray-300';
    }
  };
  
  return (
    <MainLayout title="Application Tracking" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Application #{applicationId}</h2>
                <p className="text-muted-foreground">
                  Submitted on {new Date(application.submitDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                In Review
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock size={20} className="text-brand-blue" />
                  Application Timeline
                </CardTitle>
                <CardDescription>
                  Track the progress of your application through each stage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative pb-12">
                  {/* Vertical line connecting stages */}
                  <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200"></div>
                  
                  {/* Application stages */}
                  {stages.map((stage, index) => (
                    <div key={stage.id} className="relative mb-8 last:mb-0">
                      <div className="flex items-start">
                        {/* Stage indicator */}
                        <div className={`w-12 h-12 rounded-full ${getStatusColor(stage.status)} flex items-center justify-center text-white z-10 flex-shrink-0`}>
                          {stage.status === 'completed' ? (
                            <CheckCircle2 size={20} />
                          ) : (
                            <span className="font-medium">{stage.id}</span>
                          )}
                        </div>
                        
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{stage.name}</h3>
                              <p className="text-muted-foreground text-sm">{stage.description}</p>
                            </div>
                            
                            <div className="text-right">
                              {stage.status === 'completed' ? (
                                <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                                  <CheckCircle2 size={14} />
                                  Completed
                                </div>
                              ) : stage.status === 'in_progress' ? (
                                <div className="text-sm text-blue-600 font-medium">In Progress</div>
                              ) : (
                                <div className="text-sm text-muted-foreground">Pending</div>
                              )}
                              
                              <div className="text-xs text-muted-foreground mt-1">
                                {stage.status === 'completed' ? (
                                  `Completed on ${stage.date}`
                                ) : (
                                  `Est. completion: ${stage.estimatedCompletion}`
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {stage.status === 'in_progress' && stage.id === 1 && (
                            <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
                              <div className="flex items-start gap-2">
                                <AlertCircle size={18} className="text-blue-500 mt-0.5" />
                                <div>
                                  <p className="text-sm text-blue-800 font-medium">Action Required</p>
                                  <p className="text-xs text-blue-700 mt-1">
                                    Additional business financial statements requested for the past 3 years.
                                    Please upload the documents to proceed with your application.
                                  </p>
                                  
                                  <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                                    <Upload size={14} className="mr-1" />
                                    Upload Documents
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar size={20} className="text-brand-purple" />
                  Key Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-sm text-muted-foreground">Application Submitted</h3>
                    <p className="font-medium">June 15, 2023</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-sm text-muted-foreground">Expected Approval Date</h3>
                    <p className="font-medium">June 23, 2023</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-sm text-muted-foreground">Expected Disbursement</h3>
                    <p className="font-medium">June 25, 2023</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-sm text-muted-foreground">First Repayment Due</h3>
                    <p className="font-medium">July 25, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-brand-teal/20 bg-gradient-to-br from-white to-brand-teal/5 sticky top-24 animate-fade-in">
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application ID:</span>
                    <span className="font-medium">{application.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Financing Type:</span>
                    <span className="font-medium">Business Financing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium">SAR {application.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term:</span>
                    <span className="font-medium">{application.term} months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Purpose:</span>
                    <span className="font-medium">Working Capital</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">Overall Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-brand-teal h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Submitted</span>
                    <span>In Review</span>
                    <span>Approved</span>
                    <span>Completed</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {}}
                >
                  <Download className="mr-2" size={16} />
                  Download Summary
                </Button>
                
                <Button 
                  className="w-full bg-brand-teal hover:bg-brand-teal/90"
                  onClick={() => navigate('/dashboard')}
                >
                  Return to Dashboard
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="animate-fade-in bg-blue-50 border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg text-blue-800">
                  <FileText size={18} className="text-blue-500" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-blue-800">
                <p className="mb-3">
                  If you have any questions about your application, please contact our customer support team.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Phone:</span>
                    <span>800 124 1234</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Email:</span>
                    <span>business.support@riyadbank.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Hours:</span>
                    <span>Sunday - Thursday, 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationTrackingPage;
