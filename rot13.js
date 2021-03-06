// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included 
// in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = message => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const rotLetters = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	const arrLetters = [...message];

	const result = arrLetters.reduce((acc, current) => {
		const pos = alphabet.indexOf(current);
		return pos !== -1 ? acc += rotLetters[pos] : acc += current;
	}, '');

	return result;
};