import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../pages/Home/HomePage';

describe('Home component', ()=>{
	it('Home should render without error', ()=>{
		const component = shallow(<HomePage />);
		const wrapper = component.find('form');
		expect(wrapper.length).toBe(1)
	});
});
