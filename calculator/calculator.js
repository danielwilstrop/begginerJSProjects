
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperand = previousOperandTextElement
    this.currentOperand = currentOperandTextElement
    this.clear()
}
 clear(){
     this.previousOperand = ''
     this.currentOperand = ''
     this.operation = undefined;

 } 

 delete(){

 }

 appendNumber(number){
   this.currentOperand = number
 }

 chooseOperation(operation){

 }

 compute() {

 }

 updateDisplay(){
   this.currentOperandTextElement.innerText = this.currentOperand
 }
}


const numberButtons = document.querySelectorAll('[data-number]')
const oprationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



const calculator = new Calculator(previousOperandTextelement,currentOperandTextelement)

number = numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})