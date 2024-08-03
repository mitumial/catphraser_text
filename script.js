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
    let message = inputMessage.value;
    let decryptedMessage = uncipherText(message);
    outputMessage.innerHTML = decryptedMessage;
});

function uncipherText(message) {
    message = message.replaceAll("ai", "a");
    message = message.replaceAll("enter", "e");
    message = message.replaceAll("imes", "i");
    message = message.replaceAll("ober", "o");
    message = message.replaceAll("ufat", "u");
    return message;
}
