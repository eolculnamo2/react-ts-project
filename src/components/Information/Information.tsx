import React from 'react';
import './Information.scss';

function Information(): JSX.Element {
  return (
    <div>
      <h1 className="c-Information__center">Mars Rover Photos</h1>
      <p className="c-Information__center">Select photos by sol and rover. Click photo to enlarge.</p>
    </div>
  )
}

export default Information;