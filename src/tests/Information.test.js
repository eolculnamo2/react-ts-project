import React from 'react';
import { shallow } from 'enzyme';
import Information from '../components/Information/Information.tsx';

it('<Information /> renders without crashing', () => {
  shallow(<Information/>)
});
