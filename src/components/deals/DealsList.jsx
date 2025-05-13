import React, { useState, useMemo } from 'react';
import { getGroupedDealsByStage } from '../../data/mockData';
import DealStageSection from './DealStageSection';
import DealFilters from './DealFilters';
import { List, BarChart } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

const DealsList = () => {
  const [stageGroups, setStageGroups] = useState(getGroupedDealsByStage());
  const [view, setView] = useState('my-deals');
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showActiveDealsOnly, setShowActiveDealsOnly] = useState(false);

  const handleToggleExpand = (stageName) => {
    setStageGroups(prevGroups => 
      prevGroups.map(group => 
        group.stage === stageName 
          ? { ...group, isExpanded: !group.isExpanded }
          : group
      )
    );
  };

  const handleToggleView = (newView) => {
    setView(newView);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setStartDate('');
    setEndDate('');
    setShowActiveDealsOnly(false);
  };

  // Filter deals based on search query and date range
  const filteredStageGroups = useMemo(() => {
    return stageGroups.map(group => {
      let filteredDeals = [...group.deals];
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredDeals = filteredDeals.filter(deal => 
          deal.name.toLowerCase().includes(query) || 
          deal.client.name.toLowerCase().includes(query) ||
          deal.client.company.toLowerCase().includes(query)
        );
      }
      
      // Filter by date range
      if (startDate) {
        filteredDeals = filteredDeals.filter(deal => 
          new Date(deal.createdAt) >= new Date(startDate)
        );
      }
      
      if (endDate) {
        filteredDeals = filteredDeals.filter(deal => 
          new Date(deal.createdAt) <= new Date(endDate)
        );
      }
      
      // Filter active deals (not in 'Lost' stage)
      if (showActiveDealsOnly) {
        filteredDeals = filteredDeals.filter(deal => deal.stage !== 'Lost');
      }
      
      const totalValue = filteredDeals.reduce((sum, deal) => sum + deal.budget, 0);
      
      return {
        ...group,
        deals: filteredDeals,
        totalValue,
        count: filteredDeals.length
      };
    });
  }, [stageGroups, searchQuery, startDate, endDate, showActiveDealsOnly]);

  // Calculate total value for display
  const totalPipelineValue = useMemo(() => {
    return filteredStageGroups.reduce((sum, group) => sum + group.totalValue, 0);
  }, [filteredStageGroups]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm mt-6 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium text-center ${
              view === 'my-deals' 
                ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                : 'bg-gray-50 text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleToggleView('my-deals')}
          >
            My Deals
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium text-center ${
              view === 'all-clients' 
                ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                : 'bg-gray-50 text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleToggleView('all-clients')}
          >
            All clients
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              className="p-2 rounded-full bg-blue-100 text-blue-600"
              title="Pipeline View"
            >
              <BarChart className="h-5 w-5" />
            </button>
            
            <button
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
              title="List View"
            >
              <List className="h-5 w-5" />
            </button>
            
            <div className="text-sm text-gray-500 ml-2">
              Total Deals: <span className="font-medium">{filteredStageGroups.reduce((sum, group) => sum + group.count, 0)}</span>
            </div>
            
            <div className="text-sm text-gray-500 ml-2">
              Total Revenue in Pipeline: <span className="font-medium">{formatCurrency(totalPipelineValue)}</span>
            </div>
          </div>
          
          <DealFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            showActiveDealsOnly={showActiveDealsOnly}
            onToggleActiveDeals={() => setShowActiveDealsOnly(!showActiveDealsOnly)}
            onClearFilters={handleClearFilters}
          />
          
          <div className="mt-4">
            {filteredStageGroups.map((group) => (
              <DealStageSection 
                key={group.stage} 
                stageGroup={group} 
                onToggleExpand={handleToggleExpand} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsList;