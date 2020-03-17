import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, testInputField, findAndTestText } from 'client/util';
import Form from './index';

const requestBodyProps = {
    requestBody: {
        firstName: 'Test F',
        lastName: 'Test L',
        gradeLevel: 6
    },
    tableName: 'Test',
    id: 1
};

function setUp(props = null) {
    return shallow(<Form.WrappedComponent {...props} />)
}

describe('EditForm Component', () => {
    describe('Rendering', () => {
        describe('With RequestBody', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = setUp(requestBodyProps);
            });

            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'editFormComponent');
                expect(component.length).toBe(1);
            });

            test('Should render appropiate input fields', () => {
                testInputField(wrapper, 'firstName', 'text');
                testInputField(wrapper, 'lastName', 'text');
                testInputField(wrapper, 'gradeLevel', 'number');
                
                const inputs = wrapper.find('input');
                expect(inputs.length).toBe(3);
            });

            test('Should render a heading', () => {
                findAndTestText(wrapper, 'formHeading', 'Update Test');
            });

            test('Should render a "Go Back" button', () => {
                findAndTestText(wrapper, 'goBackButton', 'Go Back');
            });

            test('Should render an "Update" button', ()=>{
                findAndTestText(wrapper, 'updateButton', 'Update');
            });
        });


        describe('Without RequestBody', ()=>{
            let wrapper;
            beforeEach(() => {
                const requestBodyProps = {
                    requestBody: {},
                    tableName: 'Test',
                    id: 1
                };
                wrapper = setUp(requestBodyProps);
            });
            
            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'editFormComponent');
                expect(component.length).toBe(1);
            });

            test('Should render an error message', ()=>{
                findAndTestText(wrapper, 'errorMessage', 'Unable to find object');
            });

            test('Should NOT render an update button', ()=>{
                const updateButton = findByTestAttr(wrapper, 'updateButton');
                expect(updateButton.length).toBe(0);
            });

            test('Should NOT render any input elements', ()=>{
                const inputs = wrapper.find('input');
                expect(inputs.length).toBe(0);
            });

            test('Should render a "Go Back" button', () => {
                findAndTestText(wrapper, 'goBackButton', 'Go Back');
            });
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(Form, requestBodyProps);
            expect(propErr).toBeUndefined();
        });
    }); 
});