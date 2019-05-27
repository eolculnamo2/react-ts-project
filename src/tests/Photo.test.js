import React from 'react';
import { Photo } from '../components';
import { mount, shallow } from 'enzyme';

it('<Photo /> renders without crashing', () => {
  shallow(<Photo/>);
});

describe('UI toggles', () => {
  const wrapper = mount(<Photo />);
  it('UI displays as not selected on load', () => {
    expect(wrapper.childAt(0).hasClass('c-Photo__thumbnail--selected')).toEqual(false);
  });

  it('UI toggles on selected', () => {
    wrapper.simulate("click");
    expect(wrapper.childAt(0).hasClass('c-Photo__thumbnail--selected')).toEqual(true);
  });

  it('UI toggles back to unselected', () => {
    wrapper.simulate("click");
    expect(wrapper.childAt(0).hasClass('c-Photo__thumbnail--selected')).toEqual(false);
  });
});
