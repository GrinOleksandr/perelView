// ********************Handles the "Click to call" button click********************

const CallBtn = document.getElementById("call");
CallBtn.addEventListener("click", call);

function call() {
    alert("***CALL INITIATED***");
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: 'call',
        eventAction: "Call",
        eventLabel: "Call",
        number: this.querySelector("a").href
    })
}