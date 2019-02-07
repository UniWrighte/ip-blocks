//should I be adding one here?
const numberToByte = function(number){
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
exports.numberToByte = numberToByte;

exports.byteToNumber = function(byte){
	const number = byte.reverse().reduce((acc, val, i)=>{
		return acc + (val === 1 ? Math.pow(2, i) : 0);
	});
	// return number === 255 ? number : number + 1;
	return number;
}

exports.convertBaseToBinary = function(addressString){
	const removedPeriods = addressString.split(".");
	return removedPeriods.map((item, i)=>numberToByte(Number(item)));
}

exports.convertBaseToNumbers = function(addressString){
	const removedPeriods = addressString.split(".");
	return removedPeriods.map(item=>Number(item));
}