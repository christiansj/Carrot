import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import bookContainer from './index';

const expectedProps = {
    bookId: 1,
    bookJSON: {
        title: 'Book title'
    }
};
describe('bookContainer Compoent', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(bookContainer(expectedProps));
        });

        test('Should not throw any errors', ()=>{
            const component = findByTestAttr(wrapper, 'bookContainerComponent');
            expect(component.length).toBe(1);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(bookContainer, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});