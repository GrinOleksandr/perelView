let slide = document.getElementsByClassName("slider-image-wrapper")[0];
slide.addEventListener("click", onClick);

function onClick(ev){
    let image = document.getElementsByClassName("slider-image");
    let bgLeft = document.getElementsByClassName("slider-background-left")[0];
    let bgRight = document.getElementsByClassName("slider-background-right")[0];
    ev.stopPropagation();


    if(ev.target === bgRight ||
        ev.target === bgLeft ||
        ev.target.classList.contains("slider-image")){
        let modal = document.getElementsByClassName('modal')[0];
        modal.style.display = "block";
    }

}

