import React from 'react'
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from 'client/util';
import DropdownMenu from './DropdownMenu';

const expectedProps = {
    links: [
        {url: '/', content: 'test'},
        {url: '/test', content: 'test 2'}
    ],
    logoutUser: ()=>{

    }
}
const expectedLinkCnt = expectedProps.links.length;


describe('DropdownMenu Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<DropdownMenu {...expectedProps}/>);
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'dropdownComponent');
            expect(component.length).toBe(1);
        });

        test(`Should render with ${expectedLinkCnt} links`, ()=>{
            const links = findByTestAttr(wrapper, 'dropdownLink');
            expect(links.length).toBe(expectedLinkCnt);
        });
    });


    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(DropdownMenu, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });
});