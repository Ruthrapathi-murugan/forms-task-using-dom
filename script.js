
function foo(){
    var first = document.getElementById("firstname").value;
    console.log(`Firstname:${first}`);

    var second = document.getElementById("middlename").value;
    console.log(`Middlename:${second}`);
    var last = document.getElementById("lastname").value;
    console.log(`Lastname: ${last}`);

    var email = document.getElementById("email").value;
    console.log(`Email: ${email}`);

    var password = document.getElementById("password").value;
    console.log(`Password: ${password}`);
}


function labelcreate(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

function breakcreate() {
    var ele = document.createElement("br");
    return ele;
}

function inputcreate(tagname, attr1name, attr1value, attr2name, attr2value) {
    var element = document.createElement(tagname);
    element.setAttribute(attr1name, attr1value);
    element.setAttribute(attr2name, attr2value);
    return element;
}

// Creating input fields for first name
var firstnamelabel = labelcreate("label", "for", "firstname", "First Name:");
var firstnamebreak = breakcreate("br");
var firstnameinput = inputcreate("input", "type", "text", "id", "firstname");

// Creating input fields for middle name
var middlenamelabel = labelcreate("label", "for", "middlename", "Middle Name:");
var middlenamebreak = breakcreate("br");
var middlenameinput = inputcreate("input", "type", "text", "id", "middlename");

// Creating input fields for last name
var lastnamelabel = labelcreate("label", "for", "lastname", "Last Name:");
var lastnamebreak = breakcreate("br");
var lastnameinput = inputcreate("input", "type", "text", "id", "lastname");


var emaillabel = labelcreate("label", "for", "Email", "Email");
var emailbreak = breakcreate("br");
var emailinput = inputcreate("input", "type", "mail", "id", "email");

// Creating input fields for password
var passwordlabel = labelcreate("label", "for", "password", "Password:");
var passwordbreak = breakcreate("br");
var passwordinput = inputcreate("input", "type", "password", "id", "password");

//Submit
var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.setAttribute("type", "submit");
submitButton.addEventListener("click", foo);


// Appending all elements to the body
document.body.append(firstnamelabel, firstnamebreak, firstnameinput);
document.body.append(middlenamelabel, middlenamebreak, middlenameinput);
document.body.append(lastnamelabel, lastnamebreak, lastnameinput);
document.body.append(emaillabel, emailbreak, emailinput);
document.body.append(passwordlabel, passwordbreak, passwordinput);
document.body.append(submitButton);

