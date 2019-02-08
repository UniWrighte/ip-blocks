const {numberToByte, byteToNumber, convertBaseToBinary, convertBaseToNumbers} = require('./converters');

test("returns a byte representation of a number", ()=>{
	expect(numberToByte(1)).toEqual([0,0,0,0,0,0,0,1]);
});

test("returns a number when given a byte as an array", ()=>{
	expect(byteToNumber([0,0,0,0,0,0,0,1])).toBe(1);
});

test("returns binary from an IP address string", ()=>{
	expect(convertBaseToBinary("0.0.0.0")).toEqual(new Array(4).fill(0).map(i=>new Array(8).fill(0)));
});

test("returns numbers representing base", ()=>{
	expect(convertBaseToNumbers("192.168.254.254")).toEqual([192,168,254,254]);
});
