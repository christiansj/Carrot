import React from 'react'
import {shallow} from 'enzyme';
import {findByTestAttr} from './../../util';
import {SiteHeader} from './SiteHeader';

const expectedProps = {
    onlineUser: {
        userId: 1,
        firstName: "Test Name",
        lastName: "last Test",
        username: "Cool",
        email: "test email"
    }
}

describe('SiteHeader Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<SiteHeader {...expectedProps}/>);
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'siteHeaderComponent');
            expect(component.length).toBe(1);
        });

        test('Should render website name', ()=>{
            const websiteName = findByTestAttr(wrapper, 'websiteName');
            expect(websiteName.length).toBe(1);
        })
    });

})