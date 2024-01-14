import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe('Login tests', () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders 2 input tags', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it('renders 2 label tags', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('label')).toHaveLength(2);
  })
})