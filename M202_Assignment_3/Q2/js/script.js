/*
document.getElementById(btn).onclick({

});
*/


function validateForm(){
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let mobile = document.forms["myForm"]["mobile"].value;
    let gender = document.forms["myForm"]["gender"].value;
    let dob = document.forms["myForm"]["dob"].value;
    let address = document.forms["myForm"]["address"].value;
    let city = document.forms["myForm"]["city"].value;
    let areapin = document.forms["myForm"]["areapin"].value;
    let state = document.forms["myForm"]["state"].value;
    let qual = document.forms["myForm"]["qualification"].value;
   // let spec = document.forms["myForm"]["specification"].value;
    let pwd = document.forms["myForm"]["pwd"].value;
    if (fname == ""){
        alert("First Name must be filled out");
        document.forms["myForm"]["fname"].style.border = "red solid 2px";
       // document.forms["myForm"]["fname"].focus();
       // document.getElementById(alert1).textContent="First Name must be filled out..";
       // document.getElementById(alert).style.visible = true;
        return false;
    }
    else{
        if(!allLetter(fname)){
            alert("First Name must be Letters Only");
            document.forms["myForm"]["fname"].style.border = "red solid 2px";
            return false;
        }
        else{
            document.forms["myForm"]["fname"].style.border = "green solid 2px";
        }
    }

    if (lname == ""){
        alert("Last Name must be filled out");
        document.forms["myForm"]["lname"].style.border = "red solid 2px";
        return false;
    }
    else{
        if(!allLetter(lname)){
            alert("Last Name must be Letters Only");
            document.forms["myForm"]["lname"].style.border = "red solid 2px";
        return false;
        }
        
        else{
            document.forms["myForm"]["lname"].style.border = "green solid 2px";
        }
    }

    if (email == ""){
        alert("Email must be filled out");
        document.forms["myForm"]["email"].style.border = "red solid 2px";
        return false;
    }
    else{
        document.forms["myForm"]["email"].style.border = "green solid 2px";
    }
    
    if (mobile == ""){
        alert("Mobile must be filled");
        document.forms["myForm"]["mobile"].style.border = "red solid 2px";
        return false;
    }
    else{
        if(!allnumeric(mobile)){
            alert("Mobile must be Digit");
            document.forms["myForm"]["mobile"].style.border = "red solid 2px";
            return false;
        }
        else if(!validatePhoneNumber(mobile)){
            alert("Mobile must be 10 digit only ");
            document.forms["myForm"]["mobile"].style.border = "red solid 2px";
            return false;
        }
        else{
            document.forms["myForm"]["mobile"].style.border = "green solid 2px";
        }
    }
/*
    if (gender == ""){
        alert("Gender must be filled out");
        document.forms["myForm"]["gender"].style.border = "red solid 2px";
        return false;
    }
    else{
        document.forms["myForm"]["gender"].style.border = "green solid 2px";
    }
*/
    if (dob == ""){
        alert("Date Of Birth must be filled out");
        document.forms["myForm"]["dob"].style.border = "red solid 2px";
        return false;
    }
    else{
        document.forms["myForm"]["dob"].style.border = "green solid 2px";
    }

    if (address == ""){
        alert("Address must be filled");
        document.forms["myForm"]["address"].style.border = "red solid 2px";
        return false;
    }
    else{
        document.forms["myForm"]["address"].style.border = "green solid 2px";
    }
    
    if (city == ""){
        alert("City must be filled");
        document.forms["myForm"]["city"].style.border = "red solid 2px";
        return false;
    }
    else{
        if(!allLetter(city)){
            alert("City Name must be Letters Only");
            document.forms["myForm"]["city"].style.border = "red solid 2px";
        return false;
        }
        
        else{
            document.forms["myForm"]["city"].style.border = "green solid 2px";
        }
    }
    
    if (areapin == ""){
        alert("AreaPIN must be filled");
        document.forms["myForm"]["areapin"].style.border = "red solid 2px";
        return false;
    }
    else{
        if(!allnumeric(areapin)){
            alert("AreaPIN must be Digit");
            document.forms["myForm"]["areapin"].style.border = "red solid 2px";
            return false;
        }
        else{
            document.forms["myForm"]["areapin"].style.border = "green solid 2px";
        }
    }
    
    if (state == ""){
        alert("State must be filled");
        document.forms["myForm"]["state"].style.border = "red solid 2px";
        return false;
    }
    else{
        if(!allLetter(state)){
            alert("State Name must be Letters Only");
            document.forms["myForm"]["state"].style.border = "red solid 2px";
        return false;
        }
        
        else{
            document.forms["myForm"]["state"].style.border = "green solid 2px";
        }
        
    }
    
    if (qual == 0){
        alert("Qualification must be Selected");
        document.forms["myForm"]["email"].style.border = "red solid 2px";
        return false;
    }
    else{
        document.forms["myForm"]["email"].style.border = "green solid 2px";
    }
    
    if (pwd == ""){
        alert("Password must be Selected");
        document.forms["myForm"]["pwd"].style.border = "red solid 2px";
        return false;
    }
    else{
        if(!validatePassword(pwd)){
            alert("Password Length must be Minimum 6");
            document.forms["myForm"]["pwd"].style.border = "red solid 2px";
            return false;
        }
        else{
            document.forms["myForm"]["pwd"].style.border = "green solid 2px";
        }
    }
    
      
    
}

function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{10})$/;

    return re.test(input_str);
}

function allLetter(input_str){ 
    var letters = /^[A-Za-z]+$/;
    if(input_str.match(letters))
    {
        return true;
    }   
    else
    {
        return false;
    }
}

function allnumeric(input_str)
{ 
    var numbers = /^[0-9]+$/;
    if(input_str.match(numbers))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function validatePassword(input_str) {
    var size = input_str.length;
    if(size > 6){
        return true;
    }
    else{
        return false;
    }
}