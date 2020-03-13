import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps } from 'client/util';
import carousel from './index';

const expectedProps = {
    items: [
        <p>1</p>,
        <p>2</p>,
        <p>3</p>
    ],
    isRenderBottomNav: true,
    isRenderArrows: true
}
describe('Carousel Component', ()=>{
    describe('Rendering', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(carousel(expectedProps));
        });

        test('Should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'carouselComponent');
            expect(component.length).toBe(1);
        });


        test('Should render correct number of items', ()=>{
            const items = findByTestAttr(wrapper, 'carouselItem');
            expect(items.length).toBe(expectedProps.items.length);
        });


        test('Should render correct number of bottom buttons', ()=>{
            const buttons = findByTestAttr(wrapper, 'carouselItemButton');
            expect(buttons.length).toBe(expectedProps.items.length);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw any errors', ()=>{
            const propErr = checkProps(carousel, expectedProps);
            expect(propErr).toBeUndefined();
        })
    });
});