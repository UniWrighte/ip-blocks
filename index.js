

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
		if(number >= pos){
			number -= pos;
			byte[i] = 1;
		}
	}
	return byte.reverse();
}
function convertBaseToBinary(addressString){
	const removedPeriods = addressString.split(".");
	return removedPeriods.map((item, i)=>numberToByte(Number(item)));
}

function address(base, subnet, index){
	//subnet is  /32 syntax
	const binaryArray = new Array(32).fill(1).map((item, i)=>{
		return i < subnet ? item : 0;
	});

	const last = binaryArray.slice(subnet, binaryArray.length);
	let blockCount = last.length / 8;
	const blocks = [];

	while(blockCount > 1){
		blocks.push(8);
		blockCount -= 1;
	}
	blockCount > 0 && blocks.push(8 * blockCount);

	



}

console.log(address("192.168.0.1", 23));

console.log(byteToNumber([1,1,1,1,1,1,1,1]))

console.log(numberToByte(256));
console.log(convertBaseToBinary("192.168.0.1"));