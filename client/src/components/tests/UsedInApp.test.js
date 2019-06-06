import React from 'react';
import { shallow } from 'enzyme';

import UsedInApp from  '../UsedInApp.jsx';

describe('UsedInApp', () => {
  it('should render correctly', () => {
    const component = shallow(<UsedInApp/>);

    expect(component).toMatchSnapshot();
  });
});