import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, findAndTestText } from './../../../../util';
import recordDisplay from './index';

const recordProps = {
    record: {
        id: 1,
        firstName: 'Test',
        lastName: 'E',
        age: 9,
        weight: 60.2
    },
    tableName: 'Test'
};

function setUp(props = {}) {
    return shallow(recordDisplay(props));
}


describe('recordDisplay Component', () => {
    describe('Rendering', () => {
        describe('With record prop', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = setUp(recordProps)
            });

            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'recordDisplayComponent');
                expect(component.length).toBe(1);
            });

            test('Should render a "View <tableName>" heading', () => {
                findAndTestText(wrapper, 'recordDisplayHeading', 'View Test')
            });

            test('Should render a table', () => {
                const table = findByTestAttr(wrapper, 'recordDisplayTable');
                expect(table.length).toBe(1);
            });

            test('Should render correct # of rows', () => {
                const table = findByTestAttr(wrapper, 'recordDisplayTable');
                const rows = table.find('tr');


                var keys = Object.keys(recordProps.record);
                expect(rows.length).toBe(keys.length);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    var row = findByTestAttr(wrapper, `${key}Row`);
                    expect(row.length).toBe(1);
                }
            });

            test('Should render label cells', () => {
                var keys = Object.keys(recordProps.record);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];

                    findAndTestText(wrapper, `${key}CellLabel`, key);
                }
            });

            test('Should render value cells', () => {
                const { record } = recordProps;
                var keys = Object.keys(record);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];

                    findAndTestText(wrapper, `${key}CellValue`, record[key].toString());
                }
            });

            test('Should render a "Go Back" button', ()=>{
                findAndTestText(wrapper, 'goBackButton', 'Go Back');
            });
        });

        describe('Without record props', ()=>{
            let wrapper;
            beforeEach(() => {
                const noRecordProps = {
                    record: {},
                    tableName: 'Test'
                }
                wrapper = setUp(noRecordProps);
            });

            test('Should render without errors', () => {
                const component = findByTestAttr(wrapper, 'recordDisplayComponent');
                expect(component.length).toBe(1);
            });

            test('Should NOT render a record table', ()=>{
                const table = findByTestAttr(wrapper, 'recordDisplayTable');
                expect(table.length).toBe(0);
            });

            test('Should render a "Go Back" button', ()=>{
                findAndTestText(wrapper, 'goBackButton', 'Go Back');
            });
        });
    });

    describe('Checking PropTypes', () => {
        test('Should not throw an error', () => {
            const propErr = checkProps(recordDisplay, recordProps);
            expect(propErr).toBeUndefined();
        });
    });
});