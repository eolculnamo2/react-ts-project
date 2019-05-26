import React from 'react';
import iPhoto from 'constants/interfaces/iPhoto';

function Photo(props: iPhoto): JSX.Element {
  const { camera, earth_date, img_src } = props;
  return (
    <>
      <h3>Camera: {camera.full_name}</h3>
      <div>Date Taken: {earth_date}</div>
      <img
        alt={camera.full_name}
        src={img_src}
      />
    </>
  )
}

export default Photo;
