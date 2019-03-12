const Comments = document.getElementsByClassName("comment-text");


truncateAll(Comments);



function truncateMe(target){
    let text = target.innerText;
   if(text.length > 120){

       console.log(target.parentElement.parentElement.getElementsByClassName("ellipsis")[0]);
       let shortText = text.substr(0,120);
       target.innerText = shortText;
       target.parentElement.parentElement.style.setProperty("--display", "#flex");
       let ellipsis = target.parentElement.parentElement.getElementsByClassName("ellipsis")[0];
       ellipsis.style.display = "flex";
       ellipsis.classList.add("closed");

       ellipsis.addEventListener("click", function(ev){
           return toggleText(ev.target,text, shortText);
       });

   }
}

function toggleText(target, string, shortString) {
    console.log(target);
    let myTextBlock = target.parentElement.getElementsByClassName("comment-text")[0];
    if(target.classList.contains("closed")){
        target.classList.remove("closed");
        myTextBlock.innerText = string;
    }

    else {
        myTextBlock.innerText = shortString;
        target.classList.add("closed");
    }
}

function truncateAll(targets){
    for (let i =0; i<targets.length; i++){
        truncateMe(targets[i]);
    }
}