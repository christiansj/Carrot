import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import BanUserForm from './index';

const expectedProps = {
    user: {
        userId: 1
    }
};

describe('BanUserForm Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<BanUserForm {...expectedProps}/>);
        });

        test('Should render without any errors', ()=>{
            const component = findByTestAttr(wrapper, 'banUserFormComponent');
            expect(component.length).toBe(1);
        });

        test('Should render a label and textarea element for "reason"', ()=>{
            const group = findByTestAttr(wrapper, 'reasonInputGroup');

            expect(group.find('label').text()).toBe('Reason');
            expect(group.find('textarea').length).toBe(1);
        });

        test('Should render a label and date input element for "bannedUntil"', ()=>{
            const group = findByTestAttr(wrapper, 'bannedUntilInputGroup');
            expect(group.find('label').text()).toBe('Banned until');

            const input = group.find('input');
            expect(input.length).toBe(1);
            expect(input.prop('type')).toBe('datetime-local');
        });

        test('Should render a submit button', ()=>{
            const button = wrapper.find('button');

            expect(button.text()).toBe('Ban User');
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(BanUserForm, expectedProps);
            expect(propErr).toBeUndefined();
        });
    }); 
});