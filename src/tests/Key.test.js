import React from 'react';
import { shallow } from 'enzyme';
import Key from '../components/Key.jsx';

describe('Key', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Key 
                keyAction={jest.fn()}
                keyType={''}
                keyValue={''}
            />
        )
    });

    // Snapshot testing for Key component
    test('should render correctly', () => expect(wrapper).toMatchSnapshot());

    // Checking if the key component exists
    test('should render a <div />', () => expect(wrapper.find('div').length).toEqual(1));
    
    // Checks if the key's value gets rendered
    test('should render the key\'s value', () => {
        wrapper.setProps({ keyValue: "test" });
        expect(wrapper.text()).toEqual("test");
    })
    
});
