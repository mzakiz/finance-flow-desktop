
import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import { 
  ChevronRight, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  CreditCard,
  DollarSign,
  Calendar,
  BarChart4,
  ArrowRight,
  ChevronDown,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Ahmed. Here's an overview of your financing.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          <button
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'overview' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'applications' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'repayments' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('repayments')}
          >
            Repayments
          </button>
        </div>
        
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            {/* Key figures */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Active Financing</p>
                    <h3 className="text-2xl font-bold">SAR 750,000</h3>
                    <p className="text-xs text-muted-foreground mt-1">Across 2 active loans</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CreditCard className="text-blue-600" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Next Payment</p>
                    <h3 className="text-2xl font-bold">SAR 45,750</h3>
                    <p className="text-xs text-muted-foreground mt-1">Due on 15 Nov, 2023</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Calendar className="text-amber-600" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Available Credit</p>
                    <h3 className="text-2xl font-bold">SAR 1,250,000</h3>
                    <p className="text-xs text-muted-foreground mt-1">Pre-approved limit</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <DollarSign className="text-green-600" size={20} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active Financing */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Active Financing</h2>
                <Link 
                  to="/applications"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Loan ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Disbursed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Term</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">FIN-2023-89124</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">Working Capital</td>
                        <td className="px-6 py-4 text-sm">SAR 500,000</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">15 Aug, 2023</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">36 months</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle size={12} /> Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-right">
                          <button className="text-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">FIN-2023-76543</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">Equipment Financing</td>
                        <td className="px-6 py-4 text-sm">SAR 250,000</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">10 Oct, 2023</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">24 months</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle size={12} /> Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-right">
                          <button className="text-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Payment Schedule */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Upcoming Payments</h2>
                <Link 
                  to="/repayments"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">FIN-2023-89124</h3>
                      <p className="text-sm text-muted-foreground">Working Capital</p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Due in 10 days
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Payment Amount</p>
                      <p className="font-semibold">SAR 32,500</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Due Date</p>
                      <p className="font-semibold">15 Nov, 2023</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between items-center border-t border-border">
                    <p className="text-xs text-muted-foreground">10 of 36 payments</p>
                    <button className="text-sm text-primary hover:underline">Pay now</button>
                  </div>
                </div>
                
                <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">FIN-2023-76543</h3>
                      <p className="text-sm text-muted-foreground">Equipment Financing</p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Due in 15 days
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Payment Amount</p>
                      <p className="font-semibold">SAR 13,250</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Due Date</p>
                      <p className="font-semibold">20 Nov, 2023</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between items-center border-t border-border">
                    <p className="text-xs text-muted-foreground">2 of 24 payments</p>
                    <button className="text-sm text-primary hover:underline">Pay now</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/register" className="bg-primary/5 hover:bg-primary/10 text-primary rounded-xl p-6 text-center transition-colors">
                  <FileText size={24} className="mx-auto mb-2" />
                  <p className="font-medium">Apply for Financing</p>
                </Link>
                
                <button className="bg-muted hover:bg-muted/80 rounded-xl p-6 text-center transition-colors">
                  <Download size={24} className="mx-auto mb-2" />
                  <p className="font-medium">Download Statement</p>
                </button>
                
                <button className="bg-muted hover:bg-muted/80 rounded-xl p-6 text-center transition-colors">
                  <BarChart4 size={24} className="mx-auto mb-2" />
                  <p className="font-medium">Financial Reports</p>
                </button>
                
                <button className="bg-muted hover:bg-muted/80 rounded-xl p-6 text-center transition-colors">
                  <Calendar size={24} className="mx-auto mb-2" />
                  <p className="font-medium">Schedule Payment</p>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'applications' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <p className="font-medium text-center">Approved</p>
                <p className="text-3xl font-bold text-center mt-2">2</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                  <Clock className="text-amber-600" size={24} />
                </div>
                <p className="font-medium text-center">Pending</p>
                <p className="text-3xl font-bold text-center mt-2">1</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <p className="font-medium text-center">Rejected</p>
                <p className="text-3xl font-bold text-center mt-2">0</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <p className="font-medium text-center">Total Applications</p>
                <p className="text-3xl font-bold text-center mt-2">3</p>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold">Financing Applications</h3>
                
                <div className="flex items-center gap-2">
                  <button className="text-sm flex items-center gap-1 bg-muted px-3 py-1.5 rounded-md">
                    Filter <ChevronDown size={16} />
                  </button>
                  <Link to="/register" className="btn-primary text-sm py-1.5">
                    New Application
                  </Link>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Application ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">APP-2023-89124</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Working Capital</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">15 Aug, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 500,000</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle size={12} /> Approved
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right">
                        <button className="text-primary hover:underline">View Details</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">APP-2023-76543</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Equipment Financing</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">10 Oct, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 250,000</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle size={12} /> Approved
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right">
                        <button className="text-primary hover:underline">View Details</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">APP-2023-98765</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Business Expansion</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">05 Nov, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 1,000,000</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          <Clock size={12} /> Under Review
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right">
                        <button className="text-primary hover:underline">View Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-brand-purple/5 border border-brand-purple/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Need additional financing?</h3>
                  <p className="text-muted-foreground">You have a pre-approved limit of SAR 1,250,000 available for immediate financing.</p>
                </div>
                <Link to="/register" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                  Apply Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'repayments' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Total Repaid</p>
                    <h3 className="text-2xl font-bold">SAR 120,500</h3>
                    <p className="text-xs text-green-600 mt-1">15% of total financed amount</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart4 className="text-blue-600" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Next Payment</p>
                    <h3 className="text-2xl font-bold">SAR 45,750</h3>
                    <p className="text-xs text-amber-600 mt-1">Due on 15 Nov, 2023</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Calendar className="text-amber-600" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Outstanding Amount</p>
                    <h3 className="text-2xl font-bold">SAR 629,500</h3>
                    <p className="text-xs text-muted-foreground mt-1">Principal + profit</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <DollarSign className="text-red-600" size={20} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold">Repayment Schedule</h3>
                  <p className="text-sm text-muted-foreground">All upcoming payments for your active financing</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="text-sm flex items-center gap-1 bg-muted px-3 py-1.5 rounded-md">
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button className="btn-primary text-sm py-1.5">
                    Make a Payment
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Payment No.</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Loan ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Due Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Principal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Profit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Total</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm">10/36</td>
                      <td className="px-6 py-4 text-sm font-medium">FIN-2023-89124</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">15 Nov, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 25,000</td>
                      <td className="px-6 py-4 text-sm">SAR 7,500</td>
                      <td className="px-6 py-4 text-sm font-medium">SAR 32,500</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Upcoming
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm">2/24</td>
                      <td className="px-6 py-4 text-sm font-medium">FIN-2023-76543</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">20 Nov, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 10,000</td>
                      <td className="px-6 py-4 text-sm">SAR 3,250</td>
                      <td className="px-6 py-4 text-sm font-medium">SAR 13,250</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Upcoming
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm">9/36</td>
                      <td className="px-6 py-4 text-sm font-medium">FIN-2023-89124</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">15 Oct, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 25,000</td>
                      <td className="px-6 py-4 text-sm">SAR 7,500</td>
                      <td className="px-6 py-4 text-sm font-medium">SAR 32,500</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle size={12} /> Paid
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm">1/24</td>
                      <td className="px-6 py-4 text-sm font-medium">FIN-2023-76543</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">20 Oct, 2023</td>
                      <td className="px-6 py-4 text-sm">SAR 10,000</td>
                      <td className="px-6 py-4 text-sm">SAR 3,250</td>
                      <td className="px-6 py-4 text-sm font-medium">SAR 13,250</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle size={12} /> Paid
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:w-1/2">
                <h3 className="font-semibold mb-4">Payment Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <CreditCard size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Riyad Bank - Business Account</p>
                        <p className="text-xs text-muted-foreground">Auto-debit enabled</p>
                      </div>
                    </div>
                    <div className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded-full">
                      Default
                    </div>
                  </div>
                  
                  <button className="text-primary text-sm hover:underline flex items-center gap-1">
                    <span>Add payment method</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 md:w-1/2">
                <h3 className="font-semibold mb-4">Payment History</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <p className="text-sm">October Payment - FIN-2023-89124</p>
                    </div>
                    <div className="text-sm font-medium">SAR 32,500</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <p className="text-sm">October Payment - FIN-2023-76543</p>
                    </div>
                    <div className="text-sm font-medium">SAR 13,250</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <p className="text-sm">September Payment - FIN-2023-89124</p>
                    </div>
                    <div className="text-sm font-medium">SAR 32,500</div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-border">
                    <button className="text-primary text-sm hover:underline flex items-center gap-1">
                      <span>View full payment history</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Dashboard;
