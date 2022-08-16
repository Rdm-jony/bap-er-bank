
document.getElementById("login-btn").addEventListener("click", function () {
    const TargetEmail = document.getElementById("email");
    const emailValue = TargetEmail.value;

    const targetPassword = document.getElementById("password");
    const passwordValue = targetPassword.value;

    const targetLogIn = document.getElementById("error-msg");

    if (emailValue == "") {
        const p = document.createElement("p");
        p.innerText = "You dont fill up the email field!";
        p.style.color = "red";
        p.style.fontSize = ".8rem"
        p.style.marginBottom = "5px"
        targetLogIn.appendChild(p);
        p.previousSibling.remove();
        return;
    };

    if (passwordValue == "") {
        const p = document.createElement("p");
        p.innerText = "You dont fill up the password field!";
        p.style.color = "red";
        p.style.fontSize = ".8rem"
        p.style.marginBottom = "5px"
        targetLogIn.appendChild(p);
        p.previousSibling.remove();
        return;
    }
    if (emailValue == "jonydascse@gmail.com" && passwordValue == "jonydas") {
        window.location.href = "bank.html";
        return;
    }
    else {
        const p = document.createElement("p");
        p.innerText = "Incorrect Pasword or email!";
        p.style.color = "red";
        p.style.fontSize = ".8rem"
        p.style.marginBottom = "5px"
        targetLogIn.appendChild(p);
        p.previousSibling.remove();
        return;
    }
})
