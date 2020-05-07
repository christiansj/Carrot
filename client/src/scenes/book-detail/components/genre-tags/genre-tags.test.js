import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../../util';
import genreTags from './index';

const expectedProps = {
    genres: [
        {genreId: 1, name: "Test 1"},
        {genreId: 2, name: "Test 2"}
    ]
}
describe('genreTags Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(genreTags(expectedProps));
        });


        test('Should render genre tags wrapper', ()=>{
            const tagWrapper = findByTestAttr(wrapper, 'genreTagsWrapper');
            expect(tagWrapper.length).toBe(1);
        });


        test('Should render correct number of tags, without errors', ()=>{
            const tags = findByTestAttr(wrapper, 'genreTagComponent');
            expect(tags.length).toBe(2);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(genreTags, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});
