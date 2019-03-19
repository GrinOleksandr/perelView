// ********************Handles the time and if needed hides CTC button********************
document.addEventListener("DOMContentLoaded", checkTime);

function checkTime() {

    fetch('http://perelview.herokuapp.com/time', {
        method: 'GET',
        headers:{
            'Access-Control-Allow-Origin': "*"
        }
    })
        .then((response) =>
            response.json()
        ).then((data) =>{

        console.log(data);
    })
        .catch((err) => {
            console.log(err);
        })
}