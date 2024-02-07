function validate() {

    var firstname = document.forms["signupform"]["firstname"].value;
    var lastname = document.forms["signupform"]["lastname"].value;
 
    const nameRegex = new RegExp('^[a-zA-Z]+$');
    var password = document.getElementById("passwordInitial").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    
    console.log("First Name: " + firstname);
    console.log("First Name Passes: " + nameRegex.test(firstname));
    console.log("Last Name: " + lastname);
    console.log("Last Name Passes: " + nameRegex.test(lastname));
    
    if (nameRegex.test(firstname) == false) {
        document.getElementById("firstname").style.border = "2px solid red";
    }
    else {
        document.getElementById("firstname").style.border = "2px solid green";
    }


    if (password != "" && password === passwordConfirm){
        console.log("Password Passes");       
    }
    else {
        console.log("Password fails");      
    }
}