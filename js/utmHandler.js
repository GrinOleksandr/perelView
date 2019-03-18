document.addEventListener("DOMContentLoaded", handleUTMSource);

const UTMsList = {
    google: '055-111 2222',
    facebook: '055-111 3333',
};

function handleUTMSource() {
    let parsedUrl = new URL(window.location.href);
    let utmSource = parsedUrl.searchParams.get("utm_source");
    let newPhoneNumberString = `tel: ${UTMsList[utmSource] || '055-111 4444'}`;
    document.getElementById("call").querySelector("a").href = newPhoneNumberString;
}



//  http://localhost:63342/perelView/index.html?utm_source=Chicago%2BTribune&utm_medium=Newspaper%2BOctober&utm_campaign=Chicago%2BPPC%2BSale