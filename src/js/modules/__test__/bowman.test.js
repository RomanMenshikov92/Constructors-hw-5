import Bowman from '../bowman';

test('Bowman', () => {
  const values = {
    name: 'Robert',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  const result = new Bowman('Robert');

  expect(result).toEqual(values);
});
