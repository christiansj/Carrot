import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../util';
import bookCover from './index';

const expectedProps = {
    book: {
        bookId: 1,
        title: "Test Title",
        folderHash: 1
    },
    height: 250,
    width: 100
};

describe('bookCover Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(bookCover(expectedProps));
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'bookCoverComponent');
            expect(component.length).toBe(1);
        });

        test('Should render an image', ()=>{
            const img = wrapper.find('img');
            expect(img.length).toBe(1);
        });

        test("Should render a link to book's page", ()=>{
            const link = wrapper.find('a');
            const {bookId, title} = expectedProps.book;
            const expectedHref = `/book/${bookId}-${title}`;

            expect(link.prop('href')).toBe(expectedHref);
        });

        test('Should have an img with alt attribute equal to the title', ()=>{
            const img = wrapper.find('img');
            const {title} = expectedProps.book;

            expect(img.prop('alt')).toBe(title);
        });

        test('Should render img with passed in dimension props', ()=>{
            const img = wrapper.find('img');

            expect(img.prop('height')).toBe(expectedProps.height);
            expect(img.prop('width')).toBe(expectedProps.width);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(bookCover, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});