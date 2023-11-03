const linksign = document.getElementById('link-sign');
const loginsign = document.getElementById('link-login');
const loginForm = document.querySelector('.login-form');
const signForm = document.querySelector('.sign-form');

let isForm1Visible = false;
let isForm2Visible = false;

linksign.addEventListener('click', function(event){
    event.preventDefault();
      loginsign.classList.remove('activelink');
      linksign.classList.add('activelink');
      
      loginForm.classList.remove('activeForm');
      loginForm.classList.add('desactiveForm');
      signForm.classList.remove('desactiveForm');
      signForm.classList.add('activeForm');

      
    // signForm.classList.remove('activeForm');
    // signForm.classList.add('desactiveForm');

    // loginForm.classList.remove('desactiveForm');
    // loginForm.classList.add('activeForm');

    //   signForm.style.display = "none";
    //   loginForm.style.display = "block";
    })

loginsign.addEventListener('click', function(event){
    event.preventDefault();
    linksign.classList.remove('activelink');
    loginsign.classList.add('activelink');

    signForm.classList.remove('activeForm');
    signForm.classList.add('desactiveForm');

    loginForm.classList.remove('desactiveForm');
    loginForm.classList.add('activeForm');
    // loginForm.style.display = "none";
    // signForm.style.display = "flex";
    

})