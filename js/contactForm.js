const Form =document.forms['contactForm'];
Form.addEventListener('submit', submit);

const FullNameInputField = document.getElementsByClassName("full-name")[0];
FullNameInputField.addEventListener('keyup', validateFullName);

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
       console.log(fullName);
       return true;
    }
    else alert.style.display = "flex";
    console.log(fullName);
    return false;
}
