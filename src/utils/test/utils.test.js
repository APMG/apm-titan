import { toSentence, markup, prevIndex, nextIndex } from '../index';

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

test('prevIndex gets the previous index for values greater than 1', () => {
  expect(prevIndex(5)).toEqual(4);
  expect(prevIndex(9)).toEqual(8);
});

test('prevIndex just returns 1 if the previous value would be less than that', () => {
  expect(prevIndex(1)).toEqual(1);
  expect(prevIndex(-1)).toEqual(1);
});

test('nextIndex gets the next index for values less than count', () => {
  expect(nextIndex(1, 10)).toEqual(2);
  expect(nextIndex(9, 10)).toEqual(10);
});

test('nextIndex just returns count if the next index would be greater than that', () => {
  expect(nextIndex(10, 10)).toEqual(10);
  expect(nextIndex(12, 10)).toEqual(10);
});
