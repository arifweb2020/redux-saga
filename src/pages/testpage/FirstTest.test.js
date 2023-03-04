import React from "react";
import { shallow } from "enzyme";
import FirstTest from './FirstTest';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);
const wrapper = shallow(<FirstTest />);


it("should update state on input change", () => {
    const newInputValue = "React is Awesome";
    wrapper
      .find(".input")
      .simulate("change", { target: { value: newInputValue } });
    expect(setState).toHaveBeenCalledWith(newInputValue);
  });