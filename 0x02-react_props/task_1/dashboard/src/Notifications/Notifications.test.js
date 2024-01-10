import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme'

describe('Notifications tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications/>);

    expect(wrapper.exists()).toBe(true);
  })
  it('renders a list', () => {
    const wrapper = shallow(<Notifications/>);

    expect(wrapper.find('ul')).toBeDefined();
  })
  it('renders 3 list items', () => {
    const wrapper = shallow(<Notifications/>);

    expect(wrapper.find('li')).toHaveLength(3);
  })
  it('renders correct text', () => {
    const component = shallow(<Notifications/>);

    expect(component.find('p').prop('children')).toBe(
      'Here is the list of notifications'
    );
  });
});