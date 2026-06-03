// =============================================
// FORMAT PRICE UTILITY
// =============================================

/**
 * Formats a price number to Indian currency format
 * @param {number} price - Price in rupees
 * @param {boolean} short - Whether to use short format (L, Cr)
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, short = true) => {
  if (!price) return "Price on Request";

  if (short) {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} L`;
    } else {
      return `₹${price.toLocaleString("en-IN")}`;
    }
  }

  return `₹${price.toLocaleString("en-IN")}`;
};

/**
 * Formats area with unit
 * @param {number} area - Area in sq ft
 * @returns {string} Formatted area string
 */
export const formatArea = (area) => {
  if (!area) return "N/A";
  return `${area.toLocaleString("en-IN")} sq.ft`;
};

/**
 * Formats price per sqft
 * @param {number} pricePerSqft
 * @returns {string}
 */
export const formatPricePerSqft = (pricePerSqft) => {
  if (!pricePerSqft) return "N/A";
  return `₹${pricePerSqft.toLocaleString("en-IN")}/sq.ft`;
};
