import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from '../Loading';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

test('Loading displays properly', () => {
  const testResult = render(<Loading />);
  const node = testResult.container.firstElementChild;
  expect(node.getAttribute('class')).toBe('spinner');
  expect(node.textContent).toBe('Loading');
});
