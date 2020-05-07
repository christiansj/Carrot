import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, testInputField } from './../../../util';
import {SignInForm} from './index';

describe('SignInForm Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<SignInForm />);
        })

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'signInFormComponent');
            expect(component.length).toBe(1);
        });
        
        test('Should render a login button', ()=>{
            const button = findByTestAttr(wrapper, 'loginButton');
            expect(button.length).toBe(1);
            expect(button.text()).toBe('Login');
        });

        describe('Input Fields', ()=>{
            test('Should render identity text field', ()=>{
                testInputField(wrapper, 'identity', 'text');
            });

            test('Should render password field', ()=>{
                testInputField(wrapper, 'password', 'password');
            });
        });
    });
});