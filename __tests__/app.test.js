/**
 * @jest-environment jsdom
 */
import App from '../src/js/app';

describe('App', () => {
  let app;
  beforeEach(() => {
    document.body.innerHTML = '<div id="game-board"></div>';
    app = new App();
    app.boardSize = 4; // Initialize boardSize
  });

  test('should create a game board', () => {
    app.createGameBoard();
    expect(document.querySelectorAll('.cell').length).toBe(16);
  });

  test('should place goblin on the board', () => {
    app.createGameBoard();
    app.placeGoblin(0);
    const cell = document.querySelector('.cell');
    expect(cell.firstChild).toBe(app.goblinImage); // Correct verification
  });

  test('should move goblin to a new position', () => {
    app.createGameBoard();
    app.placeGoblin(0); // Place goblin at initial position
    const initialPosition = app.currentPosition;
    app.moveGoblin();
    expect(app.getCurrentPosition()).not.toBe(initialPosition);
  });
});
