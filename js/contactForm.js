let form =document.forms['contactForm'];
form.addEventListener('submit', submit);

let agreementCheckbox = document.getElementsByClassName("agreement")[0];

// let submitBtn = document.getElementsByClassName('send-details')[0];
// submitBtn.addEventListener('click', submit);

function submit(ev){
    console.log('submitted');
    ev.preventDefault();
    console.log("***********FORM SUBMITTED***********");
    console.log(`FULL NAME: ${form.elements['fullName'].value}`);
    console.log(`Email: ${form.elements['email'].value}`);
    console.log(`Phone: ${form.elements['phone'].value}`);
    console.log(`APARTMENT TYPE: ${form.elements['apartmentType'].value}`);
    console.log(`SMS AGREEMENT: ${agreementCheckbox.checked}`);
    console.log("************************************");

    console.log(form.elements);
}

// document.forms['form'].elements['fullName'].value