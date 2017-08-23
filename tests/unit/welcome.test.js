import React from 'react';
import { mount } from 'enzyme';
import Welcome from '../../src/Welcome';

test('Title contains my name', () => {
    const wrapper = mount(<Welcome name="arnaud" />);
    const title = wrapper.find('h1');
    expect(title.text()).toBe('Welcome, arnaud');
});

test('Title doesn\'t contain my name', () => {
    const wrapper = mount(<Welcome name="ahmad" />);
    const title = wrapper.find('h1');
    expect(title.text()).not.toBe('Welcome, arnaud');
});
