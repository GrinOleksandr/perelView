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



