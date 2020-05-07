import { shallow, render } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../../../util';
import renderCrudButtons from './index';

//TODO learn how to mock button click event in test
const expectedProps = {
    tableName: 'testName',
    data: { id: 1, firstName: "test F name", lastName: "test l Name", dataName: "test F name" },
    isRenderLinks: true,
    setActiveItem: () => {

    }
};

describe('renderCrudButtons DataTable function', () => {
    describe('isRenderLinks = true', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(renderCrudButtons(expectedProps));
        });

        describe('Rendering', () => {
            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'crudButtonCell');
                expect(component.length).toBe(1);
            });
        });


        describe('View Crud Button', () => {
            test('Should render a view button', () => {
                const viewButton = findByTestAttr(wrapper, 'viewCrudButton');
                expect(viewButton.length).toBe(1);
            });

            test('Should emit callback on click event', ()=>{
                const viewButton = findByTestAttr(wrapper, 'viewCrudButton');
            });
            //mock click event here
        });    
    });

    
    describe('isRenderLinks = false', ()=>{
        let wrapper;
        beforeEach(()=>{
            const noRenderProps = {
                tableName: 'testName',
                data: { id: 1, firstName: "test F name", lastName: "test l Name", dataName: "test F name" },
                isRenderLinks: false,
                setActiveItem: () => {
            
                }
            };
            wrapper = render(renderCrudButtons(noRenderProps));
        });

        test('Should not render', ()=>{
            const component = findByTestAttr(wrapper, 'crudButtonCell');
            expect(component.length).toBe(0);
        });
    });


    describe('Checking PropTypes', () => {
        test('Should not throw an error', () => {
            const propErr = checkProps(renderCrudButtons, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});