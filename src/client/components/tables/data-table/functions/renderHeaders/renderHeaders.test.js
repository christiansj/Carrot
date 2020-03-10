import { shallow } from 'enzyme';
import { findByTestAttr } from 'client/util';
import renderHeaders from './index';

const expectedProps = {
    keys: ['id', 'firstName', 'lastName', 'dataName']
}
const expectedKeyCnt = expectedProps.keys.length - 1;

describe('renderHeaders DataTable function', () => {
    describe('Rendering', () => {
        let wrapper;
        beforeEach(() => {
          
            wrapper = shallow(renderHeaders(expectedProps));
        });

        test('Should render without errors', () => {
            const headers = findByTestAttr(wrapper, 'dataTableHeaders');
            expect(headers.length).toBe(1);
        });

        test(`Should render ${expectedKeyCnt} th elements`, () => {
            const headers = findByTestAttr(wrapper, 'dataTableTH');
            expect(headers.length).toBe(expectedKeyCnt);
        });
    });
});