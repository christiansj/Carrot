import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../util';
import { DataTable } from './index';

const expectedProps = {
    tableName: 'Test Name',
    data: [
        { id: 1, firstName: "test F name", lastName: "test l Name", dataName: "test F name" },
        { id: 2, firstName: "test F name 1", lastName: "test l Name 2", dataName: "test F name 2" },
        { id: 3, firstName: "test F name 3", lastName: "test l Name 3", dataName: "test F name 3" },
    ],
    isRenderLinks: true
};

describe('DataTable Component', () => {
    let wrapper;
    describe('Rendering with CRUD Buttons', () => {
        beforeEach(() => {
            wrapper = shallow(<DataTable {...expectedProps} />);
        });

        test('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'dataTableComponent');
            expect(component.length).toBe(1);
        });

        test('Should render a table heading', () => {
            const tableHeader = findByTestAttr(wrapper, 'dataTableHeaders');
            expect(tableHeader.length).toBe(1);
        });

        test('Should render a table body', () => {
            const tableBody = findByTestAttr(wrapper, 'dataTableBody');
            expect(tableBody.length).toBe(1);
        });
    });

    describe('Checking PropTypes', () => {
        test('Should not throw an error', () => {
            const propErr = checkProps(DataTable, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});