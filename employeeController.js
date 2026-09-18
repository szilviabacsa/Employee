import * as db from "../database/db.js";

export const getEmployees = (req, res) => {
  const employees = db.getEmployees();
  res.status(200).json(employees);
};

export const getEmployeeById = (req, res) => {
  const employee = db.getEmployeeById(+req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.status(200).json(employee);
};

export const saveEmployee = (req, res) => {
  const {company, lastname, firstname, position, salary, department, gender, holiday_date, birth_date,} = req.body;
  if (!company || !lastname || !firstname || !position || !salary || !department || !gender || !holiday_date || !birth_date) {
    return res.status(400).json({ message: "Missing some data" });
  }
  try {
    const saved = db.saveEmployee( company, lastname, firstname, position, salary, department, gender, holiday_date, birth_date,);
    const employee = db.getEmployeeById(saved.lastInsertRowid);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateEmployee = (req, res) => {
  const id = req.params.id
  let employee = db.getEmployeeById(id)
  if(!employee){
    return res.status(404).json({ message: "Employee not found" });
  }
  const {company, lastname, firstname, position, salary, department, gender, holiday_date, birth_date,} = req.body;
  try {
    const updated = db.updateEmployee(id, company || employee.company, lastname || employee.lastname, firstname || employee.firstname, position || employee.position, salary || employee.salary, department || employee.department, gender || employee.gender, holiday_date || employee.holiday_date, birth_date || employee.birth_date,);
    employee = db.getEmployeeById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteEmployee = (req, res) => {
  db.deleteEmployee(+req.params.id)
  res.status(200).json({message: "Delete success"})
}