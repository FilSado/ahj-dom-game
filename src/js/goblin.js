import goblinImage from '../img/goblin.png';

export default function createGoblin() {
  const goblin = document.createElement('img');
  goblin.src = goblinImage;
  goblin.alt = 'Goblin';
  goblin.id = 'goblin';
  goblin.style.width = '80px';
  goblin.style.height = '80px';
  return goblin;
}
