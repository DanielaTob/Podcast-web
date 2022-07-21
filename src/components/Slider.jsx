import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import school2 from '/assets/school2.jpg'


const Slider = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
    <img src={school2} onDragStart={handleDragStart} role="presentation" />,
    <img src={school2} onDragStart={handleDragStart} role="presentation" />,
    <img src={school2} onDragStart={handleDragStart} role="presentation" />,
    ];

  return (
    <div className='pt-20'>
        <AliceCarousel mouseTracking items={items} />
    </div>
  )
}

export default Slider
