let form = document.getElementById('contact-form');
form.addEventListener('submit', submit);

// let submitBtn = document.getElementsByClassName('send-details')[0];
// submitBtn.addEventListener('click', submit);

function submit(ev){
    console.log('submitted');
    ev.preventDefault();
    // let data = new FormData(form);

    console.log( document.forms['contactForm'].elements['fullName'].value);
}

// document.forms['form'].elements['fullName'].value