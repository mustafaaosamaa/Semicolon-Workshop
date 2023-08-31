/**
 * This function calculates the cost of an employee based on the data in its file
 * @param {string} filePath - path to the employee data file
 * @returns {{name: string, cost: number}} - the name and cost of the employee
 */

function costCalculator(filePath) {
	// TODO: write your code here
	// DON'T TOUCH ANYTHING OUTSIDE THIS FUNCTION

	const fs = require("fs");

	const data = fs.readFileSync(filePath, "utf-8");
	const parsedData = JSON.parse(data);
	return {
		"name": parsedData.name,
		"cost": parsedData.salary / parsedData.hours
	};


}

module.exports = {
	costCalculator,
};
