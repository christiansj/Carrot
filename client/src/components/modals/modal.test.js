import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../util';
import Modal from './index';

const expectedProps = {
    modalId: 'testModal',
    modalTitle: 'Test Modal',
    modalContent: (
        <div>
            <h1>This is a Test</h1>
            <p>Test</p>
        </div>
    )
}

describe('Modal Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(Modal(expectedProps))
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'modalComponent');
            expect(component.length).toBe(1);
        });

        test('Should render modal title', ()=>{
            const title = findByTestAttr(wrapper, 'modalTitle');
            expect(title.length).toBe(1);
        });

        test('Should be able to find modal by Id', ()=>{
            const modal = wrapper.find(`#${expectedProps.modalId}`);
            expect(modal.length).toBe(1);
        });

        test('Should properly render title', ()=>{
            const title = findByTestAttr(wrapper, 'modalTitle');
            expect(title.text()).toBe(expectedProps.modalTitle);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(Modal, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});