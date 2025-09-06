import React from 'react';

const FilterBar = ({ filters, onFilterChange, onSearch }) => {
  const handleTypeChange = (type) => {
    onFilterChange({ ...filters, type });
  };

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-testid="filter-bar">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleTypeChange('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filters.type === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Properties
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('sale')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filters.type === 'sale'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              For Sale
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('rent')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filters.type === 'rent'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              For Rent
            </button>
          </div>
          
          <div className="flex-grow max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by city or country..."
                className="form-input pl-10"
                value={filters.search}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;