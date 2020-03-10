import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import renderBody from './index';

const expectedProps = {
    tableName: 'Test Name',
    data: [
        {id: 1, firstName: "f name", lastName: "l name", dataName: "f name"},
        {id: 2, firstName: "f name 2", lastName: "l name 2", dataName: "f name 2"},
    ],
    isRenderLinks: true,
    setActiveItem: ()=>{

    }
};

const expectedRowCount = expectedProps.data.length;

describe('renderBody DataTable function', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(renderBody(expectedProps));
    });

    describe('Rendering', ()=>{
        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'dataTableBody');
            expect(component.length).toBe(1);
        });

        test(`Should render ${expectedRowCount} TR elements`, ()=>{
            const rows = findByTestAttr(wrapper, 'dataTableTR');
            expect(rows.length).toBe(expectedRowCount);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(renderBody, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});