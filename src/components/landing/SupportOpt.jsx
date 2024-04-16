import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import ForumIcon from '@mui/icons-material/Forum';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ClearIcon from '@mui/icons-material/Clear';

const MODAL = [
    {
        title: "Contact Numbers",
        content1: "+1 416-123-1234 (ENG)",
        content2: "+1 123-123-1234 (GLOBAL)",
    },
    {
        title: "Please Provide Your Info",
    },
    {
        title: "Center Address",
        content1: "33 Helendale Ave, Toronto, ON M4R0A4 Canada (Head)",
        content2: "72 Crestwood Rd, Vaughan, ON L4J1A4 Canada",
    }
]

export default function SupportOpt() {
    // Opened based on the button clicked. One way to achieve this is by maintaining an index state variable to indicate the currently active modal
    const [activeModalIndex, setActiveModalIndex] = useState(null);

    const openModal = (index) => {
        //do not apply preventDefault here but inline. does not work
        setActiveModalIndex(index);
    }

    const closeModal = () => {
        setActiveModalIndex(null);
    }

  return (
    <div className='supportOpt-box'>

        <button className='btn-inside' onClick={(e) => {openModal(0); e.preventDefault();}}>
            <CallIcon id="btn-inside-icon"/>
            <a href="#">Call To Center</a>
        </button>

        <button className='btn-inside' onClick={(e) => {openModal(1); e.preventDefault();}}>
            <ForumIcon id="btn-inside-icon"/>
            <a href="#">Chat with Agent</a>
        </button>

        <button className='btn-inside' onClick={(e) => {openModal(2); e.preventDefault();}}>
            <ApartmentIcon />
            <a href="">Visit our center</a>        
        </button>

        {/* Modal */}
        {activeModalIndex !== null && (
            <div className="modal" key={MODAL[activeModalIndex].title}>
                <div className='modal-header'>
                    <h2 style={{fontSize: "18px"}}>{MODAL[activeModalIndex].title}</h2>
                    <span className="close-btn" onClick={closeModal}><ClearIcon /></span>
                </div>
                <div className="modal-content">
                    <h3>{MODAL[activeModalIndex].content1}</h3>
                    <h3>{MODAL[activeModalIndex].content2}</h3>
                </div>
            </div>
        )}

        {/* Overlay */}
        {activeModalIndex !== null && (
            <div id="overlay" className={`overlay ${activeModalIndex !== null ? 'open' : ''}`}></div>
        )}

    </div>
  )
}
