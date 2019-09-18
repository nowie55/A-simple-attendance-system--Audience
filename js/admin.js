 var users = [];
 var container ;
 
 function create()
 {
    var firstName = $("#firstName").val()
    var lastName = $("#lastName").val()
    var email = $("#email").val() 
    var department = $("#department").val()
        console.log("firstName, lastName, email, department ", firstName, lastName, email, department);
            users.push({id: users.length+1, firstName: firstName,  lastName: lastName, email: email, department: department})
        populateTable(users);
        
            
    }


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
        
        function populateTable(data)
        {
            document.getElementById('body').innerHTML = " ";
                for(let i = 0; i < users.length; i++){
                    container = document.createElement("tr");
                    container.innerHTML = `
                                               <td>${data[i]['id']}</td>
                                               <td>${data[i]['firstName']}</td>
                                               <td>${data[i]['lastName']}</td>
                                               <td>${data[i]['email']}</td>
                                               <td>${data[i]['department']}</td>
                                               <td>
                                               <button class="btn btn-sm btn-primary" data-toggle="modal"onClick="eno()" data-target="#employeeModal">Edit</button>
                                               <button class="btn btn-sm btn-danger " >Delete</button>
                                             </td> 
                                                </tr>`;
                    document.getElementById('body').appendChild(container);
                }

        }

        $("").onClick(function(){


        })
        function eno(){
            
alert('boomshakala')
        }