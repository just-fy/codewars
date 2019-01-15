const getSumOfDigits = num => {
	if (num < 10) {
		return num;
	}

	const arrDigits = num.toString().split("");
	let sumDigits = 0;
	for (let i = 0; i < arrDigits.length; i++) {
		sumDigits += Number(arrDigits[i]);
	}
	
	return getSumOfDigits(sumDigits);
};

// more elegant option
const digitSum = n => [...n.toString()].map(n => Number(n)).reduce((a, b) => a + b);