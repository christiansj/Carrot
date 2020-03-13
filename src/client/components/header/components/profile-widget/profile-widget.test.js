import React from 'react'
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from 'client/util';
import {ProfileWidget} from './index';

describe('ProfileWidget Component', ()=>{
    describe('Rendering with user', ()=>{
        let wrapper;
        beforeEach(()=>{
            const expectedProps = {
                onlineUser: {
                    userId: 1,
                    firstName: "Test Name",
                    lastName: "last Test",
                    username: "Cool",
                    email: "test email"
                }
            };
            wrapper = shallow(<ProfileWidget {...expectedProps}/>);
        });
    
        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'profileWidgetComponent');
            expect(component.length).toBe(1);
        });


    });


    describe('Rendering without user', ()=>{
        let wrapper;
        beforeEach(()=>{
            const expectedProps = {
                onlineUser: {}
            }
            wrapper = shallow(<ProfileWidget {...expectedProps}/>);
        });

        test('Should not render without a user', ()=>{
            const component = findByTestAttr(wrapper, 'profileWidgetComponent');
            expect(component.length).toBe(0);
        });
    });
});