import React, { useEffect } from 'react';
import iPhoto from 'constants/interfaces/iPhoto';
import './Photo.scss';

function Photo(props: iPhoto): JSX.Element {
  const { camera, earth_date, img_src } = props;
  const elementRef: React.RefObject<HTMLDivElement> = React.createRef();
  const imgRef: React.RefObject<HTMLImageElement> = React.createRef();

  useEffect(() => {

    // lazy load images on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach( entry => {
        const { isIntersecting } = entry;
        if(isIntersecting && imgRef.current) {
          imgRef.current.src = img_src;
        }
      })
    });

    if(elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, [])


  return (
    <div className="c-Photo__thumbnail" ref={elementRef}>
      <h3 className="c-Photo__header">Camera: </h3>
      <span>{camera.full_name}</span>
      <div className="c-Photo__margin">
        <h3 className="c-Photo__header">Date Taken: </h3>
        <div>{earth_date}</div>
      </div>
      <img
        alt={camera.full_name}
        className="c-Photo__img"
        ref={imgRef}
      />
    </div>
  )
}

export default Photo;
