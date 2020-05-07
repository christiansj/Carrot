import { userConstants } from './../../../constants';

import UserReducer from './index';

describe('UserReducer', () => {
    let userReducer;
    beforeEach(() => {
        userReducer = UserReducer('testUser');

    });

    test('Should return default state', () => {
        const newState = userReducer(undefined, { name: 'testUser' });
        expect(newState).toEqual({});
    });

    test('SET_ONLINE_USER Should return loggged in user', () => {
        const user = {
            username: 'testName'
        }
        const newState = userReducer(undefined, {
            name: 'testUser',
            type: userConstants.SET_ONLINE_USER,
            payload: user
        });
        expect(newState).toEqual(user);
    });

    test('CLEAR_ONLINE_USER should clear user', () => {
        const newState = userReducer({ username: 'testUserName' }, {
            name: 'testUser',
            type: userConstants.CLEAR_ONLINE_USER
        });
        expect(newState).toEqual({});
    });



});