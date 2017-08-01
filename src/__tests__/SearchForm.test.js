import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from '../components/SearchForm';

jest.mock('react-router');

it('renders correctly', () => {
	const tree = renderer.create(
		<SearchForm />,
	);
});
