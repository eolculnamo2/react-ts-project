import React from 'react';
import './Information.scss';

function Information(): JSX.Element {
  return (
    <div>
      <h1 className="c-Information__text">Mars Rover Photos</h1>
      <p className="c-Information__text">Select photos by sol, rover, and camera. Click photo to enlarge.</p>
    </div>
  )
}

export default Information;