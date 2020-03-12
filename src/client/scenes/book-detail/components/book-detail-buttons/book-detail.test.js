import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import bookDetailButtons from './index';
import { waitForElementToBeRemoved } from '@testing-library/react';

const expectedProps = {
    bookId: 1,
    title: 'Example Title'
}

describe('bookDetailButtons Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(bookDetailButtons(expectedProps));
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'bookDetailButtons');
            expect(component.length).toBe(1);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(bookDetailButtons, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});