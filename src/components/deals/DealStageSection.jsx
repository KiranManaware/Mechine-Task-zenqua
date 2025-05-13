import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronRight } from 'lucide-react';
import DealRow from './DealRow';
import { formatCurrency } from '../../utils/formatters';

const DealStageSection = ({ stageGroup, onToggleExpand }) => {
  const { stage, deals, totalValue, count, isExpanded } = stageGroup;

  const handleToggle = () => {
    onToggleExpand(stage);
  };

  // Maps deal stages to background colors
  const stageBgColors = {
    'Negotiating': 'bg-blue-50',
    'Kickback': 'bg-purple-50',
    'Closed': 'bg-green-50',
    'Lost': 'bg-gray-50'
  };

  // Define a background color based on the stage
  const bgColor = stageBgColors[stage] || 'bg-gray-50';

  return (
    <div className="mb-2 border border-gray-200 rounded-md overflow-hidden">
      <div 
        className={`flex items-center justify-between px-4 py-3 cursor-pointer ${bgColor} hover:bg-opacity-80 transition-colors`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-500 mr-2" />
          )}
          <span className="font-medium text-gray-800">{stage}</span>
          <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-white text-gray-700 rounded-full">
            {count}
          </span>
        </div>
        <div className="text-sm font-medium text-gray-700">
          {formatCurrency(totalValue)}
        </div>
      </div>
      
      {isExpanded && deals.length > 0 && (
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 grid grid-cols-12 gap-4 text-xs font-medium text-gray-500">
            <div className="col-span-3">Client</div>
            <div className="col-span-3">Deal Name</div>
            <div className="col-span-3">Deal Budget</div>
            <div className="col-span-3">Assignee</div>
          </div>
          <div>
            {deals.map((deal) => (
              <DealRow key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      )}
      
      {isExpanded && deals.length === 0 && (
        <div className="py-8 text-center text-gray-500">
          No deals in this stage
        </div>
      )}
    </div>
  );
};

DealStageSection.propTypes = {
  stageGroup: PropTypes.shape({
    stage: PropTypes.string.isRequired,
    deals: PropTypes.array.isRequired,
    totalValue: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    isExpanded: PropTypes.bool.isRequired
  }).isRequired,
  onToggleExpand: PropTypes.func.isRequired
};

export default DealStageSection;