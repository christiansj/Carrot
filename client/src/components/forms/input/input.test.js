import { mount } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../util';
import Input from './index';

describe('Input Component', () => {
    describe('Rendering and events', () => {
        let wrapper;
        let emitMock;
        let blurMock;

        beforeEach(() => {
            emitMock = jest.fn();
            blurMock = jest.fn();
            const expectedProps = {
                name: "firstName",
                label: "First Name",
                value: "",
                type: "text",
                emitEvent: emitMock,
                blurEvent: blurMock
            };
            wrapper = mount(Input(expectedProps));
        });

        describe('Rendering', ()=>{
            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'inputComponent');
                expect(component.length).toBe(1);
            });

            test('Should render a label', ()=>{
                const label = wrapper.find('label');
                expect(label.length).toBe(1);
                expect(label.text()).toBe("First Name:");
            });
        });


        describe('Events', ()=>{
            test('Should call emitEvent prop', () => {
                const input = findByTestAttr(wrapper, 'inputComponent');
               
                input.find('input').simulate('change');
                const callback = emitMock.mock.calls;
                expect(callback.length).toBe(1);
            });
    
            test('Should call blurEvent prop', ()=>{
                const input = findByTestAttr(wrapper, 'inputComponent');
                
                input.find('input').simulate('blur');
                const callback = blurMock.mock.calls;
                expect(callback.length).toBe(1);
            });
        })
    });


    describe('Checking PropTypes', () => {
        test('Should not throw an error', () => {
            const expectedProps = {
                name: "firstName",
                label: "First Name",
                value: "",
                type: "text",
                emitEvent: jest.fn(),
                blurEvent: jest.fn()
            };
            const propErr = checkProps(Input, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});
