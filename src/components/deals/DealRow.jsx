import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../ui/Avatar';
import { formatCurrency } from '../../utils/formatters';
import { Trash2 } from 'lucide-react';

const DealRow = ({ deal }) => {
  return (
    <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="col-span-3 flex items-center">
        <Avatar 
          name={deal.client.name}
          initials={deal.client.initials}
          size="sm"
          imageUrl={deal.client.avatar}
        />
        <div className="ml-3">
          <div className="text-sm font-medium text-gray-900">{deal.client.name}</div>
          <div className="text-xs text-gray-500">{deal.client.company}</div>
        </div>
      </div>
      
      <div className="col-span-3 flex items-center">
        <div className="text-sm font-medium text-gray-900">{deal.name}</div>
      </div>
      
      <div className="col-span-3 flex items-center">
        <div className="text-sm font-medium text-gray-900">{formatCurrency(deal.budget)}</div>
      </div>
      
      <div className="col-span-3 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar 
            name={deal.assignee.name}
            initials={deal.assignee.initials}
            size="sm"
            imageUrl={deal.assignee.avatar}
          />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">{deal.assignee.name}</div>
          </div>
        </div>
        
        <button 
          className="p-1 text-gray-400 hover:text-red-500 transition-colors focus:outline-none"
          title="Delete deal"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

DealRow.propTypes = {
  deal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    client: PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      initials: PropTypes.string.isRequired,
      avatar: PropTypes.string
    }).isRequired,
    assignee: PropTypes.shape({
      name: PropTypes.string.isRequired,
      initials: PropTypes.string.isRequired,
      avatar: PropTypes.string
    }).isRequired
  }).isRequired
};

export default DealRow;