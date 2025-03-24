
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Steps } from '@/components/Steps';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, Calendar, Info, DollarSign, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const FinancingTermsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [purpose, setPurpose] = useState('');
  const [profitRate, setProfitRate] = useState(0.12); // 12%
  const [adminFee, setAdminFee] = useState(5000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  
  const applicationSteps = [
    { id: 1, title: 'Start Application', description: 'Review verified information' },
    { id: 2, title: 'Bank Details', description: 'Your account information' },
    { id: 3, title: 'Financing Terms', description: 'Select your preferences' },
    { id: 4, title: 'Review & Submit', description: 'Confirm your application' },
  ];

  const financingPurposes = [
    { value: 'working_capital', label: 'Working Capital' },
    { value: 'equipment', label: 'Equipment Purchase' },
    { value: 'expansion', label: 'Business Expansion' },
    { value: 'inventory', label: 'Inventory Financing' },
    { value: 'other', label: 'Other Purpose' },
  ];

  // Calculate financing details when amount or tenure changes
  useEffect(() => {
    // Simple flat rate calculation (In reality, this would be more complex)
    const totalProfit = amount * (profitRate * tenure / 12);
    const totalAmount = amount + totalProfit + adminFee;
    const monthly = totalAmount / tenure;
    
    setTotalProfit(totalProfit);
    setTotalPayment(totalAmount);
    setMonthlyInstallment(monthly);
  }, [amount, tenure, profitRate, adminFee]);

  const handleAmountChange = (value: number[]) => {
    setAmount(value[0]);
  };

  const handleAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''), 10);
    if (!isNaN(value) && value >= 100000 && value <= 5000000) {
      setAmount(value);
    }
  };

  const handleTenureChange = (value: number[]) => {
    setTenure(value[0]);
  };

  const handleTenureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 12 && value <= 60) {
      setTenure(value);
    }
  };

  const handleContinue = () => {
    if (!purpose) {
      toast({
        title: "Financing Purpose Required",
        description: "Please select the purpose of your financing before continuing.",
        variant: "destructive",
      });
      return;
    }
    navigate('/application-summary');
  };

  // Chart data for financing breakdown
  const chartData = [
    { name: "Principal", value: amount, color: "#00D4B0" },
    { name: "Profit", value: totalProfit, color: "#6246EA" },
    { name: "Admin Fee", value: adminFee, color: "#3B82F6" },
  ];

  return (
    <MainLayout title="Financing Terms" showBackButton>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-10">
          <Steps steps={applicationSteps} currentStep={3} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2 border-brand-teal/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark">Select Your Financing Terms</CardTitle>
              <CardDescription>
                Customize your financing amount and repayment period based on your business needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="amount" className="text-base">Financing Amount</Label>
                    <div className="w-1/3">
                      <Input
                        id="amount-input"
                        value={amount.toLocaleString()}
                        onChange={handleAmountInputChange}
                        className="text-right font-medium"
                      />
                    </div>
                  </div>
                  
                  <Slider
                    defaultValue={[500000]}
                    max={5000000}
                    min={100000}
                    step={50000}
                    value={[amount]}
                    onValueChange={handleAmountChange}
                    className="py-4"
                  />
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>SAR 100,000</span>
                    <span>SAR 5,000,000</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="tenure" className="text-base">Repayment Period (months)</Label>
                    <div className="w-1/4">
                      <Input
                        id="tenure-input"
                        value={tenure}
                        onChange={handleTenureInputChange}
                        className="text-right font-medium"
                      />
                    </div>
                  </div>
                  
                  <Slider
                    defaultValue={[24]}
                    max={60}
                    min={12}
                    step={6}
                    value={[tenure]}
                    onValueChange={handleTenureChange}
                    className="py-4"
                  />
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>12 months</span>
                    <span>60 months</span>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Label htmlFor="purpose" className="text-base">Financing Purpose</Label>
                  <Select value={purpose} onValueChange={setPurpose}>
                    <SelectTrigger id="purpose">
                      <SelectValue placeholder="Select purpose of financing" />
                    </SelectTrigger>
                    <SelectContent>
                      {financingPurposes.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-5 rounded-lg border border-border">
                  <h3 className="text-base font-medium mb-4 flex items-center gap-2">
                    <PieChart size={18} className="text-brand-teal" />
                    Financing Breakdown
                  </h3>
                  
                  <div className="h-[200px] w-full">
                    <ChartContainer
                      config={{
                        principal: { label: "Principal", color: "#00D4B0" },
                        profit: { label: "Profit", color: "#6246EA" },
                        adminfee: { label: "Admin Fee", color: "#3B82F6" },
                      }}
                    >
                      <PieChart>
                        <Pie
                          data={chartData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={40}
                          paddingAngle={2}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                      <ChartLegend content={<ChartLegendContent />} />
                    </ChartContainer>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg border border-border">
                  <h3 className="text-base font-medium mb-4 flex items-center gap-2">
                    <Calculator size={18} className="text-brand-teal" />
                    Payment Summary
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 border-b border-border">
                      <span className="text-muted-foreground">Monthly Installment:</span>
                      <span className="font-semibold text-lg text-brand-teal">
                        SAR {Math.round(monthlyInstallment).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Profit Rate:</span>
                      <span className="font-medium">{(profitRate * 100).toFixed(1)}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Profit Amount:</span>
                      <span className="font-medium">SAR {Math.round(totalProfit).toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Administrative Fee:</span>
                      <span className="font-medium">SAR {adminFee.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between pt-3 border-t border-border">
                      <span className="text-muted-foreground">Total Repayment Amount:</span>
                      <span className="font-semibold">SAR {Math.round(totalPayment).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-brand-purple/5 rounded-lg border border-brand-purple/20">
                <div className="flex items-start gap-3">
                  <Info className="text-brand-purple mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Important Information</h3>
                    <p className="text-sm text-muted-foreground">
                      The rates shown here are indicative and may vary based on your business profile 
                      and credit assessment. Final terms will be confirmed after application review.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-brand-teal/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign size={20} />
                  <span>Financing Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Financing Type:</span>
                    <span className="font-medium">Business Financing</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Maximum Amount:</span>
                    <span className="font-medium">SAR 5,000,000</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minimum Amount:</span>
                    <span className="font-medium">SAR 100,000</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profit Rate:</span>
                    <span className="font-medium">Starting from 8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-brand-teal/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>Repayment Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  Your repayment schedule will include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                    <span>Equal monthly installments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                    <span>First payment due 30 days after disbursement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                    <span>Automatic deduction from your account (optional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-1.5 flex-shrink-0" />
                    <span>No early repayment penalties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Button 
              className="w-full py-6 text-base bg-brand-teal hover:bg-brand-teal/90"
              onClick={handleContinue}
            >
              Continue
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => navigate('/bank-details')}
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

export default FinancingTermsPage;
