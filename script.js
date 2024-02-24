function foo() {
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

    // Displaying input values in spans
    var firstNameSpan = document.createElement("span");
    firstNameSpan.innerHTML = `First Name: ${first}`;
    document.body.append(firstNameSpan);

    var middleNameSpan = document.createElement("span");
    middleNameSpan.innerHTML = `Middle Name: ${second}`;
    document.body.append(middleNameSpan);

    var lastNameSpan = document.createElement("span");
    lastNameSpan.innerHTML = `Last Name: ${last}`;
    document.body.append(lastNameSpan);

    var emailSpan = document.createElement("span");
    emailSpan.innerHTML = `Email: ${email}`;
    document.body.append(emailSpan);
}

function labelcreate(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

function breakcreate() {
    return document.createElement("br");
}

function inputcreate(tagname, attr1name, attr1value, attr2name, attr2value) {
    var element = document.createElement(tagname);
    element.setAttribute(attr1name, attr1value);
    element.setAttribute(attr2name, attr2value);
    return element;
}

// Creating input fields for first name
var firstnamelabel = labelcreate("label", "for", "firstname", "First Name:");
var firstnamebreak = breakcreate();
var firstnameinput = inputcreate("input", "type", "text", "id", "firstname");

// Creating input fields for middle name
var middlenamelabel = labelcreate("label", "for", "middlename", "Middle Name:");
var middlenamebreak = breakcreate();
var middlenameinput = inputcreate("input", "type", "text", "id", "middlename");

// Creating input fields for last name
var lastnamelabel = labelcreate("label", "for", "lastname", "Last Name:");
var lastnamebreak = breakcreate();
var lastnameinput = inputcreate("input", "type", "text", "id", "lastname");

var emaillabel = labelcreate("label", "for", "email", "Email");
var emailbreak = breakcreate();
var emailinput = inputcreate("input", "type", "email", "id", "email");

// Creating input fields for password
var passwordlabel = labelcreate("label", "for", "password", "Password:");
var passwordbreak = breakcreate();
var passwordinput = inputcreate("input", "type", "password", "id", "password");

//Submit
var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.setAttribute("type", "button"); // Changed type from "submit" to "button"
submitButton.addEventListener("click", foo);

// Appending all elements to the body
var form = document.createElement("form");
form.append(firstnamelabel, firstnamebreak, firstnameinput);
form.append(middlenamelabel, middlenamebreak, middlenameinput);
form.append(lastnamelabel, lastnamebreak, lastnameinput);
form.append(emaillabel, emailbreak, emailinput);
form.append(passwordlabel, passwordbreak, passwordinput);
form.append(submitButton);
document.body.append(form);
