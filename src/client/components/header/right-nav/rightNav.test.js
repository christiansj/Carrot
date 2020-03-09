import React from 'react'
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from 'client/util';
import rightNav from './index';

describe('rightNav Component', ()=>{
    describe('Rendering without User', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(rightNav());
        });

        test('Should render without-user nav', ()=>{
            const component = findByTestAttr(wrapper, 'navWithoutUser');
            expect(component.length).toBe(1);
        });

        test('Should render a login button', ()=>{
            const signInButton = findByTestAttr(wrapper, 'signInButton');
            expect(signInButton.length).toBe(1);
        });

        test('Should render a register link', ()=>{
            const registerLink = findByTestAttr(wrapper, 'registerLink');
            expect(registerLink.length).toBe(1);
        });
    });

    describe('Rendering with User', ()=>{
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
            }
            wrapper = shallow(rightNav(expectedProps));
            
        });

        test('Should render with-user nav', ()=>{
            const component = findByTestAttr(wrapper, 'navWithUser');

            expect(component.length).toBe(1);
        });

        test('Should render ProfileWidget', ()=>{
            const profileWidget = findByTestAttr(wrapper, 'profileWidget');
            expect(profileWidget.length).toBe(1);
        });

        test('Should render notificationBell', ()=>{
            const notificationBell = findByTestAttr(wrapper, 'notificationBell');
            expect(notificationBell.length).toBe(1);
        });
    })
});