let inputMessage = document.querySelector("#input-message");
let outputMessage = document.querySelector("#output-message");

document.querySelector("#btn-encrypt").addEventListener("click", function () {
    document.querySelector(".output-group__img").style.display = "none";
    outputMessage.innerHTML = inputMessage.value;
});

document.querySelector("#btn-decrypt").addEventListener("click", function () {
    document.querySelector(".output-group__img").style.display = "none";
    outputMessage.innerHTML = inputMessage.value;
});
