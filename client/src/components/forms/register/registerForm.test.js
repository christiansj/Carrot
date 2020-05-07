import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, testInputField } from './../../../util';
import RegisterForm from './index';

describe('RegisterForm Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<RegisterForm/>);
        });

        test('Should render without any errors', ()=>{
            const component = findByTestAttr(wrapper, 'registerFormComponent');
            expect(component.length).toBe(1);
        });

        test('Should render a register button', ()=>{
            const button = findByTestAttr(wrapper, 'registerButton');
            expect(button.length).toBe(1);
            expect(button.text()).toBe('Register');
        });

        describe('Input fields', ()=>{
            test('Should render a firstName text field', ()=>{
                testInputField(wrapper, 'firstName', 'text');
            });

            test('Should render a lastName text field', ()=>{
                testInputField(wrapper, 'lastName', 'text');
            });

            test('Should render a lastName text field', ()=>{
                testInputField(wrapper, 'lastName', 'text');
            });

            test('Should render a username text field', ()=>{
                testInputField(wrapper, 'username', 'text');
            });

            test('Should render an email field', ()=>{
                testInputField(wrapper, 'email', 'email');
            });

            test('Should render a password field', ()=>{
                testInputField(wrapper, 'password', 'password');
            });

            test('Should render a verifyPassowrd password field', ()=>{
                testInputField(wrapper, 'verifyPassword', 'password');
            });
        });
    });
});

