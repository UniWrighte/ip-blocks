const {numberToByte, byteToNumber} = require('./converters');

test("returns a byte representation of a number", ()=>{
	expect(numberToByte(1)).toEqual([0,0,0,0,0,0,0,1]);
});

test("returns a number when given a byte as an array", ()=>{
	expect(byteToNumber([0,0,0,0,0,0,0,1])).toBe(1);
})

