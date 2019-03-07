let form = document.getElementById('contact-form');
form.addEventListener('submit', submit);

let submitBtn = document.getElementsByClassName('send-details')[0];
submitBtn.addEventListener('click', submit);

function submit(ev){
    ev.preventDefault();
    let data = new FormData(form);
    console.log(data.fullName);
}