import React from 'react';
import viewButton from './index';

import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../../../util';
import { BrowserRouter } from 'react-router-dom';

const expectedProps = {
    tableName: 'Test Name',
    id: 1
}
describe('viewButton Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(
                <BrowserRouter>
                    {viewButton(expectedProps)}
                </BrowserRouter>
            );
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'viewCrudButton');
            expect(component.length).toBe(1);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(viewButton, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});