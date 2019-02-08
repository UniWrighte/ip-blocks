const {numOfAddresses, findLastIndexLT, getAmountsByPosition} = require('./helpers');

test("numOfAddresses returns total number of addresses including gateway and broadcast", ()=>{
	expect(numOfAddresses([256, 256, 256, 256])).toBe(4294967296);
});

test("findLastIndexLT returns the last index of a number that is less than the second passed param", ()=>{
	//should this be 2???
	expect(findLastIndexLT([1,2,3,4], 3)).toBe(3);
});

test("getAmountByPosition returns a total number of ip's at each block",()=>{
	expect(getAmountsByPosition([256, 256, 256, 256])).toEqual([4294967296, 16777216, 65536, 256]);
});