import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

describe('Login tests', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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