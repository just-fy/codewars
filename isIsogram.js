const isIsogram = (str) => {
	let setChars = new Set([]);
	const res = str.toLowerCase();
	for (let i = 0; i < res.length; i++) {
		if (setChars.has(res[i])) {
			return false;
		} else {
			setChars.add(res[i]);
		}	
	}
	return true;
};