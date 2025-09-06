import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import PropertyGrid from '../components/PropertyGrid';
import Newsletter from '../components/Newsletter';
import { getFeatured } from '../services/api';

const HomePage = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        setLoading(true);
        const properties = await getFeatured(6);
        setFeaturedProperties(properties);
      } catch (err) {
        setError('Failed to load featured properties. Please try again later.');
        console.error('Error fetching featured properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperties();
  }, []);

  // Update document title
  useEffect(() => {
    document.title = 'Home | Real Estate';
  }, []);

  return (
    <div>
      <Hero />
      
      <WhatWeDo />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>
          
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
            <PropertyGrid properties={featuredProperties} loading={loading} />
          )}
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default HomePage;