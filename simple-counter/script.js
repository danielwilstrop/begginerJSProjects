const number = document.querySelector('[data-number]')
let currentNum = parseFloat(number.innerHTML)
const addNumberButton = document.querySelector('[data-plus]')
const minusNumberButton = document.querySelector('[data-minus]')


addNumberButton.addEventListener('click',addNum)
minusNumberButton.addEventListener('click',minusNum)

function addNum() {
    currentNum = currentNum + 1;
    if (currentNum < 0 ){
        number.style.color = 'red'
        number.style.border = '3px solid red'
       
    } else {
        number.style.color = "green"
        number.style.border = '3px solid green'
    }

    number.innerHTML = currentNum.toString()
}

function minusNum() {
    currentNum = currentNum - 1;
    if (currentNum < 0 ){
        number.style.color = 'red'
        number.style.border = '3px solid red'
      
    } else {
        number.style.color = "green"
        number.style.border = '3px solid green'  
    }
    
    number.innerHTML = currentNum.toString()
}

