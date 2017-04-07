import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import {WeatherTile} from './weatherTile.js';

describe('<WeatherTile />', () => {

  it('should not be null', function() {
    const tile = mount(<WeatherTile />);
    expect(tile).to.not.be.empty;
  });
});