import checkPropTypes from 'check-prop-types';
import rootReducer from './../redux/reducers';
import {applyMiddleware, createStore} from 'redux';
import {middlewares} from './../redux/stores/test-store';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const isEmpty = (obj) =>{
    return !obj || Object.keys(obj).length === 0;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}