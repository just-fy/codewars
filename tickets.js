const tickets = (peopleInLine) => {
	let twentyFiveBill = 0;
	let fiftyBill = 0;
	let hundredBill = 0;
	if (peopleInLine[0] > 25) {
		return "NO";
	} else {
		twentyFiveBill++;
	}
	for (let i = 1; i < peopleInLine.length; i++) {
		switch (peopleInLine[i]) {
			case 25:
				twentyFiveBill++;
				break;
			case 50:
				fiftyBill++;
				if (twentyFiveBill <= 0) {
					return "NO";
				} else {
					twentyFiveBill--;
				}
				break;
			case 100:
				hundredBill++;
				if (twentyFiveBill >= 1 && fiftyBill > 0) {
					fiftyBill--;
					twentyFiveBill--;
				} else if (twentyFiveBill >= 3) {
					twentyFiveBill -= 3;
				} else {
					return "NO";
				}
				break;
			default:
				break;
		}

	}
			return "YES";
};