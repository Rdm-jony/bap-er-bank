const submitBtn = document.getElementById("submit-btn").addEventListener("click", function () {


    const email = document.getElementById("exampleInputEmail1");
    const inputText = email.value;
    const bold = document.createElement("b");
    bold.innerText = inputText;
    email.value = "";

    // password
    const pass = document.getElementById("exampleInputPassword1");
    const passText = pass.value;
    const italic = document.createElement("i");
    italic.innerText = passText;
    italic.style.display = "block";
    pass.value = "";

    //target
    const checkBox = document.getElementById("exampleCheck1").checked;
    const target = document.getElementById("email_info");
    function check() {
        if (checkBox == true) {
            target.appendChild(bold);
            target.appendChild(italic);
        }
        else {
            target.innerHTML = "invalid!<br>";
        }
    }
    check();
});
