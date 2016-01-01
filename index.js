var R = require('ramda');
module.exports = R.curry(function (comparator, arr, obj) {
	var high= arr.length - 1;
	if(high === -1) return high;
	var low= 0;
	var mid, cmp;

	while (low <= high) {
		mid = low + (high - low >> 1);
		cmp = +comparator(arr[mid], obj);

		if (cmp < 0.0)
			low = mid + 1;
		else if (cmp > 0.0)
			high = mid - 1;
		else
			return mid;
	}
	return ~low;
});