import React from 'react';
import { shallow } from 'enzyme';

import ProfessionalXp from  '../ProfessionalXp.jsx';

describe('ProfessionalXp', () => {
  it('should render correctly', () => {
    const component = shallow(<ProfessionalXp/>);

    expect(component).toMatchSnapshot();
  });
});