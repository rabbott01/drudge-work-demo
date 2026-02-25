/**
 * Utility functions for drudge-work-demo
 */

const _ = require('lodash');

/**
 * Returns a greeting message
 * TODO: Support i18n - greeting is currently English only
 */
function getGreeting() {
  return 'Welcome to the Drudge Work Demo API';
}

/**
 * Parse and sanitize query parameters
 * FIXME: Use a validation library (e.g. joi, zod) instead of manual parsing
 * @param {Object} query - Express req.query object
 * @returns {{ limit: number, offset: number }}
 */
function parseQuery(query) {
  const limit = parseInt(query.limit, 10) || 10;
  const offset = parseInt(query.offset, 10) || 0;
  return { limit: _.clamp(limit, 1, 100), offset: _.max([0, offset]) };
}

module.exports = {
  getGreeting,
  parseQuery,
};
