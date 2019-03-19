// ********************Handles the time and if needed hides CTC button********************
let regularCheckIfIsClosed = setInterval(checkIfClosed, 600000);

function checkIfClosed() {
    fetch('http://perelview.herokuapp.com/isclosed', {
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