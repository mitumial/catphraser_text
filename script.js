let inputMessage = document.querySelector("#input-message");
let outputMessage = document.querySelector("#output-message");

document.querySelector("#btn-encrypt").addEventListener("click", function () {
    let textToEncrypt = inputMessage.value;
    if (isValidText(textToEncrypt)) {
        document.querySelector(".output-group__img").style.display = "none";
        let encryptedText = cipherText(textToEncrypt);
        outputMessage.innerHTML = encryptedText;
    }
});

function cipherText(message) {
    const cipher = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
    return message.replace(/[aeiou]/g, (match) => cipher[match]);
}

document.querySelector("#btn-decrypt").addEventListener("click", function () {
    let textToDecrypt = inputMessage.value;
    if (isValidText(textToDecrypt)) {
        document.querySelector(".output-group__img").style.display = "none";
        let decryptedMessage = uncipherText(textToDecrypt);
        outputMessage.innerHTML = decryptedMessage;
    }
});

function uncipherText(message) {
    const uncipher = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };
    return message.replace(
        /(ai|enter|imes|ober|ufat)/g,
        (match) => uncipher[match]
    );
}

function isValidText(message) {
    if (message.match(/[^a-z| ]/g) || message == null) {
        inputMessage.style.borderColor = "red";
        document.querySelector(".input-group__span").style.color = "red";
        return false;
    } else {
        inputMessage.style.borderColor = "#92e8e0";
        document.querySelector(".input-group__span").style.color = "#e2f1ef";
        return true;
    }
}

document
    .querySelector("#btn-copy")
    .addEventListener("click", () => copyToClipboard());

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(outputMessage.textContent);
    } catch (error) {
        console.error(error.message);
    }
    inputMessage.value = "";
}
