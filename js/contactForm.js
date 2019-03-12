//Validate FullName
const FullNameInputField = document.getElementById("full-name");
FullNameInputField.addEventListener('focusout', validateFullName);

function validateFullName() {
    let fullName = FullNameInputField.value;
    let sample = new RegExp("^[a-zA-Z\u0590-\u05fe '\"-]+$");
    let alert = document.getElementById("alert-full-name");
    if (fullName && fullName.match(sample)) {
        alert.style.display = "none";
        return true;
    } else {
        alert.style.display = "flex";
        return false;
    }
}

//Validate Email
const EmailInputField = document.getElementById("email");
EmailInputField.addEventListener('focusout', validateEmail);

function validateEmail() {
    let email = EmailInputField.value;
    let sample = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    let alert = document.getElementById("alert-email");
    if (email && email.match(sample)) {
        alert.style.display = "none";
        return true;
    } else {
        alert.style.display = "flex";
        return false;
    }
}

// Validate phone
const CountryCode = document.getElementById("country-code");
CountryCode.addEventListener('focusout', validateCountryCode);
CountryCode.addEventListener('keyup', validateCountryCode);

const Phone = document.getElementById("phone");
Phone.addEventListener('keyup', validateCountryCode);
Phone.addEventListener('focusout', validatePhone);

function validateCountryCode() {
    let code = CountryCode.value;
    let sample = /^(02|03|04|06|08|09|072|074|076|077|078|079|050|051|052|053|054|055|056|058|059)$/;
    let alert = document.getElementById("alert-phone");
    if (code && code.match(sample)) {
        Phone.disabled = false;
        return true;
    } else {
        Phone.value = "";
        Phone.disabled = true;
        return false;
    }
}

function validatePhone() {
    let phone = CountryCode.value + Phone.value;
    let sample = /^(02|03|04|06|08|09|072|074|076|077|078|079|050|051|052|053|054|055|056|058|059)((?:(?![1,0]{1}))\d{7})$/;
    let alert = document.getElementById("alert-phone");
    if (phone && phone.match(sample)) {
        alert.style.display = "none";
        return true;
    } else {
        alert.style.display = "flex";
        return false;
    }
}

//Validate Apartment-type input
const ApartmentType = document.getElementById("apartment-type");

function validateApartment() {
    // e.options[e.selectedIndex].value
    let alert = document.getElementById("alert-apartment-type");
    if (ApartmentType.selectedIndex && ApartmentType.value) {
        alert.style.display = "none";
        return true;
    } else {
        alert.style.display = "flex";
        return false;
    }
}

//Handle form submission
const Form =document.forms['contactForm'];
Form.addEventListener('submit', submit);

const AgreementCheckbox = document.getElementById("agreement");

function submit(ev) {
    ev.preventDefault();
    if (validateFullName && validatePhone && validateEmail && validateApartment()) {
        console.log("***********FORM SUBMITTED***********");
        console.log(`Full Name: ${Form.elements['fullName'].value}`);
        console.log(`Email: ${Form.elements['email'].value}`);
        console.log(`Phone: (${Form.elements['countryCode'].value})${Form.elements['phone'].value}`);
        console.log(`APARTMENT TYPE: ${Form.elements['apartmentType'].value}`);
        console.log(`SMS AGREEMENT: ${AgreementCheckbox.checked}`);
        console.log("************************************");
        document.getElementById("form-submitted").style.display = "flex";
    }
    else console.log("***********DATA VALIDATION FAILED!***********");
}