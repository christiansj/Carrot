import React from 'react';
import editButton from './index';

import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import {BrowserRouter} from 'react-router-dom';

describe('Edit Crud Button', () => {
    describe('Rendering', ()=>{
        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn();
            const expectedProps = {
                tableName: 'Test Name',
                data: {
                    id: 1,
                    dataName: 'Test Data'
                },
                setActiveItem: mockFunc
            }
            
            wrapper = shallow(
                <BrowserRouter>
                    {editButton(expectedProps)}
                </BrowserRouter>
            );
        });
    
        test('Should render a edit button', () => {
            const component = findByTestAttr(wrapper, 'editCrudButton');
            expect(component.length).toBe(1);
        });

        test('Should emit callback on click event', ()=>{
            const button = findByTestAttr(wrapper, 'editCrudButton');
            button.simulate('click');
            const callback = mockFunc.mock.calls;
            expect(callback.length).toBe(1);
        });
    });
    
    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const expectedProps = {
                tableName: 'Test Name',
                data: {
                    id: 1,
                    dataName: 'Test Data'
                },
                setActiveItem: ()=>{}
            }
            const propErr = checkProps(editButton, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});