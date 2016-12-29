const sleepSort  = require('../lib');
require('should');

const assert = require('assert');
describe('sleepSort', () => {
	it('should return empty array for empty array input', () => 
		sleepSort([]).should.eventually.be.eql([])
	);

	it('should return sorted array for non-empty array input', () => 
		sleepSort([3,2,1]).should.eventually.be.eql([1,2,3])
	);
});