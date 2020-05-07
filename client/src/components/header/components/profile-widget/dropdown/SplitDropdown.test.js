import React from 'react'
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from './../../../../../util';
import ProfileDropdown from './ProfileDropdown';

const expectedProps = {
    onlineUser: {
        firstName: 'Test f name',
        lastName: 'Test l name',
        username: 'testUsername',
        email: 'testEmail@example.com'
    },
    links: [
        {url: '/', content: 'test'},
        {url: '/test', content: 'test 2'}
    ],
    logoutUser: ()=>{

    }
}

describe('SplitDropdown Component', ()=>{
    describe('Rendering with props', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<ProfileDropdown {...expectedProps}/>);
        });
    
        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, "splitDropdownComponent");
            expect(component.length).toBe(1);
        });       
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(ProfileDropdown, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});