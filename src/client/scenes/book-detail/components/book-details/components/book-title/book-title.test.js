import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import bookTitle from './index';

const expectedProps = {
    title: 'Test Title',
    editTitle: '',
    emitChange: jest.fn(),
    userIsAuthor: false
};

describe('bookTitle Component', ()=>{
    describe('Rendering', ()=>{
        describe('Checking detail content', ()=>{
            let wrapper;
            beforeEach(()=>{
                wrapper = shallow(bookTitle(expectedProps));
            });

            test('Should render without errors', ()=>{
                const component = findByTestAttr(wrapper, 'bookTitleComponent');
                expect(component.length).toBe(1);
            });

            test('Should render a title', ()=>{
                const title = findByTestAttr(wrapper, 'bookTitle');
                expect(title.length).toBe(1);
                expect(title.text()).toBe(expectedProps.title);
            });
        });


        describe('userIsAuthor = false', ()=>{
            let wrapper;
            beforeEach(()=>{
                wrapper = shallow(bookTitle(expectedProps));
            });

            test('Should not render title input', ()=>{
                const titleInput = findByTestAttr(wrapper, 'bookTitleInput');
                expect(titleInput.length).toBe(0);
            });
        });


        describe('userIsAuthor = true', ()=>{
            let wrapper;
            let mockChange;

            beforeEach(()=>{
                mockChange = jest.fn();
                const expectedAuthorProps = {
                    title: 'Test Title',
                    editTitle: '',
                    emitChange: mockChange,
                    userIsAuthor: true
                };
                wrapper = shallow(bookTitle(expectedAuthorProps));
            });

            test('Should render an input elem for title', ()=>{
                const titleInput = findByTestAttr(wrapper, 'bookTitleInput');
                expect(titleInput.length).toBe(1);
            });

            test('Should call emitChange prop', ()=>{
                const titleInput = findByTestAttr(wrapper, 'bookTitleInput');
                titleInput.find('input').simulate('change');
                const callback = mockChange.mock.calls;

                expect(callback.length).toBe(1);
            });
        });
    });


    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(bookTitle, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});