import React from 'react';

import Header from './Header.jsx';
import SweApplications from './SweApplications.jsx';
import ProfessionalXp from './ProfessionalXp.jsx';
import Personal from './Personal.jsx';
import Skills from './Skills.jsx';
import UsedInApp from './UsedInApp.jsx';

import sampleData from '../dummyData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sweApps: JSON.parse(sampleData)
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <SweApplications sweApps={this.state.sweApps}/>
        <ProfessionalXp/>
        <Personal/>
        <Skills/>
        <UsedInApp/>
      </div>
    )
  }
}

export default App;