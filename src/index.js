// imports

import { Request } from './requests';
import { UI } from './ui';

// Selecting elements

const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const salaryInput = document.getElementById('salary');
const employeesList = document.getElementById('employees');
const updateEmployeeButton = document.getElementById('update');

// Object creating
const request = new Request('http://localhost:3000/employees');
const ui = new UI();

eventListener();

function eventListener() {
  document.addEventListener('DOMContentLoaded', getAllEmployees);
  form.addEventListener('submit', addEmployee);
  function getAllEmployees() {
    request
      .get()
      .then(employees => {
        ui.addEmployeesToUi(employees);
      })
      .catch(err => console.log(err));
  }
  employeesList.addEventListener('click', updateOrDelete);
}
function addEmployee(e) {
  const employeeName = nameInput.value.trim();
  const departmentName = departmentInput.value.trim();
  const salaryName = salaryInput.value.trim();

  if (employeeName === '' || departmentName === '' || salaryName === '') {
    alert('please fill in all required inputs');
  } else {
    request
      .post({
        name: employeeName,
        department: departmentName,
        salary: Number(salaryName)
      })
      .then(employee => {
        ui.addEmployeeToUi(employee);
      })
      .catch(err => console.log(err));
  }
  ui.clearInputs();
  e.preventDefault();
}

// request
//   .get()
//   .then(employee => console.log(employee))
//   .catch(err => console.log(err));
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
//   .then(message => console.log(message))
//   .catch(err => console.log(err));
function updateOrDelete(e) {
  if (e.target.id === 'delete-employee') {
    deleteEmployee(e.target);
  } else if (e.target.id === 'update-employee') {
    updateEmployeeController(e.target.parentElement.parentElement);
  }
  e.preventDefault();
}
function deleteEmployee(eventTarget) {
  const id =
    eventTarget.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.previousElementSibling
      .textContent;
  console.log(id);
  request
    .delete(id)
    .then(message => {
      ui.deleteEmployeeFormUi(eventTarget.parentElement.parentElement);
    })
    .catch(err => console.log(err));
}
function updateEmployeeController(targetEmployee) {
  ui.toggleUpdateButton(targetEmployee);
}
