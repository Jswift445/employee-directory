const selectEmployee = document.getElementById('employees');



//  $.ajax({
//   url: 'https://randomuser.me/api/?inc=gender,name,location,email,picture',
//   type: 'GET',
//   dataType: 'json',
//   success: function(res) {
//     $('selectEmployee').html(res);
//   }
// });

//Fetch API
fetch('https://randomuser.me/api/?gender=female')
  .then(response => response.json())
  .then(data => console.log(data.picture))
//

//helper
function generateImage(data) {
 const html = `
 <img src= '${data}' alt>
 `;
  selectEmployee.innerHTML = html;
}
//
