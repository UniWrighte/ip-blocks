const {findLastIndexLT, getAmountsByPosition} = require('./helpers');

const getIP = function(index = 257, blocks = [0,0,3,256], arr = []){

	// const positions = [0 * 0 * 256 * 3, 0 * 256 * 3, 256 * 3, 256]; //pseudo operation - will just need somethign liek a facotrial or some bullshit.
	//find the number of available addresses given an available block
	const positions = getAmountsByPosition(blocks);

	//find the smallest position to change (so if we have 300 we know that we have to move to the second block)
	const result = findLastIndexLT(positions, index);


	//if the result is in the last position, it means we can just add the remaining index to the last block
	if(result === positions.length - 1){
		//push the index (or remaining amount) to the array.
		arr.push(index);
		//end recursion
		return arr;
	}
	//this is the size of the next block, so the last block is, say, 256
	const multiple = positions[result + 1];
	//This is the number of times the current block has to move up 1.
	let topIndex = 0;
	//this is a copy of the index. don't think it is neccesary but here to avoid mutation of input param.
	let copyIndex = index;
	//until the index is less than the block bellow it, add one to the counter
	while(copyIndex >= multiple){
		copyIndex -= multiple;
		topIndex++;
	}
	//TODO - copy index needs to be treated nearly the same as index, with blocks changed to make current block 0.

	//push this count/index
	arr.push(topIndex);
	//recurse
	return getIP(copyIndex, blocks, arr);

}

exports.getIP = getIP;