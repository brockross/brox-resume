import React from 'react';
import { shallow } from 'enzyme';

import Personal from  '../Personal.jsx';

describe('Personal', () => {
  it('should render correctly', () => {
    const component = shallow(<Personal/>);

    expect(component).toMatchSnapshot();
  });
});