import * as React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { findByTestAttr} from '../../../utils/index';

const setUp = (props = {}) => {
    return shallow(<Header {...props}/>);
}


describe('Header Component', () => {

    let component;
    beforeEach(()=>{
        component = setUp();
    })
    it('Should render without errors', () => {
        // console.log(component.debug());
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);

    });
});


