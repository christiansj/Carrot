import { shallow, render } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import deleteButton  from './index';

describe('deleteButton Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        let mockFunc;

        beforeEach(()=>{
            mockFunc = jest.fn();
            const expectedProps = {
                setActiveItem: mockFunc
            }
            wrapper = shallow(deleteButton(expectedProps))
        });


        test('Should render a deleteButton', ()=>{
            const component = findByTestAttr(wrapper, 'deleteCrudButton');
            expect(component.length).toBe(1);
        });

        test('Should emit callback on click event', ()=>{
            const button = findByTestAttr(wrapper, 'deleteCrudButton');
            button.simulate('click');
            const callback = mockFunc.mock.calls;
            expect(callback.length).toBe(1);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const expectedProps = {
                data: {
                    id: 1,
                    dataName: 'Test Data'
                },
                setActiveItem: ()=>{
            
                }
            }

            const propErr = checkProps(deleteButton, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});