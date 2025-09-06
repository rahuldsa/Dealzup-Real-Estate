import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import PropertyGrid from '../components/PropertyGrid';
import { fetchProperties } from '../services/api';

const PropertyListingPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    type: 'all',
    search: ''
  });

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const data = await fetchProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (err) {
        setError('Failed to load properties. Please try again later.');
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  useEffect(() => {
    // Update document title
    document.title = 'Property Listings | Real Estate';
    
    // Apply filters when properties or filters change
    applyFilters();
  }, [properties, filters]);

  const applyFilters = () => {
    let result = [...properties];
    
    // Filter by type
    if (filters.type !== 'all') {
      result = result.filter(property => property.type === filters.type);
    }
    
    // Filter by search term (city or country)
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(property => 
        property.city.toLowerCase().includes(searchTerm) ||
        property.country.toLowerCase().includes(searchTerm)
      );
    }
    
    setFilteredProperties(result);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Listings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our extensive collection of properties for sale and rent
          </p>
        </div>
        
        <FilterBar 
          filters={filters} 
          onFilterChange={handleFilterChange} 
          onSearch={handleSearch} 
        />
        
        {error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-red-700 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="btn-primary"
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <PropertyGrid properties={filteredProperties} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;