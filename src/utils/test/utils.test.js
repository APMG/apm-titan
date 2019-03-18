import { toSentence, markup } from '../index';

test('It returns an author sentence', () => {
  const arr = ['Opie Schmuck', 'Opiette Schmuck'];
  const expectedResult = 'Opie Schmuck and Opiette Schmuck';
  const testVal = toSentence(arr);
  expect(testVal).toEqual(expectedResult);
});

test('It returns an author sentence with single author', () => {
  const arr = ['Opie Schmuck'];
  const expectedResult = 'Opie Schmuck';
  const testVal = toSentence(arr);
  expect(testVal).toEqual(expectedResult);
});

test('markup', () => {
  const input = '<blink>I am blinking</blink>';
  const result = markup(input);
  expect(result).toEqual({ __html: input });
});
