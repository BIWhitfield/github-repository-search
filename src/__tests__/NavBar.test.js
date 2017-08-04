import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../components/NavBar';

describe('<NavBar />', () => {
	it('it renders 1 <NavBar /> component', () => {
		const component = shallow(<NavBar />);
		expect(component).toHaveLength(1);
	})
	it('renders props correctly', () => {
		const component = shallow(<NavBar name="navbar" />);
		expect(component.instance().props.name).toBe('navbar');
	})
})
