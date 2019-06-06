import React from 'react';

const SweApplications = (props) => {
  return (
    <div>
      <h3>Software Engineering Applications</h3>
      {props.sweApps.map(item => {
        return (
          <div>
          <h4>{item.name}</h4>
          <h5>{item.title}</h5>
          <h5>{item.jobTitle}</h5>
          <h5>{item.techs.join(' | ')}</h5>
          <p>{item.description}</p>
          <ul>
            {item.bullets.map(bullet => {
              <li>{bullet}</li>
            })}
          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default SweApplications;