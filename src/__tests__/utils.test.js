/**
 * Unit tests for utils module
 * TODO: Add proper test framework (Jest or Mocha) - currently using basic asserts
 */

const { getGreeting, parseQuery } = require('../utils');

function assert(condition, message) {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
}

console.log('Running utils tests...');

// Test getGreeting
assert(typeof getGreeting() === 'string', 'getGreeting returns a string');
assert(getGreeting().length > 0, 'getGreeting returns non-empty string');

// Test parseQuery
const defaultParams = parseQuery({});
assert(defaultParams.limit === 10, 'parseQuery returns default limit');
assert(defaultParams.offset === 0, 'parseQuery returns default offset');

const customParams = parseQuery({ limit: '25', offset: '5' });
assert(customParams.limit === 25, 'parseQuery parses limit');
assert(customParams.offset === 5, 'parseQuery parses offset');

// FIXME: Add tests for edge cases (negative numbers, NaN, very large values)

console.log('All tests passed!');
