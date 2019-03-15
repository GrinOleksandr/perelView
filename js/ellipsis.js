//********************Click on "Ellipsis" handler********************

const Comments = document.getElementsByClassName("comment-text");

truncateAll(Comments);

function truncateMe(target) {
    let text = target.innerText;
    if (text.length > 121) {
        let shortText = text.substr(0, 121);
        target.innerText = shortText;
        target.parentElement.parentElement.style.setProperty("--display", "inline");
        let ellipsis = target.parentElement.parentElement.getElementsByClassName("ellipsis")[0];
        ellipsis.style.display = "flex";
        ellipsis.classList.add("closed");
        ellipsis.parentElement.getElementsByClassName("comment-footer")[0].classList.add("comment-footer-expanded");
        ellipsis.addEventListener("click", function (ev) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: 'ellipsis',
                eventAction: "ellipsis",
                eventLabel: "ellipsis",
            });
            return toggleText(ev.target, text, shortText);
        });
    }
}

function truncateAll(targets) {
    for (let i = 0; i < targets.length; i++) {
        truncateMe(targets[i]);
    }
}

function toggleText(target, string, shortString) {
    let myTextBlock = target.parentElement.getElementsByClassName("comment-text")[0];
    if (target.classList.contains("closed")) {
        target.classList.remove("closed");
        target.parentElement.style.setProperty("--display", "none");
        target.parentElement.getElementsByClassName("comment-footer")[0].classList.add("comment-footer-expanded");
        target.parentElement.getElementsByClassName("comment-footer")[0].style.display = "none";
        myTextBlock.innerText = string;
    } else {
        myTextBlock.innerText = shortString;
        target.classList.add("closed");
        target.parentElement.getElementsByClassName("comment-footer")[0].classList.remove("comment-footer-expanded");
        target.parentElement.style.setProperty("--display", "inline");
        target.parentElement.getElementsByClassName("comment-footer")[0].style.display = "contents"
    }
}

