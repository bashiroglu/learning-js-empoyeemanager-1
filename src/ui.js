export class UI {
  constructor(url) {
    this.employeesList = document.getElementById('employees');
    this.updateEmployeeButton = document.getElementById('update');
    this.nameInput = document.getElementById('name');
    this.departmentInput = document.getElementById('department');
    this.salaryInput = document.getElementById('salary');
  }
  throwAlert(type, message) {
    const alertDiv = document.createElement('div');

    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    //     <div class="alert alert-danger" role="alert">
    //   This is a danger alert—check it out!
    // </div>
    this.cardBody.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 900);
  }
  addEmployeesToUi(employees) {
    let result = `
      
      `;
    // <tr>
    //   <td>Mustafa Murat Coşkun</td>
    //   <td>Bilişim</td>
    //   <td>4000</td>
    //   <td>1</td>
    //   <td>
    //     <a href="#" id="update-employee" class="btn btn-danger">
    //       Güncelle
    //     </a>
    //   </td>
    //   <td>
    //     {" "}
    //     <a href="#" id="delete-employee" class="btn btn-danger">
    //       Sil
    //     </a>
    //   </td>
    // </tr>;
    employees.forEach(employee => {
      result += `
      <tr>
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>
        <a href="#" id="update-employee" class="btn btn-danger">
          Güncelle
        </a>
      </td>
      <td>
        <a href="#" id="delete-employee" class="btn btn-danger">
          Sil
        </a>
      </td>
    </tr>
        `;
    });
    this.employeesList.innerHTML = result;
  }
  clearInputs() {
    // console.log(this.nameInput.value)
    // console.log(this.departmentInput.value)
    // console.log(this.sallaryInput.value)
    this.nameInput.value = '';
    this.departmentInput.value = '';
    this.salaryInput.value = '';
  }
  deleteEmployeeFormUi(element) {
    element.remove();
  }
  addEmployeeToUi(employee) {
    this.employeesList.innerHTML += `
    <tr>
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>
        <a href="#" id="update-employee" class="btn btn-danger">
          Update
        </a>
      </td>
      <td>
        <a href="#" id="delete-employee" class="btn btn-danger">
        Delete
        </a>
      </td>
    </tr>
    `;
  }
}
