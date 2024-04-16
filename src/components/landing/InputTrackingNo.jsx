import React, { useRef, useState, useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const NO_REGEX = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export default function InputTrackingNo(props) {
    const [clicked, setClicked] = useState(false);

    const trackingNoRef = useRef();

    const [trackingNo, setTrackingNo] = useState('');
    const [validTrackingNo, setValidTrackingNo] = useState(false);

    //setting focus
    useEffect(() => {
        trackingNoRef.current.focus();
    },[])
    
    //Validation
    useEffect(() => {
        const result = NO_REGEX.test(trackingNo);
        console.log(result);
        console.log(trackingNo);
        setValidTrackingNo(result);
    },[trackingNo])

  return (
    <div>
        <label htmlFor="num" className={clicked ? "valid" : "hide"}>Tracking Number</label>
        <div className='input-box' 
        style={{borderColor: trackingNo && validTrackingNo && clicked ? "royalblue" : null || trackingNo && !validTrackingNo && clicked ? "red" : null || !clicked ? null : "#1C1C1C"}}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.icon}
                style={{fill: clicked ? "#1C1C1C" : "#A4A4A4"}}/>
            </svg>
            <input id="num"
            name="num"
            type="text"
            className='input'
            placeholder={props.placeholder}
            onFocus={() => setClicked(true)}
            onBlur={() => setClicked(false)}
            ref={trackingNoRef}
            onChange={(e) => setTrackingNo(e.target.value)}
            autoComplete= "off"
            required
            />
        </div>
    </div>
  )
}
