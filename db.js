import Database from "better-sqlite3";
const db = new Database("./database/employees.db")

db.prepare(`CREATE TABLE IF NOT EXISTS employees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT,
    lastname TEXT,
    firstname TEXT,
    position TEXT,
    salary REAL,
    department TEXT,
    gender TEXT,
    holiday_days INTEGER,
    birth_date TEXT
    )`).run()

export const getEmployees = () => db.prepare("SELECT * FROM employees").all()

export const getEmployeeById = (id) => db.prepare("SELECT * FROM employees WHERE id = ?").get(id)

export const saveEmployee = (company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date) => db.prepare("INSERT INTO employees (company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)").run(company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date)

export const updateEmployee = (id, company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date) => db.prepare(`UPDATE employees SET company = ?, lastname = ?, firstname = ?, position = ?, salary = ?, department = ?, gender = ?, holiday_days = ?, birth_date = ? WHERE id = ?`).run(company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date, id)

export const deleteEmployee = (id) => db.prepare("DELETE FROM employees WHERE id = ?").run(id)

const employees = getEmployees()
if(!employees.length){
    saveEmployee("company", "Tech Solutions Ltd",
"lastname", "Smith",
"firstname", "John",
"position", "Developer",
"salary", 4500,
"department", "IT",
"gender", "Male",
"holiday_days", 24,
"birth_date", "1990-05-12")
}