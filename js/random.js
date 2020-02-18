//fetch api
fetch('https://randomuser.me/api?results=12')
        .then(response => response.json())
        .then(data => generateHTML(data))
//

//API data being transfered to HTML
const employeeList = document.querySelector('#employees');
function generateHTML(data) {
  data.results.forEach(employees => {
    let selectEmployee = document.createElement('div');
    selectEmployee.setAttribute("class", "employee");
    employeeList.appendChild(selectEmployee);
    selectEmployee.innerHTML += `
    <div class="card">
    <div class="card-img-container">
      <img src="${employees.picture.large}" alt="${employees.name.first}'s profile picture">
    </div>
      <h2>${employees.name.first} ${employees.name.last}</h2>
      <p>${employees.email}</p>
      <p>${employees.location.city}</p>
    `;
  });


 };



 const modal = employees => {
   const modalContainer = document.querySelector('.modal-container');
   const dob = new Date(Date.parse(employee.dob.date)).toLocaleDateString(navigator.language); // Formats date depending on users locale.

   modalContainer.innerHTML = `
     <div class="modal">
       <div class="modal-info-container">
         <img src="${employee.picture.large}" alt="${employee.name.first}'s profile picture">
         <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
         <p class="modal-text">${employee.email}</p>
         <p class="modal-text cap">${employee.location.city}</p><hr>
         <p class="modal-text">${employee.phone}</p>
         <p class="modal-text cap">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.state} ${employee.location.postcode}</p>
         <p class="modal-text">Birthday: ${dob}</p>
       </div>
     </div>
   `;

   modalContainer.style.display = 'block';
 };
