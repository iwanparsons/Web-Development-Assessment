//variables for each field in the contact page
const firstName = document.getElementById("fname");
const surname = document.getElementById("sname");
const email = document.getElementById("email");
const message = document.getElementById("subject");

//outputs name, email and message to console
function submit() {
    console.log(`Name: ${firstName.value} ${surname.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Message: ${message.value}`);
}