let inputMessage = document.querySelector("#input-message");
let outputMessage = document.querySelector("#output-message");

document.querySelector("#btn-encrypt").addEventListener("click", function () {
    document.querySelector(".output-group__img").style.display = "none";
    let textToEncrypt = inputMessage.value;
    let encryptedText = "";
    textToEncrypt.split("").forEach((letter) => {
        encryptedText += cipherLetter(letter);
    });

    outputMessage.innerHTML = encryptedText;
});

function cipherLetter(letter) {
    switch (letter) {
        case "a":
            return "ai";
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return letter;
    }
}

document.querySelector("#btn-decrypt").addEventListener("click", function () {
    document.querySelector(".output-group__img").style.display = "none";
    outputMessage.innerHTML = inputMessage.value;
});
