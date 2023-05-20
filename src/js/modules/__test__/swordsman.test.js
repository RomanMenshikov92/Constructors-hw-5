import Swordsman from '../swordsman';

test('Swordsman', () => {
  const values = {
    name: 'Robert',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Swordsman('Robert');

  expect(result).toEqual(values);
});
