import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hllo')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
