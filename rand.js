function rand(num1 = 0, num2 = 40000) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		try {
			throw new TypeError("Both parameter must be a number");
		} catch(err) {
			return err;
		}
	} else {
		if (num1 < num2) {
			return Math.round((Math.random() * (num2 - num1)) + num1)
		} else if (num1 > num2) {
			return Math.round((Math.random() * (num1 - num2)) + num2)
		} else {
			try {
				throw new RangeError("Both parameter cannot be a same number");
			} catch(err) {
				return err;
			}
		}
	}
}

module.exports = rand