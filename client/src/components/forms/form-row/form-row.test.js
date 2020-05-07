import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../util';
import formRow from './index';

const expectedProps = {
    name: "firstName",
    label: "First Name",
    value: "",
    emitEvent: jest.fn(),
    blurEvent: jest.fn()
};

describe('formRow Component', () => {
    describe('Rendering', () => {
        describe('Input', () => {
            let wrapper;
         
            beforeEach(() => {
                wrapper = shallow(formRow(expectedProps));
            });

            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'formRowComponent');
                expect(component.length).toBe(1);
            });

            test('Should render input component', () => {
                const input = findByTestAttr(wrapper, 'inputComponent');
                expect(input.length).toBe(1);
            });
        });

        describe('TextArea', () => {
            let wrapper;
            beforeEach(() => {
                const textAreaProps = {
                    name: "description",
                    label: "Description",
                    value: "",
                    emitEvent: jest.fn(),
                    blurEvent: jest.fn()
                }
                wrapper = shallow(formRow(textAreaProps));
            });

            test('Should render TextArea component', ()=>{
                const textArea = findByTestAttr(wrapper, 'textAreaComponent');
                expect(textArea.length).toBe(1);
            });
        });

        describe('Checking PropTypes', ()=>{
            test('Should throw no errors', ()=>{
                const propErr = checkProps(formRow, expectedProps);
                expect(propErr).toBeUndefined();
            });
        });
    });
});