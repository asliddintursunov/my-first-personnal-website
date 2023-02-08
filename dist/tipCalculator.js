let moneyInput = document.getElementById('moneyInput');
let p_10Btn = document.getElementById('p-10');
let p_20Btn = document.getElementById('p-20');
let p_30Btn = document.getElementById('p-30');

let customTip = document.getElementById('custom-tip');
let okButton = document.getElementById('ok');

let totalBill = document.getElementById('total-bill');
let tipPercentage = document.getElementById('tip');
let totalSum = document.getElementById('total-sum');


const moneyInputFunction = () =>{               // Function for the bill input
    totalBill.innerText = `${Number(moneyInput.value)}$`; 
}
moneyInput.onkeyup = () =>  moneyInputFunction(); // Here totalbill is demostrated

const tipPercentage_10 = () =>{                 // Function for first 10% button
    tipPercentage.innerText = `${p_10Btn.value}%`; 
    const allMoneySum_1 = (Number(moneyInput.value) + (Number(moneyInput.value) * Number(p_10Btn.value)) / 100).toFixed(2);
    totalSum.innerText = `${allMoneySum_1}$`;
}
const tipPercentage_20 = () =>{                // Function for second 20% button
    tipPercentage.innerText = `${p_20Btn.value}%`; 
    const allMoneySum_2 = (Number(moneyInput.value) + (Number(moneyInput.value) * Number(p_20Btn.value)) / 100).toFixed(2);
    totalSum.innerText = `${allMoneySum_2}$`;
}
const tipPercentage_30 = () =>{                 // Function for third 30% button
    tipPercentage.innerText = `${p_30Btn.value}%`; 
    const allMoneySum_3 = (Number(moneyInput.value) + (Number(moneyInput.value) * Number(p_30Btn.value)) / 100).toFixed(2);
    totalSum.innerText = `${allMoneySum_3}$`;
}

p_10Btn.onclick = () => tipPercentage_10() // onclick for the first 10% button
p_20Btn.onclick = () => tipPercentage_20() // onclick for the second 20% button
p_30Btn.onclick = () => tipPercentage_30() // onclick for the third 30% button

const customTipFunction = () => { // Function for the User Input tip
    customTip.onkeyup = () => tipPercentage.innerText = '0.0%';
    tipPercentage.innerText = `${Number(customTip.value)}%`;
    const allMoney_UserInput = (Number(moneyInput.value) + (Number(moneyInput.value) * Number(customTip.value)) / 100).toFixed(2);
    totalSum.innerText = `${allMoney_UserInput}$`
}
okButton.onclick = () => customTipFunction(); // onclick for the OK (Custip Tip) button



