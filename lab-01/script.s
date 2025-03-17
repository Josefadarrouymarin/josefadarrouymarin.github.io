function changeMessage() {
    let newText = document.getElementById("userInput").value;
    document.getElementById("message").textContent = newText || "This message will change.";
}
