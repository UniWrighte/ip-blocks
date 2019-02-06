

function byteToNumber(byte){
	const number = byte.reverse().reduce((acc, val, i)=>{
		return acc + (val === 1 ? Math.pow(2, i) : 0);
	});
	// return number === 255 ? number : number + 1;
	return number;
}
//should I be adding one here?
function numberToByte(number){
	const byte = new Array(8).fill(0);
	for(let i = byte.length - 1; i >= 0; i--){
		const pos = Math.pow(2, i);
		console.log({pos});
		if(number >= pos){
			number -= pos;
			byte[i] = 1;
		}
	}
	return byte.reverse();
}

function address(base, subnet, index){
	//subnet is  /32 syntax
	const binaryArray = new Array(32).fill(1).map((item, i)=>{
		return i < subnet ? item : 0;
	});
	const binarySub = binaryArray.join('');


}

console.log(address("null", 24, 0));

console.log(byteToNumber([1,1,1,1,1,1,1,1]))

console.log(numberToByte(256));