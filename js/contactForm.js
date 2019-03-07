const Form =document.forms['contactForm'];
Form.addEventListener('submit', submit);

const FullNameInputField = document.getElementsByClassName("full-name")[0];
FullNameInputField.addEventListener('keyup', validateFullName);

let agreementCheckbox = document.getElementsByClassName("agreement")[0];

// let submitBtn = document.getElementsByClassName('send-details')[0];
// submitBtn.addEventListener('click', submit);

function submit(ev){
    console.log('submitted');
    ev.preventDefault();
    console.log("***********FORM SUBMITTED***********");
    console.log(`FULL NAME: ${Form.elements['fullName'].value}`);
    console.log(`Email: ${Form.elements['email'].value}`);
    console.log(`Phone: ${Form.elements['phone'].value}`);
    console.log(`APARTMENT TYPE: ${Form.elements['apartmentType'].value}`);
    console.log(`SMS AGREEMENT: ${agreementCheckbox.checked}`);
    console.log("************************************");

}

function validateFullName(){
    console.log("***FullNAME VALIDATING");
    let fullName = FullNameInputField.value;
    let sample = new RegExp("^[a-zA-Z\u0590-\u05fe '\"-]+$");
    if(fullName.match(sample)){
        console.log("OK")
    }

    else console.log("NOT OK");
}
