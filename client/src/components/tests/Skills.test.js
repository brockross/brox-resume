import React from 'react';
import { shallow } from 'enzyme';

import Skills from  '../Skills.jsx';

describe('Skills', () => {
  it('should render correctly', () => {
    const component = shallow(<Skills/>);

    expect(component).toMatchSnapshot();
  });
});