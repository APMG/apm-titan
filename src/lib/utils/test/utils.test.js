import { to_sentence, linkFromType, markup } from '../index';

test('It returns an author sentence', () => {
  const arr = ['Opie Schmuck', 'Opiette Schmuck'];
  const expectedResult = 'Opie Schmuck and Opiette Schmuck';
  const testVal = to_sentence(arr);
  expect(testVal).toEqual(expectedResult);
});

test('It returns an author sentence with single author', () => {
  const arr = ['Opie Schmuck'];
  const expectedResult = 'Opie Schmuck';
  const testVal = to_sentence(arr);
  expect(testVal).toEqual(expectedResult);
});

// FIXME: Will we even need linkFromType for every project? Won't the types vary too much per project for this function to be useful in the library?

test('Episode linkFromType', () => {
  const data = {
    resourceType: 'episode',
    href: '2018/10/06/lindsey-buckingham-hurray-for-the-riff'
  };
  const link = linkFromType(data);
  expect(link).toEqual(
    '/epsiode/2018/10/06/lindsey-buckingham-hurray-for-the-riff'
  );
});

test('Link linkFromType', () => {
  const data = {
    resourceType: 'link',
    destination: 'https://www.youtube.com/watch?v=Pz7L-QpbSKc'
  };
  const link = linkFromType(data);
  expect(link).toEqual(data.destination);
});

test('Link linkFromType', () => {
  const eventLink = 'https://www.livefromhere.org/event/4115';
  const data = {
    resourceType: 'link',
    destination: eventLink
  };
  const link = linkFromType(data);
  expect(link).toEqual(eventLink);
});

test('Story linkFromType', () => {
  const data = {
    resourceType: 'story',
    href: '2018/10/05/mike-yard'
  };
  const link = linkFromType(data);
  expect(link).toEqual('/story/2018/10/05/mike-yard');
});

test('markup', () => {
  const input = '<blink>I am blinking</blink>';
  const result = markup(input);
  expect(result).toEqual({ __html: input });
});
