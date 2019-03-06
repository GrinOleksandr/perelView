let closeBtn = document.getElementsByClassName("close-modal-image")[0];
closeBtn.add('click', close);

function close (){
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
    console.log('closed');
}
