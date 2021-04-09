// Global varibles for all input and outputs
const billAmount = document.querySelector('#bill-amount')
const guests = document.querySelector('#people')
const service = document.querySelector('#service')
const submit = document.getElementById('submit')
const output = document.getElementById('output')
const billOutput = document.getElementById('bill-amount-output')
const tipAmountOutput = document.getElementById('tip-amount')
const tipAmountPerPersonOutput = document.getElementById('tip-person-amount')


function calculateTip (service, guests) {
     let tipPercent = 0 
        if (service.value == "1") {
            tipPercent = 0.05
        } else if (service.value == "2") {
            tipPercent = 0.1
        } else
            tipPercent = 0.2

       var tipAmount = billAmount.value * tipPercent
       var tipPerGuest = tipAmount / guests.value

       return {tip: tipAmount, per: tipPerGuest}
;}


submit.addEventListener('click', (e)=>{
    e.preventDefault()
    calculateTip(service, guests)
    const decimalTipPerPerson = calculateTip(service, guests).per.toFixed(2)
    const decimalTip = calculateTip(service, guests).tip.toFixed(2)
    billOutput.innerHTML = `£${billAmount.value}` 
    tipAmountOutput.innerHTML = `£${decimalTip}` 
    tipAmountPerPersonOutput.innerHTML = `£${decimalTipPerPerson}`
    output.style.display = 'block'     
})