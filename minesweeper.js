document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  board = new createBoard()

  setSurroundingMines()

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

  lib.initBoard()
}

function createBoard(){
    this.cells = [
      { row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 0, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 1, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 2, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 2, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 3, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 3, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 3, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines:0 },
      { row: 3, col: 3, isMine: false, isMarked: false, hidden: true, surroundingMines:0 }
    ]
}

function setSurroundingMines() {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
}

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var len = surrounding.length
  var count = 0
  for (var i = 0; i < len; i++) {
    if(surrounding[i].isMine) {
      count++
    }
  }
  return count
}

function checkForWin () {
  for (var i=0; i<board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) {
      return
    }
    else if (!board.cells[i].isMine && board.cells[i].hidden) {
      return
    }
  }
  lib.displayMessage('You win!')
}
