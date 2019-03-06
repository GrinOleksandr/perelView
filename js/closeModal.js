let closeBtn = document.getElementsByClassName("close-modal-image")[0];
closeBtn.addEventListener('click', close);

let overlay = document.getElementsByClassName("overlay")[0];
overlay.addEventListener('click', close);
function close (){
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
}
