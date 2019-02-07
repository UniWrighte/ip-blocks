exports.numOfAddresses = function(blocks, index){
	const numOfPossibilities = blocks.reverse().reduce((acc, val)=>{
		return acc * val;
	});
	return numOfPossibilities;
}

exports.findLastIndexLT = function(array, index){
	const reverse = array.slice();
	reverse.reverse();
	const i = reverse.findIndex((item, i)=>{
		return index < item;
	});
	return reverse.length - 1 - i;
}
exports.getAmountsByPosition = function(blocks= [256, 256, 256, 256]){
	return blocks.map((item, i)=>{
		if(i === blocks.length -1) return item;
		for(let j = i + 1; j < blocks.length; j++){
			item *= blocks[j];
		}
		return item;
	});
}