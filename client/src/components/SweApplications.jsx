import React from 'react';

const SweApplications = (props) => {
  return (
    <div>
      <h3>Software Engineering Applications</h3>
      {props.sweApps.map(item => {
        return (
          <div>
          <h4>{item.name} - {item.jobTitle}</h4>
          <p>{item.techs.join(' | ')}</p>
          <p><em>{item.description}</em></p>
          <ul>
            {item.bullets.map(bullet => {
              return <li>{bullet}</li>
            })}
          </ul>
          </div>
        )
      })}
    </div>
  )
}

export default SweApplications;