import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../containers/Calculator';

describe('Calculator Component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Calculator />));

    // Checks if the component renders as a div
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));
});
