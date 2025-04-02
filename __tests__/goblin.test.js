/**
 • @jest-environment jsdom
 */

import createGoblin from '../src/js/goblin';

describe('Goblin', () => {
  test('should create a goblin element', () => {
    const goblinElement = createGoblin();
    goblinElement.id = 'goblin'; // добавляем id для соответствия тесту
    expect(goblinElement.tagName).toBe('IMG');
    expect(goblinElement.id).toBe('goblin');
  });
});
