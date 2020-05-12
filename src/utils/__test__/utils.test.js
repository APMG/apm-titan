import { toSentence, markup, prevIndex, nextIndex } from '../utils';

describe('toSentence()', () => {
  it('properly formats a sentence listing more than two authors', () => {
    const arr = ['Opie Schmuck', 'Opiette Schmuck', "Opie Schmuck's Mom"];
    const expectedResult =
      "Opie Schmuck, Opiette Schmuck, and Opie Schmuck's Mom";
    const testVal = toSentence(arr);
    expect(testVal).toEqual(expectedResult);
  });

  it('properly formats a sentence listing 2 authors', () => {
    const arr = ['Opie Schmuck', 'Opiette Schmuck'];
    const expectedResult = 'Opie Schmuck and Opiette Schmuck';
    const testVal = toSentence(arr);
    expect(testVal).toEqual(expectedResult);
  });

  it('returns an author sentence with single author', () => {
    const arr = ['Opie Schmuck'];
    const expectedResult = 'Opie Schmuck';
    const testVal = toSentence(arr);
    expect(testVal).toEqual(expectedResult);
  });

  it('returns undefined when nothing is passed in ', () => {
    const testVal = toSentence();
    expect(testVal).toEqual(undefined);
  });
});

describe('markup()', () => {
  it('returns an object with a key of __html and the value of a markup string', () => {
    const input = '<blink>I am blinking</blink>';
    const result = markup(input);
    expect(result).toEqual({ __html: input });
  });
});

describe('prevIndex()', () => {
  it('gets the previous index for values greater than 1', () => {
    expect(prevIndex(5)).toEqual(4);
    expect(prevIndex(9)).toEqual(8);
  });

  //@todo do we really want to return 1 in all these cases?
  it('returns the last page of results if the next index would be greater than that', () => {
    expect(prevIndex(1)).toEqual(1);
    expect(prevIndex(0)).toEqual(1);
    expect(prevIndex(-1)).toEqual(1);
  });
});

describe('nextIndex()', () => {
  it('gets the next index', () => {
    expect(nextIndex(1, 10)).toEqual(2);
    expect(nextIndex(9, 10)).toEqual(10);
  });

  it('returns the last page of results if the next index would be greater than that', () => {
    expect(nextIndex(10, 10)).toEqual(10);
    expect(nextIndex(12, 10)).toEqual(10);
  });
});
