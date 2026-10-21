// =============================================
// usePropertyFilter Hook
// =============================================
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';

const initialFilters = {
  search: '',
  type: 'All',
  category: 'All',
  city: 'All Cities',
  bedrooms: 'Any',
  priceMin: 0,
  priceMax: Infinity,
  sortBy: 'default',
};

const parseFiltersFromParams = (params) => {
  const search = params.get('search') || '';
  const city = params.get('city') || 'All Cities';
  const bedrooms = params.get('bedrooms') || 'Any';
  const sortBy = params.get('sortBy') || 'default';
  
  let type = params.get('type') || 'All';
  let category = params.get('category') || '';

  const pluralToSingular = {
    'Apartments': 'Apartment',
    'Villas': 'Villa',
    'Plots': 'Plot',
    'Commercial': 'Commercial'
  };

  if (pluralToSingular[type]) {
    type = pluralToSingular[type];
  } else if (type === 'Luxury Homes') {
    category = 'Luxury Homes';
    type = 'All';
  }

  return {
    ...initialFilters,
    search,
    type,
    category,
    city,
    bedrooms,
    sortBy,
  };
};

/**
 * Custom hook for property filtering and sorting
 */
export const usePropertyFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevParamsString, setPrevParamsString] = useState(searchParams.toString());
  const [filters, setFilters] = useState(() => parseFiltersFromParams(searchParams));

  const currentParamsString = searchParams.toString();
  if (currentParamsString !== prevParamsString) {
    setPrevParamsString(currentParamsString);
    setFilters(parseFiltersFromParams(searchParams));
  }

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          p.city.toLowerCase().includes(searchLower) ||
          p.type.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type && filters.type !== 'All') {
      result = result.filter((p) => p.type === filters.type);
    }

    // Category filter
    if (filters.category && filters.category !== 'All' && filters.category !== '') {
      result = result.filter((p) => p.category === filters.category);
    }

    // City filter
    if (filters.city && filters.city !== 'All Cities') {
      result = result.filter((p) => p.city === filters.city);
    }

    // Bedrooms filter
    if (filters.bedrooms && filters.bedrooms !== 'Any') {
      if (filters.bedrooms === '5+') {
        result = result.filter((p) => p.bedrooms >= 5);
      } else {
        result = result.filter((p) => p.bedrooms === parseInt(filters.bedrooms));
      }
    }

    // Price range filter
    result = result.filter(
      (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
    );

    // Sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'area-asc':
        result.sort((a, b) => a.area - b.area);
        break;
      case 'area-desc':
        result.sort((a, b) => b.area - a.area);
        break;
      case 'newest':
        result.sort((a, b) => (b.yearBuilt || 0) - (a.yearBuilt || 0));
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    
    // Sync to URL parameters
    const params = new URLSearchParams(searchParams);
    if (value === 'All' || value === 'All Cities' || value === 'Any' || value === 'default' || value === '' || value === 0 || value === Infinity) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setSearchParams({});
  };

  return { filters, filteredProperties, updateFilter, resetFilters };
};

export default usePropertyFilter;
