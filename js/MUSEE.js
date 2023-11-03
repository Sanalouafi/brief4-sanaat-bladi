<<<<<<< HEAD
let forml = document.querySelector(".form-email");
let form_input = document.querySelector("#email_input");
let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

console.log(form_input);

forml.addEventListener("submit", function (u) {
  u.preventDefault();
  console.log(form_input.value);
  if (form_input.value === "" || !form_input.value.match(emailRegex)) {
    form_input.nextElementSibling.style.display = "block";
  } else {
    form_input.nextElementSibling.style.display = "none";
  }
});
=======
let forml= document.querySelector(".form-email")
let form_input=document.querySelector("#email_input")
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


console.log(form_input)

forml.addEventListener("submit",function(u) {
   u.preventDefault()
   console.log(form_input.value)
   if (form_input.value ==="" || !form_input.value.match(emailRegex) ) {
    form_input.nextElementSibling.style.display="block"; 
   }
   else{
    form_input.nextElementSibling.style.display="none"; 
   }
})
>>>>>>> abdelquoddouss
