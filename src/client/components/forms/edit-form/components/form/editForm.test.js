import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, testInputField } from 'client/util';
import Form from './index';


function setUp(props = null) {
    return shallow(<Form.WrappedComponent {...props} />)
}
describe('EditForm Component', () => {
    describe('Rendering', () => {
        describe('With RequestBody', () => {
            let wrapper;
            beforeEach(() => {
                const requestBodyProps = {
                    requestBody: {
                        firstName: 'Test F',
                        lastName: 'Test L',
                        gradeLevel: 6,
                        description: ''
                    },
                    tableName: 'Test',
                    id: 1
                };
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
            });

            test('Should render a heading', () => {
                const heading = findByTestAttr(wrapper, 'formHeading');

                expect(heading.length).toBe(1);
                expect(heading.text()).toBe(`Update Test`);
            });

            test('Should render a "Go Back" button', () => {
                const goBackButton = findByTestAttr(wrapper, 'goBackButton');

                expect(goBackButton.length).toBe(1);
                expect(goBackButton.text()).toBe('Go Back');
            });

            test('Should render an "Update" button', ()=>{
                const updateButton = findByTestAttr(wrapper, 'updateButton');

                expect()
            });
        });


        describe('Without RequestBody', ()=>{
            let wrapper;
            beforeEach(() => {
                const requestBodyProps = {
                    tableName: 'Test',
                    id: 1
                };
                wrapper = setUp(requestBodyProps);
            });

            test('Should render an error message', ()=>{
                const errMessage = findByTestAttr(wrapper, 'errorMessage');
                expect(errMessage.length).toBe(1);
                expect(errMessage.text()).toBe('Unable to find object');
            });
        });

    });
})