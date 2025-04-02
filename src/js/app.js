// src/js/app.js
import createGoblin from './goblin';

export default class App {
  constructor() {
    this.board = document.getElementById('game-board');
    this.boardSize = 4; // Initialize boardSize
    this.currentPosition = null;
    this.goblinImage = null; // Initialize goblinImage
  }

  init() {
    this.createGameBoard();
    this.placeGoblin(0); // Place goblin at initial position
    setInterval(() => this.moveGoblin(), 2000); // Запускаем перемещение
  }

  createGameBoard() {
    this.board.innerHTML = ''; // Clear the board
    for (let i = 0; i < this.boardSize * this.boardSize; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.board.appendChild(cell);
    }
  }

  placeGoblin(position) {
    const cells = document.querySelectorAll('.cell');
    if (cells[position]) {
      // Remove goblin from previous position
      if (this.currentPosition !== null && cells[this.currentPosition].contains(this.goblinImage)) {
        cells[this.currentPosition].removeChild(this.goblinImage);
      }
      const goblinImg = createGoblin(); // Get a DOM element USING IMPORTED FUNCTION
      goblinImg.src = 'img/goblin.png';
      goblinImg.alt = 'Goblin';
      goblinImg.classList.add('goblin');
      goblinImg.id = 'goblin';

      this.goblinImage = goblinImg;
      cells[position].appendChild(this.goblinImage);
      this.currentPosition = position;
    }
  }

  moveGoblin() {
    const cells = document.querySelectorAll('.cell');

    if (this.currentPosition !== null) {
      const currentCell = cells[this.currentPosition];
      if (currentCell && currentCell.contains(this.goblinImage)) {
        currentCell.removeChild(this.goblinImage);
      }
    }

    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.boardSize * this.boardSize);
    } while (newPosition === this.currentPosition);

    this.placeGoblin(newPosition);
    this.currentPosition = newPosition;
  }

  getGoblinElement() { // Add this method
    return this.goblinImage;
  }

  getCurrentPosition() {
    return this.currentPosition;
  }
}
