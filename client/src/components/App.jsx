import React from 'react';

import Header from './Header.jsx';
import SweApplications from './SweApplications.jsx';
import ProfessionalXp from './ProfessionalXp.jsx';
import Personal from './Personal.jsx';
import Skills from './Skills.jsx';
import UsedInApp from './UsedInApp.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <Header/>
        <SweApplications/>
        <ProfessionalXp/>
        <Personal/>
        <Skills/>
        <UsedInApp/>
      </div>
    )
  }
}

export default App;