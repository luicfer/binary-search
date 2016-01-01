var should = require('should');
describe("binarysearch", function () {
	var arr = [1, 2, 2, 2, 3, 5, 9];
	var cmp = function (a, b) {
		return a - b;
	};
	var bs = require("./");
	var numberSearch = bs(cmp, arr);
	it('should return the index of an item in a sorted array', function () {
		numberSearch(1).should.equal(0);
		numberSearch(2).should.equal(3);
	});

	it('should return the index of where the item would go plus one, negated, if the item is not found', function () {
		numberSearch(4).should.equal(-6);
	});

	it("should work even on empty arrays", function () {
		bs(cmp, [], 4).should.equal(-1);
	});
});