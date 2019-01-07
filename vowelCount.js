const countVowelsInStr = (str) => {
	var arr = str.split('');
	var setVowels = new Set(['a', 'e', 'y', 'i', 'o', 'u']);
	var sumVowels = arr.reduce(function (accumulator, currentValue) {
  		if (setVowels.has(currentValue)) {
			return accumulator += 1;
		} else {
			return accumulator;
		}
	}, 0);

	return sumVowels;
}