// =============================================
// PROPERTIES LISTING PAGE
// =============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch, FaFilter, FaSort, FaTh, FaList,
  FaMapMarkerAlt, FaTimes, FaSlidersH
} from 'react-icons/fa';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import { usePropertyFilter } from '../hooks/usePropertyFilter';
import { propertyTypes, cities, bedroomOptions, priceRanges } from '../data/properties';

const Properties = () => {
  const { filters, filteredProperties, updateFilter, resetFilters } = usePropertyFilter();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-lightSection dark:bg-secondary pt-20">
      {/* Page Header */}
      <div className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=60"
            alt="Properties"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" />
              <span>Explore Listings</span>
            </div>
            <h1 className="heading-xl text-white mt-2">
              All <span className="text-gold-gradient font-playfair italic">Properties</span>
            </h1>
            <p className="text-textGray mt-3 max-w-xl font-inter">
              Browse {filteredProperties.length} verified properties across India.
              Use filters to find exactly what you need.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-primary/50 rounded-2xl p-6 shadow-card mb-8 border border-borderColor dark:border-gray-700"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gold z-10 pointer-events-none" size={14} />
              <input
                type="text"
                value={filters.search}
                onChange={(e) => updateFilter('search', e.target.value)}
                placeholder="Search by property, location, city..."
                className="input-field !pl-10"
              />
            </div>

            {/* Type */}
            <select
              value={filters.type}
              onChange={(e) => updateFilter('type', e.target.value)}
              className="select-field lg:max-w-[160px]"
            >
              {propertyTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>

            {/* City */}
            <select
              value={filters.city}
              onChange={(e) => updateFilter('city', e.target.value)}
              className="select-field lg:max-w-[160px]"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilter('sortBy', e.target.value)}
              className="select-field lg:max-w-[180px]"
            >
              <option value="default">Sort By: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-asc">Area: Small First</option>
              <option value="area-desc">Area: Large First</option>
              <option value="newest">Newest First</option>
            </select>

            {/* More Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 font-poppins font-semibold text-sm transition-all duration-300 ${
                showFilters
                  ? 'bg-gold border-gold text-primary'
                  : 'border-borderColor text-primary dark:text-white hover:border-gold hover:text-gold'
              }`}
            >
              <FaSlidersH size={14} />
              Filters
            </button>

            {/* Reset */}
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-red-200 text-red-500 hover:bg-red-50 font-poppins font-semibold text-sm transition-all duration-300"
            >
              <FaTimes size={14} />
              Reset
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-borderColor dark:border-gray-700 mt-4 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Bedrooms */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-textGray uppercase tracking-wider mb-2">
                      Bedrooms
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {bedroomOptions.map((bed) => (
                        <button
                          key={bed}
                          onClick={() => updateFilter('bedrooms', bed)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-poppins font-medium transition-all ${
                            filters.bedrooms === bed
                              ? 'bg-gold text-primary'
                              : 'bg-lightSection dark:bg-gray-700 text-textGray hover:bg-gold/20 hover:text-gold'
                          }`}
                        >
                          {bed}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-poppins font-semibold text-textGray uppercase tracking-wider mb-2">
                      Price Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => {
                            updateFilter('priceMin', range.min);
                            updateFilter('priceMax', range.max);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-poppins font-medium transition-all ${
                            filters.priceMin === range.min && filters.priceMax === range.max
                              ? 'bg-gold text-primary'
                              : 'bg-lightSection dark:bg-gray-700 text-textGray hover:bg-gold/20 hover:text-gold'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-textGray font-inter text-sm">
            Showing <span className="font-semibold text-primary dark:text-white">{filteredProperties.length}</span> properties
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-gold text-primary' : 'text-textGray hover:text-gold'}`}
            >
              <FaTh size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-gold text-primary' : 'text-textGray hover:text-gold'}`}
            >
              <FaList size={16} />
            </button>
          </div>
        </div>

        {/* Properties Grid / List */}
        {filteredProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-gold" size={36} />
            </div>
            <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-2">No Properties Found</h3>
            <p className="text-textGray font-inter mb-6">Try adjusting your filters to see more results.</p>
            <button onClick={resetFilters} className="btn-gold">
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' : 'flex flex-col gap-6'}>
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
