/* eslint-disable no-console */
import Bowman from './modules/bowman';
import Swordsman from './modules/swordsman';
import Magician from './modules/magician';
import Daemon from './modules/daemon';
import Undead from './modules/undead';
import Zombie from './modules/zombie';

/* создание обьектов для проверки в консоль */
const bowman = new Bowman('player 1');
const swordsman = new Swordsman('player 2');
const magician = new Magician('player 3');
const daemon = new Daemon('player 4');
const undead = new Undead('player 5');
const zombie = new Zombie('player 6');

/* вывод в консоль */
console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);

/* вызов levelUp */
zombie.levelUp();
console.log('zombie - levelUp');
console.log(zombie);

/* вызов damage */
zombie.damage(50);
console.log('zombie - damage 50');
console.log(zombie);
