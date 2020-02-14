const employeeList = document.getElementById('employees');


//Fetch API


fetch('https://randomuser.me/api?results=12')
        .then(response => response.json())
        .then(data => generateHTML(data.results[0]))

//

//helper
function generateHTML(data, results) {
  data.results.forEach(employees => {
    let selectEmployee = document.createElement('div');
    selectEmployee.setAttribute("class", "employee");
    employeeList.appendChild(selectEmployee);
    selectEmployee.innerHTML = `
      <h2>${employees.name.first} ${employees.name.last}</h2>
      <p>${employees.email}</p>
      <p>${employees.location.city}</p>
    `;
  });
}
//
