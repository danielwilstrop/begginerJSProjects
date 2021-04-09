const cell = document.querySelectorAll('[data-cell');                   
const board = document.getElementById('board');                                     // element selector varibales
const winningText = document.querySelector('[data-winning-message-text]')
const winningMessage = document.getElementById('winningMessage')
const restart = document.getElementById('restartButton')
const X_SCOREBOX = document.querySelector('[data-x-score')
const O_SCOREBOX = document.querySelector('[data-o-score')
const clearButton = document.getElementById('boardclear')
const resetButton = document.getElementById('resetGame')
const X_CLASS = 'x';                                                                // two players X / O
const O_CLASS = 'circle';
const WINS = [                                                                       // winning combinations on board
    [0, 1, 2],
    [3 ,4, 5],       
    [6 ,7, 8],
    [0, 3, 6],
    [1 , 4, 7],
    [2, 5 , 8],
    [0, 4, 8],
    [2 , 4 ,6]
];
let circleTurn  
let x_score = 0
let o_score = 0                                                                 

O_SCOREBOX.innerText = 0
X_SCOREBOX.innerText = 0


const startGame = () => {                                                          // initialises game
    cell.forEach(cell =>{ 
        cell.classList.remove(X_CLASS)                                              // three lines to remove all classes and the end game overlay
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})                   // handle click declared later, adds click events to all the 9 cells
    });
    circleTurn = false;
    setBoardHoverClass();
    winningMessage.classList.remove('show')
}

const handleClick = (e) => {                                                        // functions onClick each cell
   const cell = e.target
   const currentClass = circleTurn ? O_CLASS : X_CLASS                              // check whos turn it is
    placeMark (cell, currentClass) 
    if (checkWin(currentClass)) {
        endGame(false)
    }  else if (isDraw()){
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
};

const endGame = (draw) => {                                                             // endGame   
    if (draw) {
        winningText.innerText = 'Draw!'
    } else if (circleTurn){
            o_score = o_score + 1
            winningText.innerText = "O's Win!"
            O_SCOREBOX.innerText = o_score
    } else {
        x_score = x_score + 1
        winningText.innerText = "X's Win!"
        X_SCOREBOX.innerText = x_score
    }
    winningMessage.classList.add('show')
};

const placeMark = (cell, currentClass) => {                                              // adds the currentClass (O or X to the cells)
  cell.classList.add(currentClass)
};

const swapTurns = () => {                                                               // swaps class to opposite class with every click (simpler than i thought)
    circleTurn = ! circleTurn
  };

const isDraw = () => {                                                                      //checks if every cell has a class in it and returns boolean
        return [...cell].every(cell => {
            return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)        
        })
};
  

const setBoardHoverClass = () => {
   board.classList.remove(X_CLASS);                                           // removes all classs from board and decides which hover to access 
   board.classList.remove(O_CLASS);
    if (circleTurn) {
        board.classList.add(O_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
};

const checkWin = (currentClass) => {                                           //need to research this more, copied and dont fully understand the .some and .every  **
  return WINS.some(combination => {                                             // .some checks function passed on every array element
      return combination.every(index => {                                       // .every checks if any of its function returns true for its pre-cursor
          return cell[index].classList.contains(currentClass)                   // so this is rerturning the whole win array, then checking if the classlist of each 
      });                                                                       // cell matches a winning combination  
  }) 
};

const reset = () => {
    cell.forEach(cell =>{ 
        cell.classList.remove(X_CLASS)                                              // three lines to remove all classes and the end game overlay
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})                   // handle click declared later, adds click events to all the 9 cells
    });
    circleTurn = false;
    setBoardHoverClass();
    X_SCOREBOX.innerText = 0
    O_SCOREBOX.innerText = 0
    winningMessage.classList.remove('show')
};

const clearBoard = () => {
    cell.forEach(cell =>{ 
        cell.classList.remove(X_CLASS)                                              // three lines to remove all classes and the end game overlay
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true}) 
        circleTurn = false                  // handle click declared later, adds click events to all the 9 cells
    });
    };


restart.addEventListener('click', startGame)
resetButton.addEventListener('click', reset)
clearButton.addEventListener('click', clearBoard)

startGame()