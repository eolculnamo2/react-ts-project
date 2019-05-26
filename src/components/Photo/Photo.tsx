import React, { useEffect, useState } from 'react';
import iPhoto from 'constants/interfaces/iPhoto';
import './Photo.scss';

function Photo(props: iPhoto): JSX.Element {
  const { camera, earth_date, img_src } = props;
  const elementRef: React.RefObject<HTMLDivElement> = React.createRef();
  const imgRef: React.RefObject<HTMLImageElement> = React.createRef();
  const body = document.body;

  const [selected, toggleSelected] = useState(false);

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

  const toggle = () => {
    toggleSelected(!selected);

    // prevent scroll when selected.
    if(!selected) {
      body.style.overflow = 'hidden';
    } else  {
      body.style.overflow = 'auto';
    }
  }


  return (
    <div
      className={selected ? 'c-Photo__thumbnail c-Photo__thumbnail--selected' : 'c-Photo__thumbnail'}
      onClick={toggle}
      ref={elementRef}
    >
      <h3 className="c-Photo__header">Camera: </h3>
      <span>{camera.full_name}</span>
      <div className="c-Photo__margin">
        <h3 className="c-Photo__header">Date Taken: </h3>
        <span>{earth_date}</span>
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
