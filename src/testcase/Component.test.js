import React from 'react';
import { shallow } from 'enzyme';
import { useState } from 'react';
// import Adapter from 'enzyme-adapter-react-17-updated';
// import Enzyme from 'enzyme';
// Enzyme.configure({ adapter: new Adapter() });

const Component = () => {
    const [state, setState] = useState(0);

    return (
        <div> {
            state
        } </div>
    );
};

describe('useState test', () => {

    it('should render initial value of state', () => {

        const wrapper = shallow(< Component />);

        expect(wrapper.find('div').text()).toBe("0");

    });

    it('should update state when setState is called', () => {

        const wrapper = shallow(< Component />);

        wrapper.instance().setState(1);

        expect(wrapper.find('div').text()).toBe("1");

    });
});

