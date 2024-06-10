// No se requiere ningún cambio en el JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    giftBox.addEventListener("click", function() {
        giftBox.classList.add("opened");
    });
});
