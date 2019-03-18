// ********************Handles the "Click to call" button click********************
const CallBtn = document.getElementById("call");
CallBtn.addEventListener("click", call);

function call() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: 'Clicked on Call Now',
        eventCategory: 'Leads',
        eventAction: 'Clicked_To_Call',
        eventLabel: CallBtn.querySelector("a").href.slice(4)
    })
}