import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<Header />);

		expect(component).toBeDefined();
	});
  it('renders h1 tags', () => {
    const component = shallow(<Header/>);

    expect(component).find('h1').toBeDefined();
  });
  it('renders img tags', () => {
    const component = shallow(<Header/>);

    expect(component).find('img').toBeDefined();
  });
});