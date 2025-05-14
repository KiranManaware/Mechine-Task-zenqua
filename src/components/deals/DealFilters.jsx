import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Search, X, Calendar } from 'lucide-react';

const DealFilters = ({
  searchQuery,
  onSearchChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  showActiveDealsOnly,
  onToggleActiveDeals,
  onClearFilters
}) => {
  const hasFilters = searchQuery || startDate || endDate || showActiveDealsOnly;

  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-grow max-w-md">
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">From:</span>
            <div className="relative">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="pl-8"
              />
              <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">To:</span>
            <div className="relative">
              <Input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                className="pl-8"
              />
              <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        
        <Button
          variant={showActiveDealsOnly ? "primary" : "outline"}
          size="md"
          onClick={onToggleActiveDeals}
          className="whitespace-nowrap"
        >
          Active Deals
        </Button>
        
        {hasFilters && (
          <Button
            variant="ghost"
            size="md"
            onClick={onClearFilters}
            leftIcon={<X className="h-4 w-4" />}
            className="text-gray-500"
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};

DealFilters.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  showActiveDealsOnly: PropTypes.bool.isRequired,
  onToggleActiveDeals: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired
};

export default DealFilters;