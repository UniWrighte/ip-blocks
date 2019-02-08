const ipblocks = require('./index');
const range = require('ip-range-generator');

test("ipblocks works for a given range", ()=>{
	const ipArray = ipblocks("192.168.0.1", 23, 0);
	expect(ipArray).toEqual([192, 168, 0, 1]);

	const r = range('192.168.0.0', '192.168.1.0');
	let i = 0;
	for(let ip of r){
		// console.log(i);
		// console.log({ip});
		expect(ipblocks("192.168.0.0", 23, i).join(".")).toBe(ip);
		i++;
	}
});