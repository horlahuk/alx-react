import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe('Footer tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  })
  it('contains copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').prop('children')).toBe('Copyright');
  });
})