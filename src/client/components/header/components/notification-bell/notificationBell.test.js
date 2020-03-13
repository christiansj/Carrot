import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from 'client/util';
import notificationBell from './notificationBell';

const notificationProps = {
    notificationCnt: 3
};

const noNotificationProps = {
    notificationCnt: 0
};


describe('NotificationBell Component', ()=>{
    describe('Rendering with Notifications', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(notificationBell(notificationProps));
        });

        test('Should render a notificaion bell', ()=>{
            const bell = findByTestAttr(wrapper, 'notificationBellComponent');
            expect(bell.length).toBe(1);
        });

        test('Should render a white filled bell', ()=>{
            const component = findByTestAttr(wrapper, 'filledBellIcon');
            expect(component.length).toBe(1);
        });

        test('Should render a notifcation badge', ()=>{
            const badge = findByTestAttr(wrapper, 'notificationBadge');
            expect(badge.length).toBe(1);
        });

        test('Should render passed in notification count', ()=>{
            const bellValue = parseInt(findByTestAttr(wrapper, 'notificationBadge').text());
            expect(bellValue).toBe(3);
        });
    });

    describe('Render no notifications', ()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(notificationBell(noNotificationProps));
        });

        test('Should render a notificaion bell', ()=>{
            const bell = findByTestAttr(wrapper, 'notificationBellComponent');
            expect(bell.length).toBe(1);
        });

        test('Should render a white outlined bell', ()=>{
            const component = findByTestAttr(wrapper, 'outlinedBellIcon');
            expect(component.length).toBe(1);
        });

        test('Should not render notification badge', ()=>{
            const badge = findByTestAttr(wrapper, 'notificationBadge');
            expect(badge.length).toBe(0);
        });
    });

    describe('Checking PropTypes', ()=>{
        test('Should not throw an error', ()=>{
            const propErr = checkProps(notificationBell, notificationProps);
            expect(propErr).toBeUndefined();
        });
    });
});