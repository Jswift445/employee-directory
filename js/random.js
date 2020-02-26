

//fetch api
fetch('https://randomuser.me/api?results=12')
        .then(response => response.json())
        .then(data => generateHTML(data))
//


//Helper
const generateHTML = data => {
  let employees = data;
const employeeList = document.querySelector('#employees');
    data.results.forEach(employee => {
    const selectEmployee = document.createElement('div');
    selectEmployee.setAttribute("class", "employee");
    employeeList.appendChild(selectEmployee);
    selectEmployee.innerHTML += `
    <div class="card">
    <div class="card-img-container">
    <img src="${employee.picture.large}" alt="${employee.name.first}'s profile picture">
    </div>
    <h2 class= "name">${employee.name.first} ${employee.name.last}</h2>
    <p>${employee.email}</p>
    <p class= "city">${employee.location.city}</p>
    `;
});



  employeeList.querySelectorAll('.card').forEach((card, index) => {
    card.setAttribute('data-index', index);
  card.addEventListener('click', () => {
    modal(employees, card.getAttribute('data-index'));
   });
  });
};

$("#close").click(function () {
     $(".modal-container").hide();

 });

const modal = (data, employees) => {
const modalContainer = document.querySelector('.modal-container');
  const dob = new Date(Date.parse(data.results[employees].dob.date)).toLocaleDateString(navigator.language); // Formats date depending on users locale.
  modalContainer.innerHTML = `
    <div class="modal">
      <div class="modal-info-container">
        <img class="modal-img" src="${data.results[employees].picture.large}" alt="${data.results[employees].name.first}'s profile picture">
        <h3 id="name" class="modal-name-cap">${data.results[employees].name.first} ${data.results[employees].name.last}</h3>
        <p class="close">x</p>
        <p class="modal-email">${data.results[employees].email}</p>
        <p class="modal-city-cap">${data.results[employees].location.city}</p><hr>
        <p class="modal-phone">${data.results[employees].phone}</p>
        <p class="modal-location-cap">${data.results[employees].location.street.number} ${data.results[employees].location.street.name}, ${data.results[employees].location.state} ${data.results[employees].location.postcode}</p>
        <p class="modal-birthday">Birthday: ${dob}</p>
      </div>
    </div>
  `;
  modalContainer.style.display = 'block';
};
