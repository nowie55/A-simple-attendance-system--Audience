 var users = [];
 var container;
 
function create() {
    var firstName = $("#firstName").val()
    var lastName = $("#lastName").val()
    var email = $("#email").val() 
    var department = $("#department").val()
    console.log("firstName, lastName, email, department ", firstName, lastName, email, department);
    populateTable(users);    
}

$('.employee-table').on('click', '.delete', function() {
    var $this = $(this);
    var id = $this.parent().siblings('.row-id');
    var idValue = id.text();
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/users/' + idValue,
        success: function(result) {
            console.log(result);
        }
    })
    alert('Employee with id ' + idValue + ' deleted');
})




    function update(){
        var firstName = $("#firstName").val()
        var lastName = $("#lastName").val()
        var email = $("#email").val() 
        var department = $("#department").val()
            console.log("firstName, lastName, email, department ", firstName, lastName, email, department);
        }


        function load() {

            $.getJSON( "db.json", function( json ) {
                users = json.users;
                container ;
                populateTable(users);
               }); 
        }
        
        function populateTable(data) {
            document.getElementById('body').innerHTML = " ";
                for(let i = 0; i < users.length; i++){
                    container = document.createElement("tr");
                    container.innerHTML = `
                                               <td class="row-id">${data[i]['id']}</td>
                                               <td>${data[i]['firstName']}</td>
                                               <td>${data[i]['lastName']}</td>
                                               <td>${data[i]['email']}</td>
                                               <td>${data[i]['department']}</td>
                                               <td>
                                               <button class="btn btn-sm btn-primary" data-toggle="modal"onClick="eno()" data-target="#employeeModal">Edit</button>
                                               <button class="btn btn-sm btn-danger delete">Delete</button>
                                             </td> 
                                                </tr>`;
                    document.getElementById('body').appendChild(container);
                }

        }