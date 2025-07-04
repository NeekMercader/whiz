import React, { useState } from 'react';
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ROICalculatorPage = () => {
  const [inputs, setInputs] = useState({
    currentProcess: '',
    timeSpentHours: 0,
    timesPerWeek: 0,
    hourlyRate: 0,
    appCost: 1997,
    efficiencyGain: 80
  });

  const [results, setResults] = useState({
    weeklyTimeSaved: 0,
    monthlyTimeSaved: 0,
    yearlyTimeSaved: 0,
    weeklyCostSaved: 0,
    monthlyCostSaved: 0,
    yearlyCostSaved: 0,
    paybackPeriod: 0,
    yearOneROI: 0
  });

  const calculateROI = () => {
    const weeklyTimeSaved = (inputs.timeSpentHours * inputs.timesPerWeek * inputs.efficiencyGain) / 100;
    const monthlyTimeSaved = weeklyTimeSaved * 4.33;
    const yearlyTimeSaved = weeklyTimeSaved * 52;
    
    const weeklyCostSaved = weeklyTimeSaved * inputs.hourlyRate;
    const monthlyCostSaved = weeklyCostSaved * 4.33;
    const yearlyCostSaved = weeklyCostSaved * 52;
    
    const paybackPeriod = inputs.appCost / monthlyCostSaved;
    const yearOneROI = ((yearlyCostSaved - inputs.appCost) / inputs.appCost) * 100;

    setResults({
      weeklyTimeSaved,
      monthlyTimeSaved,
      yearlyTimeSaved,
      weeklyCostSaved,
      monthlyCostSaved,
      yearlyCostSaved,
      paybackPeriod,
      yearOneROI
    });
  };

  const handleInputChange = (field: string, value: number | string) => {
    const newInputs = { ...inputs, [field]: value };
    setInputs(newInputs);
    
    // Auto-calculate if all required fields are filled
    if (newInputs.timeSpentHours > 0 && newInputs.timesPerWeek > 0 && newInputs.hourlyRate > 0) {
      const weeklyTimeSaved = (newInputs.timeSpentHours * newInputs.timesPerWeek * newInputs.efficiencyGain) / 100;
      const monthlyTimeSaved = weeklyTimeSaved * 4.33;
      const yearlyTimeSaved = weeklyTimeSaved * 52;
      
      const weeklyCostSaved = weeklyTimeSaved * newInputs.hourlyRate;
      const monthlyCostSaved = weeklyCostSaved * 4.33;
      const yearlyCostSaved = weeklyCostSaved * 52;
      
      const paybackPeriod = newInputs.appCost / monthlyCostSaved;
      const yearOneROI = ((yearlyCostSaved - newInputs.appCost) / newInputs.appCost) * 100;

      setResults({
        weeklyTimeSaved,
        monthlyTimeSaved,
        yearlyTimeSaved,
        weeklyCostSaved,
        monthlyCostSaved,
        yearlyCostSaved,
        paybackPeriod,
        yearOneROI
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="ROI Calculator - Calculate Your App Development Return on Investment | Whiz"
        description="Calculate the exact ROI for automating your business processes with a custom app. See potential time and cost savings with our free calculator."
        keywords="ROI calculator, app development ROI, business automation savings, custom app calculator, time savings calculator"
        canonicalUrl="https://whiz.so/roi-calculator"
      />
      <Header />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Link 
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ROI Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate the exact return on investment for automating your business processes with a custom app.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Current Process</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What process would you like to automate?
                  </label>
                  <input
                    type="text"
                    value={inputs.currentProcess}
                    onChange={(e) => handleInputChange('currentProcess', e.target.value)}
                    placeholder="e.g., Manual invoice creation, Customer onboarding, Inventory tracking"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hours spent each time
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={inputs.timeSpentHours}
                      onChange={(e) => handleInputChange('timeSpentHours', parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Times per week
                    </label>
                    <input
                      type="number"
                      value={inputs.timesPerWeek}
                      onChange={(e) => handleInputChange('timesPerWeek', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your hourly rate (or cost of employee time)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      value={inputs.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', parseFloat(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated app cost
                    </label>
                    <select
                      value={inputs.appCost}
                      onChange={(e) => handleInputChange('appCost', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={297}>Workflow Killer ($297)</option>
                      <option value={297}>Micro-App ($297)</option>
                      <option value={1997}>Starter App ($1,997)</option>
                      <option value={3997}>Business App ($3,997)</option>
                      <option value={7997}>System App ($7,997)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected efficiency gain
                    </label>
                    <select
                      value={inputs.efficiencyGain}
                      onChange={(e) => handleInputChange('efficiencyGain', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={50}>50% - Partial automation</option>
                      <option value={70}>70% - Good automation</option>
                      <option value={80}>80% - Great automation</option>
                      <option value={90}>90% - Excellent automation</option>
                      <option value={95}>95% - Near-complete automation</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-8">
              {/* Time Savings */}
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Time Savings</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {results.weeklyTimeSaved.toFixed(1)}h
                    </div>
                    <div className="text-sm text-gray-600">Per Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {results.monthlyTimeSaved.toFixed(1)}h
                    </div>
                    <div className="text-sm text-gray-600">Per Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {results.yearlyTimeSaved.toFixed(0)}h
                    </div>
                    <div className="text-sm text-gray-600">Per Year</div>
                  </div>
                </div>
              </div>

              {/* Cost Savings */}
              <div className="bg-green-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cost Savings</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${results.weeklyCostSaved.toFixed(0)}
                    </div>
                    <div className="text-sm text-gray-600">Per Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${results.monthlyCostSaved.toFixed(0)}
                    </div>
                    <div className="text-sm text-gray-600">Per Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${results.yearlyCostSaved.toFixed(0)}
                    </div>
                    <div className="text-sm text-gray-600">Per Year</div>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">ROI Metrics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payback Period:</span>
                    <span className="text-xl font-bold text-purple-600">
                      {results.paybackPeriod > 0 ? `${results.paybackPeriod.toFixed(1)} months` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Year 1 ROI:</span>
                    <span className="text-xl font-bold text-purple-600">
                      {results.yearOneROI > 0 ? `${results.yearOneROI.toFixed(0)}%` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Break-even point:</span>
                    <span className="text-xl font-bold text-purple-600">
                      {results.paybackPeriod > 0 ? `${(results.paybackPeriod * 30).toFixed(0)} days` : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              {results.yearOneROI > 100 && (
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    🚀 Excellent ROI Potential!
                  </h3>
                  <p className="mb-6">
                    With a {results.yearOneROI.toFixed(0)}% first-year ROI, this app would pay for itself 
                    in just {results.paybackPeriod.toFixed(1)} months.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get My Free Proposal
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Example Scenarios */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Real Client Examples
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Yoga Studio Booking</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Manual scheduling → Automated booking system
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Time saved:</span>
                    <span className="font-semibold">15h/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span>App cost:</span>
                    <span className="font-semibold">$297</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payback:</span>
                    <span className="font-semibold text-green-600">2 weeks</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Restaurant Orders</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Phone orders → Online ordering system
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Time saved:</span>
                    <span className="font-semibold">25h/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span>App cost:</span>
                    <span className="font-semibold">$1,997</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payback:</span>
                    <span className="font-semibold text-green-600">6 weeks</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Contractor Estimates</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Manual quotes → Automated pricing tool
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Time saved:</span>
                    <span className="font-semibold">12h/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span>App cost:</span>
                    <span className="font-semibold">$3,997</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payback:</span>
                    <span className="font-semibold text-green-600">3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ROICalculatorPage;