 var users = [];        //an array used to store all users          
 var container;          //define html contents for the table
 
   
//this is used to add a new employee to the system
$('#create-employee').click(function() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var department = $("#department").val();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users',
        data: {firstName: firstName, lastName: lastName, email: email, department: department, attendance: false},
        success: function(result) {
            alert('New Employee created');
            location.reload();
        }
    })
    
})
// this method is used to delete using the ID of the user
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


//method for checking each employee 's attendance
$('.employee-table').on('change', '.attendance-box', function() {
    var $this = $(this);
    var id = $this.parent().siblings('.row-id');
    var idValue = id.text();
    var state = $this.is(':checked'); //<p> I am good <p/>

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

// method for reading an employee

        $('#search-bar').keyup(event => { 
            
            let filteredResult = users.filter(user => {
                if(event.target.value===''){
                    populateTable(users)
                }
                  
                return user.id.includes(event.target.value)  //it filters out the user which matches the ID being searched 
            })
            populateTable(filteredResult);
        })
    
        function load() {                                   //this loads data from a server and 
                                                            //puts the returned data into the selected element
            $.getJSON( "db.json", function( json ) {
                users = json.users;
                container ;
                populateTable(users);
               }); 
        }
        //method for generating the body of the dynamic table
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