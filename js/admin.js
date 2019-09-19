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
$('#create-employee').click(function() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var department = $("#department").val();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users',
        data: {password: 'a', firstName: firstName, lastName: lastName, email: email, department: department, attendance: false},
        success: function(result) {
            alert('New Employee created');
            location.reload();
        }
    })
    
})

$('.employee-table').on('click', '.delete', function() {
    var $this = $(this);
    var id = $this.parent().siblings('.row-id');
    var idValue = id.text();
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/users/' + idValue,
        success: function(result) {
            console.log(result);
            location.reload();
        }
    })
    alert('Employee with id ' + idValue + ' deleted');
})

$('.employee-table').on('change', '.attendance-box', function() {
    var $this = $(this);
    var id = $this.parent().siblings('.row-id');
    var idValue = id.text();
    var state = $this.is(':checked');

    $.getJSON('http://localhost:3000/users/' + idValue, function(data) {
        data.attendance = state;
        $.ajax({
            method: 'PUT',
            url: 'http://localhost:3000/users/' + idValue,
            data: data,
            success: function(result) {
                alert('Attendance updated');
            }
        });
    });
});




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
                                               <td><input type="checkbox" class="attendance-box" ${data[i]['attendance'] == 'true'?'checked':''} /></td>
                                               <td>
                                               <button class="btn btn-sm btn-danger delete">Delete</button>
                                             </td> 
                                                </tr>`;
                    document.getElementById('body').appendChild(container);
                }

        }