const Form =document.forms['contactForm'];
Form.addEventListener('submit', submit);

const FullNameInputField = document.getElementsByClassName("full-name")[0];
FullNameInputField.addEventListener('focusout', validateFullName);

const EmailInputField = document.getElementsByClassName("email")[0];
EmailInputField.addEventListener('focusout', validateEmail);

const AgreementCheckbox = document.getElementsByClassName("agreement")[0];

function submit(ev){
    ev.preventDefault();
    console.log("***********FORM SUBMITTED***********");
    console.log(`FULL NAME: ${Form.elements['fullName'].value}`);
    console.log(`Email: ${Form.elements['email'].value}`);
    console.log(`Phone: ${Form.elements['phone'].value}`);
    console.log(`APARTMENT TYPE: ${Form.elements['apartmentType'].value}`);
    console.log(`SMS AGREEMENT: ${AgreementCheckbox.checked}`);
    console.log("************************************");
}

function validateFullName(){
    let fullName = FullNameInputField.value;
    let sample = new RegExp("^[a-zA-Z\u0590-\u05fe '\"-]+$");
    let alert = document.getElementsByClassName("alert-full-name")[0];
    if(fullName && fullName.match(sample)){
       alert.style.display = "none";
       return true;
    }
    else {
        alert.style.display = "flex";
        return false;
    }
}

function validateEmail() {
    let email = EmailInputField.value;
    let sample = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    let alert = document.getElementsByClassName("alert-email")[0];
    if (email && email.match(sample)) {
        alert.style.display = "none";
        return true;
    }
    else {
        alert.style.display = "flex";
        return false;
    }
}

function validatePhone(){
    let email = EmailInputField.value;
    let sample = 'SAMPLE';
    let alert = document.getElementsByClassName("alert-email")[0];
    if(email && email.match(sample)){
        alert.style.display = "none";
        console.log(`${email}     OK`);
        return true;
    }
    else {
        alert.style.display = "flex";
        console.log(`${email}     NOT OK!`);
        return false;
    }
}

