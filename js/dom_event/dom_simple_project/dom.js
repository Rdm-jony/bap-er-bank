document.getElementById("update-btn").addEventListener("click", function () {
    const inputBox = document.getElementById("input-box");
    const inputText = inputBox.value;
    const defaultText = document.getElementById("default-text");
    defaultText.innerText = inputText;
    inputBox.value = "";
});