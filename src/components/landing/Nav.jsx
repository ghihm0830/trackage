import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
    const [open, setOpen] = useState(false);

  return (
    <nav>
        <div className='logo-box'>
            <img src="/src/assets/brand.png" alt="trackage brand logo" width="50px" height="50px"/>
            <div className='logo-text'>
                <h3>TRACKAGE</h3>
                <p>TRACK ALL YOUR PACKAGE</p>
            </div>
        </div>

        <div className='nav-option'>
            <a href="#" className="toggle-button" open={open} onClick={() => setOpen(!open)}>
                <MenuIcon style={{fontSize: "50px"}}/>
            </a>

            <ul className='nav-list' style={{transform: open ? "scaleY(1)" : null}}>
                <li><a href="#">option1</a></li>
                <li><a href="#">option2</a></li>
                <li><a href="#">option3</a></li>
                <li><a href="#">option4</a></li>
            </ul>
        </div>

        <ul className='nav-list2'>
            <li><a href="#">login</a></li>
            <li><a href="#">signup</a></li>
        </ul>
    </nav>
  )
}
