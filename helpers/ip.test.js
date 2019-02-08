const {getIP} = require('./ip');


test("getIP returns the correct an array to add", ()=>{
	expect(getIP()).toEqual([1,1]);
	const test = getIP(255);
	console.log({test});
	expect(getIP(255, blocks = [0,0,3,256])).toEqual([255]);
	expect(getIP(256)).toEqual([1, 0]);
});