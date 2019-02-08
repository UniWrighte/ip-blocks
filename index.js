const {numberToByte, byteToNumber, convertBaseToBinary, convertBaseToNumbers} = require("./helpers/converters");
const {findLastIndexLT, numOfAddresses, getAmountsByPosition} = require("./helpers/helpers");
const {getIP} = require('./helpers/ip');


// console.log(numOfAddresses([256, 32]));
// console.log(numOfAddresses([256,256]));
// console.log(numOfAddresses([256, 256, 32]));

function address(base, subnet, index){
	//subnet is  /32 syntax
	const binaryArray = new Array(32).fill(1).map((item, i)=>{
		return i < subnet ? item : 0;
	});

	const blockCount = 32 - subnet;
	let numBlocks = blockCount/8;
	const blocks = [];
	
	while(numBlocks > 1){
		blocks.push(256);
		numBlocks -= 1;
	}
	blocks.push(256 * numBlocks);
	while(blocks.length != 4) blocks.push(0);
	blocks.reverse();
	//should this be a plus 1? Probably not?
	const i = index + 1;

	const toAdd = getIP(index, blocks);

	while(toAdd.length < 4){
		toAdd.unshift(0);
	}


	//it needs to pass all in a block and reset to 0, iterating the next block + 1;
	const baseArray = convertBaseToNumbers(base);

	return baseArray.map((item, i)=>{
		return item + toAdd[i];
	});

}

module.exports = address;



// console.log("address:::", address("192.168.0.1", 23, 0));
// console.log("address1:::", address("192.168.0.1", 20, 300));

// console.log(byteToNumber([1,1,1,1,1,1,1,1]))

// console.log(numberToByte(256));
// console.log(convertBaseToBinary("192.168.0.1"));




// console.log(getAmountsByPosition());


// const result = getIP();
// const result2 = getIP(1);
// const result3 = getIP(400);
// const result4 = getIP(0);
// console.log({result2, result3, result4});
// console.log({result});