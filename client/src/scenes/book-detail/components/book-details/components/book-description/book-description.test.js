import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../../../../util';
import bookDescription from './index';

const expectedProps = {
    description: 'Test Description',
    editDescription: '',
    emitChange: jest.fn(),
    userIsAuthor: false
};

describe('bookDescription Component', ()=>{
    describe('Rendering', ()=>{
        describe('Checking Content', ()=>{
            let wrapper;
            beforeEach(()=>{
                wrapper = shallow(bookDescription(expectedProps));
            });

            test('Should render without errors', ()=>{
                const component = findByTestAttr(wrapper, 'bookDescriptionComponent');
                expect(component.length).toBe(1);
            });

            test('Should render a description', ()=>{
                const description = findByTestAttr(wrapper, 'bookDescription');
                expect(description.length).toBe(1);
                expect(description.text()).toBe(`Preface: ${expectedProps.description}`);
            });
        });

        
        describe('userIsAuthor = false', ()=>{
            let wrapper;
            beforeEach(()=>{
                wrapper = shallow(bookDescription(expectedProps));
            });
    
            test('Should NOT render a description input field', ()=>{
                const descriptionInput = findByTestAttr(wrapper, 'bookDescriptionInput');
                expect(descriptionInput.length).toBe(0);
            });
        });


        describe('userIsAuthor = true', ()=>{
            let mockChange;
            let wrapper;

            beforeEach(()=>{
                mockChange = jest.fn();
                const expectedAuthorProps = {
                    description: 'Test Description',
                    editDescription: '',
                    emitChange: mockChange,
                    userIsAuthor: true
                };
                wrapper = shallow(bookDescription(expectedAuthorProps));
            });

            test('Should render a description input field', ()=>{
                const descriptionInput = findByTestAttr(wrapper, 'bookDescriptionInput');
                expect(descriptionInput.length).toBe(1);
            });

            test('Should call emitChange prop', ()=>{
                const descriptionInput = findByTestAttr(wrapper, 'bookDescriptionInput');
                descriptionInput.simulate('change');
                const callback = mockChange.mock.calls;
                expect(callback.length).toBe(1);
            });
        });
    });


    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(bookDescription, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});