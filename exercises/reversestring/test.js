const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toBe('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toBe('dcba  ');
});
