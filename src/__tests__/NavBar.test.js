import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

jest.mock('react-router');

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBar />,
);
});
