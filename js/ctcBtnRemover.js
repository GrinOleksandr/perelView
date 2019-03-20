// ********************Handles the time and if needed hides CTC button********************
setInterval(checkIfClosed, 60000);

function checkIfClosed() {
    fetch('https://perelview.herokuapp.com/isclosed', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': "*"
        }
    })
        .then((response) =>
            response.json()
        ).then((data) => {
        if (data) {
            document.getElementById("call").style.display = "none";
        }
    })
        .catch((err) => {
            console.log(err);
        })
}