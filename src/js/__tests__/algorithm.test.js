import luhnAlgorithm from '../algorithm';

test('Corerct', () => {
  expect(luhnAlgorithm('4539715339781499')).toBeTruthy();
});

test('Incorerct', () => {
  expect(luhnAlgorithm('4539715339781498')).toBeFalsy();
});
