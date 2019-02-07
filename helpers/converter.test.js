const {numberToByte} = require('./converters');

test("returns a byte representation of a number", ()=>{
	expect(numberToByte(1)).toEqual([0,0,0,0,0,0,0,1]);
})