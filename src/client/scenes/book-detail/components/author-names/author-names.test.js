import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import authorNames from './index';

const expectedProps = {
    authors: [
        { firstName: 'John', lastName: 'Doe' }
    ]
}
describe('authorNames Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(authorNames(expectedProps));
    });

    describe('Rendering', () => {
        test('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'authorNamesComponent');
            expect(component.length).toBe(1);
        });

        test('Should correctly render author name', () => {
            const { firstName, lastName } = expectedProps.authors[0];
            const component = findByTestAttr(wrapper, 'authorName');
            expect(component.text().trim()).toBe(`${firstName} ${lastName}`)
        });
    });

    describe('Checking PropTypes', () => {
        test('Should not throw an error', () => {
            const propErr = checkProps(authorNames, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});