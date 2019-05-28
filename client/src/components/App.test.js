import React from 'react';
import { shallow } from 'enzyme';

import App from  './App.jsx';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<App/>);

    expect(component).toMatchSnapshot();
  });
});