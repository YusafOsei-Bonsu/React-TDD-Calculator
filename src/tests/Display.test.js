import React from 'react';
import { shallow } from 'enzyme';
import Display from '../containers/Display';

describe('Display Component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Display />));

    // Checks if the Display component exists
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));
    
});
