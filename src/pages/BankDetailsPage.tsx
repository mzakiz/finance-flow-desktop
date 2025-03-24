
import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, CreditCard, Building, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BankDetailsPage = () => {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState('');
  const [accountType, setAccountType] = useState('existing');
  const [iban, setIban] = useState('');
  const [ibanValid, setIbanValid] = useState<boolean | null>(null);
  
  const applicationSteps = [
    { id: 1, title: 'Start Application', description: 'Review verified information' },
    { id: 2, title: 'Bank Details', description: 'Your account information' },
    { id: 3, title: 'Financing Terms', description: 'Select your preferences' },
    { id: 4, title: 'Review & Submit', description: 'Confirm your application' },
  ];

  const banks = [
    { id: 'riyadbank', name: 'Riyad Bank', logo: '🏦' },
    { id: 'alahli', name: 'Saudi National Bank', logo: '🏦' },
    { id: 'samba', name: 'Samba Financial Group', logo: '🏦' },
    { id: 'alrajhi', name: 'Al Rajhi Bank', logo: '🏦' },
    { id: 'alinma', name: 'Alinma Bank', logo: '🏦' },
  ];

  const validateIban = (value: string) => {
    // Simple validation - in real world this would be more complex
    if (value.length >= 22 && value.startsWith('SA')) {
      setIbanValid(true);
    } else if (value.length > 0) {
      setIbanValid(false);
    } else {
      setIbanValid(null);
    }
  };

  const handleIbanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setIban(value);
    validateIban(value);
  };

  const handleContinue = () => {
    navigate('/financing-terms');
  };

  return (
    <MainLayout title="Bank Details" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={applicationSteps} currentStep={2} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2 border-brand-teal/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark">Your Bank Details</CardTitle>
              <CardDescription>
                Please provide your bank account information for disbursement of funds.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <RadioGroup
                  value={accountType}
                  onValueChange={setAccountType}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <div className={`border rounded-lg p-4 flex-1 ${accountType === 'existing' ? 'border-brand-teal bg-brand-teal/5' : 'border-border'}`}>
                    <div className="flex items-start">
                      <RadioGroupItem value="existing" id="existing" className="mt-1" />
                      <div className="ml-3">
                        <Label htmlFor="existing" className="text-base font-medium">Existing Riyad Bank Customer</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use your existing Riyad Bank account for this application.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`border rounded-lg p-4 flex-1 ${accountType === 'other' ? 'border-brand-teal bg-brand-teal/5' : 'border-border'}`}>
                    <div className="flex items-start">
                      <RadioGroupItem value="other" id="other" className="mt-1" />
                      <div className="ml-3">
                        <Label htmlFor="other" className="text-base font-medium">Other Bank Account</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use an account from another bank for this application.
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {accountType === 'existing' ? (
                <div className="space-y-4 p-4 bg-background rounded-lg">
                  <div className="space-y-2">
                    <Label htmlFor="account-select">Select Account</Label>
                    <Select>
                      <SelectTrigger id="account-select">
                        <SelectValue placeholder="Select an account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account1">Business Account - SA44 2000 0001 2345 6789 1234</SelectItem>
                        <SelectItem value="account2">Current Account - SA55 3000 0001 5678 9012 3456</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 p-4 bg-background rounded-lg">
                  <div className="space-y-2">
                    <Label htmlFor="bank-select">Select Bank</Label>
                    <Select value={bankName} onValueChange={setBankName}>
                      <SelectTrigger id="bank-select">
                        <SelectValue placeholder="Select your bank" />
                      </SelectTrigger>
                      <SelectContent>
                        {banks.map(bank => (
                          <SelectItem key={bank.id} value={bank.id}>
                            <div className="flex items-center">
                              <span className="mr-2">{bank.logo}</span>
                              <span>{bank.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="iban">IBAN Number</Label>
                    <div className="relative">
                      <Input
                        id="iban"
                        placeholder="e.g. SA44 2000 0001 2345 6789 1234"
                        value={iban}
                        onChange={handleIbanChange}
                        className={`pr-10 ${ibanValid === true ? 'border-green-500' : ibanValid === false ? 'border-red-500' : ''}`}
                      />
                      {ibanValid === true && (
                        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={18} />
                      )}
                      {ibanValid === false && (
                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={18} />
                      )}
                    </div>
                    {ibanValid === false && (
                      <p className="text-sm text-red-500 mt-1">
                        Please enter a valid Saudi IBAN number (starts with SA, 24 characters).
                      </p>
                    )}
                  </div>
                </div>
              )}
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Note: The bank account provided will be used for the disbursement of your financing amount.
                  Please ensure the account belongs to your business.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-brand-teal/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard size={20} />
                  <span>Bank Account Verification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  Your bank account will be verified for:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand-teal mt-0.5 flex-shrink-0" size={16} />
                    <span>Account ownership matching your business name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand-teal mt-0.5 flex-shrink-0" size={16} />
                    <span>Active account status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-brand-teal mt-0.5 flex-shrink-0" size={16} />
                    <span>Valid IBAN format and institution code</span>
                  </li>
                </ul>
                
                <div className="bg-amber-50 p-3 rounded-md border border-amber-200 mt-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-amber-800">
                      Make sure your IBAN is correct. Incorrect information will delay your application processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building size={20} />
                  <span>Why We Need This</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Your bank details are required to:
                </p>
                <ul className="space-y-1 list-disc pl-4">
                  <li>Verify your business identity</li>
                  <li>Disburse approved financing amount</li>
                  <li>Process automatic repayments (optional)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Button 
              className="w-full py-6 text-base bg-brand-teal hover:bg-brand-teal/90"
              onClick={handleContinue}
              disabled={accountType === 'other' && (!bankName || !ibanValid)}
            >
              Continue
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => navigate('/application-start')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                Back
              </button>
              
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Save & Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BankDetailsPage;
