const { db } = require("./db");

// What is the total number of employees?
const getTotalEmployees = async () => {
	const [result, meta] = await db.query(`
		SELECT COUNT(*) AS totalEmployees FROM employee_detail;
	`);
	return result[0].totalEmployees;
};

const logTotalEmployees = async () => {
	const value = await getTotalEmployees();
	console.log(`The total number of employees is: ${value}`);
};

logTotalEmployees();

// Who is the highest earning employee and what is their job title?
const getHighestEarningEmployee = async () => {
	const [result, meta] = await db.query(`
		SELECT employee_id FROM current_job_detail
		WHERE salary = (SELECT MAX(salary) FROM current_job_detail);
	`);
	return result[0].employee_id;
};

const getEmployeeById = async (id) => {
	const [result, meta] = await db.query(`
		SELECT name FROM employee_detail
		WHERE employee_id = ${id};
	`);
	return result[0].name;
};

const logHighestEarningEmployee = async () => {
	const id = await getHighestEarningEmployee();
	const value = await getEmployeeById(id);
	console.log(`The highest earning employee is: ${value}`);
};

logHighestEarningEmployee();

// // How many senior developers are there?
const getNumberOfSeniorDevs = async () => {
	const [result, meta] = await db.query(`
		SELECT COUNT(*) AS numSeniorDevs FROM current_job_detail
		WHERE job_title = "Senior Developer";
	`);

	return result[0].numSeniorDevs;
};

const logNumberOfSeniorDevs = async () => {
	const value = await getNumberOfSeniorDevs();
	console.log(`The number of Senior Developers is: ${value}`);
};

logNumberOfSeniorDevs();

// What are the wage brackets for the different jobs?
const wageBracket = async () => {};

// Who are the employees who are not developers, and what are their salaries?
