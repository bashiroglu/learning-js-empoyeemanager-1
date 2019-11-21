// imports

import { Request } from "./requests";

// Selecting elements

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const sallaryInput = document.getElementById("sallary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

// Object creating
const request = new Request("http://localhost:3000/employees");

request
  .get()
  .then(employee => console.log(employee))
  .catch(err => console.log(err));

// request
//   .post({ name: "Ismayil", department: "engineering", sallary: "7000" })
//   .then(employee => console.log(employee))
//   .catch(err => console.log(err));
// request
//   .put(1,{sallary: "3200"})
//   .then(employee => console.log(employee))
//   .catch(err => console.log(err));

// request
//   .delete(3)
//   .then(employee => console.log(employee))
//   .catch(err => console.log(err));
