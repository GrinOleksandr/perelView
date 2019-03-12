const Comments = document.getElementsByClassName("comment");


truncateAll(Comments);



function truncateMe(target){
   if(target.innerText.length > 120){
       console.log(target, " BIGGER!!!")
   }
}


function truncateAll(targets){
    for (let i =0; i<targets.length; i++){
        truncateMe(targets[i]);
    }
}