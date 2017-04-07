import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import {WeatherNav} from './weatherNav.js';

describe('<WeatherNav />', () => {

  it('should not be null', function() {
    const nav = mount(<WeatherNav />);
    expect(nav).to.not.be.empty;
  });
});