import React, {useState, useEffect} from 'react';
import DropdownBox from './DropdownBox';
import EventBox from './EventBox';

export default function Event() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    //   console.log(width)

  return (
    <div className='event'>
        <div style={{display: width > 600 ? "flex" : "block", alignItems: width > 600 ? "end" : null, gap: width > 600 ? "12px" : null, marginInline: width > 600 ? "4em" : null}}>
            <h2 style={{fontSize: "var(--fs-24-32)"}}>Events</h2>
            <DropdownBox placeholder= "Enter Shipping Company" />
        </div>
        <EventBox />
    </div>
  )
}
