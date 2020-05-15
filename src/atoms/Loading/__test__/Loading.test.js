import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from '../Loading';

afterEach(cleanup);

test('Loading displays properly', () => {
  const { container } = render(<Loading />);
  const loadingNode = container.firstChild;

  expect(loadingNode.className).toBe('spinner');
  expect(loadingNode.textContent).toBe('Loading');
});
