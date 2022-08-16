document.getElementById("login-btn").addEventListener("click", function () {
    const TargetEmail = document.getElementById("email");
    const emailValue = TargetEmail.value;

    const targetPassword = document.getElementById("password");
    const passwordValue = targetPassword.value;

    if (emailValue == "") {
        return alert("you dont fill up the email field!");
    };
    if (passwordValue == "") {
        return alert("you dont fill up the password field!");
    }
    if (emailValue == "jonydascse@gmail.com" && passwordValue == "jonydas") {
        window.location.href = "bank.html";
        return;
    }
    else {
        return alert("incorrect!!");
    }
})
