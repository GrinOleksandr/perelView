document.addEventListener("DOMContentLoaded", function(event) {
    let parsedUrl = new URL(window.location.href);
    console.log(parsedUrl.searchParams.get("utm_source"));
});






//  http://localhost:63342/perelView/index.html?utm_source=Chicago%2BTribune&utm_medium=Newspaper%2BOctober&utm_campaign=Chicago%2BPPC%2BSale