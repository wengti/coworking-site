

function positionChatbox() {
    const rect = document.querySelector("main").getBoundingClientRect();
    const chatbox = document.querySelector(".chatbox-bg");
    const distanceFromLeft = rect.right - chatbox.getBoundingClientRect().width - 12;


    chatbox.style.left = distanceFromLeft + "px";
}

positionChatbox()
window.addEventListener("resize", positionChatbox);

