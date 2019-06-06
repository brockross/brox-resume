import React from 'react';
import { shallow } from 'enzyme';

import SweApplications from  '../SweApplications.jsx';
import sampleData from '../../dummyData.js';

describe('SweApplications', () => {
  it('should render correctly', () => {
    const component = shallow(<SweApplications sweApps={JSON.parse(sampleData)}/>);

    expect(component).toMatchSnapshot();
  });
});