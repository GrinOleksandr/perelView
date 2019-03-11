//Validate FullName
const FullNameInputField = document.getElementsByClassName("full-name")[0];
FullNameInputField.addEventListener('focusout', validateFullName);

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

//Validate Email
const EmailInputField = document.getElementsByClassName("email")[0];
EmailInputField.addEventListener('focusout', validateEmail);

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

// Validate phone
const CountryCode = document.getElementsByClassName("country-code")[0];
CountryCode.addEventListener('keyup', validateCountryCode);

const Phone = document.getElementsByClassName("phone")[0];
Phone.addEventListener('keyup', validatePhone);

function validateCountryCode(){
    let code = CountryCode.value;
    let sample = /^(02|03|04|06|08|09|072|074|076|077|078|079|050|051|052|053|054|055|056|058|059)$/;
    let alert = document.getElementsByClassName("alert-phone")[0];
    if(code && code.match(sample)){
        console.log(code.match(sample[1]));
        alert.style.display = "none";
        Phone.disabled = false;
        console.log(`${code}     OK`);
        return true;
    }
    else {
        alert.style.display = "flex";
        console.log(`${code}     NOT OK!`);
        return false;
    }
}

function validatePhone(){
    let phone = CountryCode.value + Phone.value;
    let sample = /^(02|03|04|06|08|09|072|074|076|077|078|079|050|051|052|053|054|055|056|058|059)((?:(?![1,0]{1}))\d{7})$/;
    let alert = document.getElementsByClassName("alert-phone")[0];
    if(phone && phone.match(sample)){
        alert.style.display = "none";
        console.log(`${phone}     OK`);
        return true;
    }
    else {
        alert.style.display = "flex";
        console.log(`${phone}     NOT OK!`);
        return false;
    }
}






//Handle form submission
const Form =document.forms['contactForm'];
Form.addEventListener('submit', submit);

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