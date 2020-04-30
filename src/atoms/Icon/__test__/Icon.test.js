import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Icon from '../Icon';
import IconFacebook from '../IconFacebook';
import IconEmpty from '../IconEmpty';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('renders an icon if we have an icon for the given name', () => {
  const testResult = render(<Icon name="facebook" />);
  const expectedResult = render(<IconFacebook />);

  expect(testResult.container.isEqualNode(expectedResult.container)).toBe(true);
});

test('renders an empty icon if we do not have an icon for the given name', () => {
  const testResult = render(<Icon name="faceberg" />);
  const expectedResult = render(<IconEmpty />);

  expect(testResult.container.isEqualNode(expectedResult.container)).toBe(true);
});
