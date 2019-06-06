import React from 'react';
import { shallow } from 'enzyme';

import SweApplications from  '../SweApplications.jsx';

describe('SweApplications', () => {
  it('should render correctly', () => {
    const component = shallow(<SweApplications/>);

    expect(component).toMatchSnapshot();
  });
});