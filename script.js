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
    return message.replace(/[aeiou]/g, (match) => cipher[match]);
}

document.querySelector("#btn-decrypt").addEventListener("click", function () {
    document.querySelector(".output-group__img").style.display = "none";
    let message = inputMessage.value;
    let decryptedMessage = uncipherText(message);
    outputMessage.innerHTML = decryptedMessage;
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

document
    .querySelector("#btn-copy")
    .addEventListener("click", () => copyToClipboard());

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(outputMessage.textContent);
    } catch (error) {
        console.error(error.message);
    }
}
