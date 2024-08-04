let inputMessage = document.querySelector("#input-message");
let outputMessage = document.querySelector("#output-message");

document.querySelector("#btn-encrypt").addEventListener("click", function () {
    document.querySelector(".output-group__img").style.display = "none";
    let textToEncrypt = inputMessage.value;
    let encryptedText = cipherText(textToEncrypt);
    outputMessage.innerHTML = encryptedText;
});

function cipherText(message) {
    const cipher = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
    return message.replace(/[aeiou]/g, (n) => cipher[n]);
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
