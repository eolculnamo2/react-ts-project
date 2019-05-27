import React, { useContext } from 'react';
import { Photo } from '../index';
import iPhoto from '../../constants/interfaces/iPhoto'
import MarsRoverContext from 'context/mars-rover';
import './PhotoList.scss'

function PhotoList(): JSX.Element {
  const context = useContext(MarsRoverContext);

  const { photos } = context.state.apiData;
  return (
    <div className="c-PhotoList__wrap">
      {photos && photos.map((x: iPhoto, i: number) => (
        <Photo
          key={x.img_src+i}
          camera={x.camera}
          earth_date={x.earth_date}
          img_src={x.img_src}
        />
      ))}
      {photos && !photos.length && <div>No results. Please try a different sol or rover.</div>}
    </div>
  )
}

export default PhotoList;
