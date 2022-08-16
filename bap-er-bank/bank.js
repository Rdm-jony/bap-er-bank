document.getElementById("logout-btn").addEventListener("click", function () {
    window.location.href = "index.html";
})
document.getElementById("deposite-btn").addEventListener("click", function () {
    const targetCurrentDeposite = document.getElementById("input-deposite");
    const currentDepositeValue = parseFloat(targetCurrentDeposite.value);
    targetCurrentDeposite.value = "";
    console.log()
    if (isNaN(currentDepositeValue)) {
        return alert("plz enter a value!");
    }
    const targetDepositeBox = document.getElementById("deposite-box");
    const targetBalanceBox = document.getElementById("balance-box");
    const preDepositeValue = parseFloat(targetDepositeBox.innerText);
    const pretBalanceBox = parseFloat(targetBalanceBox.innerText);

    const totalDeposite = preDepositeValue + currentDepositeValue;
    targetDepositeBox.innerText = totalDeposite;

    const totalBalance = pretBalanceBox + currentDepositeValue;
    targetBalanceBox.innerText = totalBalance;

})
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const targetCurrentWithdraw = document.getElementById("input-withdraw");
    const currentWithdrawValue = parseFloat(targetCurrentWithdraw.value);
    targetCurrentWithdraw.value = "";
    if (isNaN(currentWithdrawValue)) {
        return alert("plz enter a value!");
    }
    const targetWithdrawBox = document.getElementById("withdraw-box");
    const targetBalanceBox = document.getElementById("balance-box");
    const pretWithdrawBox = parseFloat(targetWithdrawBox.innerText);
    const pretBalanceBox = parseFloat(targetBalanceBox.innerText);
    if (currentWithdrawValue > pretBalanceBox) {
        return alert("insufficient balance!");
    }

    const totalWithdraw = pretWithdrawBox + currentWithdrawValue;
    targetWithdrawBox.innerText = totalWithdraw;

    const totalBalance = pretBalanceBox - currentWithdrawValue;
    targetBalanceBox.innerText = totalBalance;

})