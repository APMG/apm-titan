import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Icon from '../Icon';
import IconFacebook from '../IconFacebook';
import IconEmpty from '../IconEmpty';

afterEach(cleanup);

test('Renders an icon if we have an icon for the given name', () => {
  const testResult = render(<Icon name="facebook" />);
  const expectedResult = render(<IconFacebook />);

  expect(testResult.container.isEqualNode(expectedResult.container)).toBe(true);
});

test('Renders an empty icon if we do not have an icon for the given name', () => {
  const testResult = render(<Icon name="faceberg" />);
  const expectedResult = render(<IconEmpty />);

  expect(testResult.container.isEqualNode(expectedResult.container)).toBe(true);
});
