// var admin = [];
// var container ;

// function create()
// {
//    var firstName = $("#firstName").val()
//    var lastName = $("#lastName").val()
//    var email = $("#email").val() 
//    var department = $("#department").val()
//        console.log("firstName, lastName, email, department ", firstName, lastName, email, department);
//            admin.push({id: admin.length+1, firstName: firstName,  lastName: lastName, email: email, department: department})
//            console.log(admin);
//    }


$(document).ready(function() {
    $.get("http://localhost:3000/admin", function(data, status) {

        $('.login').click(function() {
            let a = $("#email").val();
            for (i = 0; i < data.length; i++) {
                    if (a === data[i].email) {
                        window.location.assign("/admin.html");
                    }
            }
        });

        $('.signup').click(function() {
            // let id= document.querySelector("#id").value;
            let firstName= $("#firstName").val();
            let lastName= $("#lastName").val();
            let email= $("#email1").val();
            let department= $("#department").val();
            let password= $("#password1").val();

            $.post("http://localhost:3000/admin", { firstName, lastName, email, department, password}, function(data, status) {
                window.location.assign("/index.html");
                alert("Signup successful, please login");
            });
        });
    })
})
