// API service for property data
const API_BASE = import.meta.env.VITE_API_BASE || 'https://68b826bcb715405043274639.mockapi.io/api/properties';

// Simple in-memory cache
let cache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Normalize property data
export const normalizeProperty = (property) => {
  // Determine type based on ID (odd = sale, even = rent)
  const type = parseInt(property.id) % 2 === 1 ? 'sale' : 'rent';
  
  // Generate consistent fake values based on ID
  const idNum = parseInt(property.id) || 1;
  const price = 50000 * (idNum % 20 + 10);
  const beds = idNum % 5 + 1;
  const baths = Math.floor(idNum % 5 / 2) + 1;
  const area = 500 * (idNum % 10 + 5);
  
  return {
    ...property,
    type,
    price,
    beds,
    baths,
    area
  };
};

// Fetch all properties
export const fetchProperties = async () => {
  // Check cache first
  const now = Date.now();
  if (cache && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
    return cache;
  }
  
  try {
    const response = await fetch(`${API_BASE}/PropertyListing`);
    if (!response.ok) {
      throw new Error(`Failed to fetch properties: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const normalizedData = data.map(normalizeProperty);
    
    // Update cache
    cache = normalizedData;
    cacheTimestamp = now;
    
    return normalizedData;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

// Get featured properties (top n)
export const getFeatured = async (n = 6) => {
  try {
    const properties = await fetchProperties();
    return properties.slice(0, n);
  } catch (error) {
    console.error('Error fetching featured properties:', error);
    throw error;
  }
};