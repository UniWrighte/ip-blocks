const {findLastIndexLT, getAmountsByPosition} = require('./helpers');

const getIP = function(index = 257, blocks = [0,0,3,256], arr = []){

	// const positions = [0 * 0 * 256 * 3, 0 * 256 * 3, 256 * 3, 256]; //pseudo operation - will just need somethign liek a facotrial or some bullshit.
	const positions = getAmountsByPosition(blocks);

	const result = findLastIndexLT(positions, index);


	if(result === positions.length - 1){
		//handle case of no narrowing down.
		arr.push(index);
		return arr;
	}
	const multiple = positions[result + 1];
	let topIndex = 0;
	let copyIndex = index;
	while(copyIndex > multiple){
		copyIndex -= multiple;
		topIndex++;
	}
	//TODO - copy index needs to be treated nearly the same as index, with blocks changed to make current block 0.

	console.log({result, topIndex, copyIndex});
	arr.push(topIndex);
	return getIP(copyIndex, blocks, arr);

}

exports.getIP = getIP;