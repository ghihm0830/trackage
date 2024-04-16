import React, {useState, useRef, useEffect} from 'react';

const NAME_REGEX = /^[a-zA-Z ]{4,15}$/;

export default function InputBox(props) {
    const [clicked, setClicked] = useState(false);

    const nameRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);

    //Setting focus
    useEffect(() => {
        nameRef.current.focus();
    },[])

    //Validation
    useEffect(() => {
        const result = NAME_REGEX.test(name);
        console.log(result);
        console.log(name);
        setValidName(result);
    },[name])
    
  return (
    <div>
        <label htmlFor="name" className={clicked ? "valid" : "hide"}>Last Name</label>
        <div className='input-box' 
         style={{borderColor: name && validName && clicked ? "royalblue" : null || name && !validName && clicked ? "red" : null || !clicked ? null : "#1C1C1C"}}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.icon}
                style={{fill: clicked ? "#1C1C1C" : "#A4A4A4"}}/>
            </svg>
            <input 
            id="name"
            name="name"
            type="text"
            className='input'
            placeholder={props.placeholder}
            onFocus={() => setClicked(true)}
            onBlur={() => setClicked(false)}
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
            autoComplete= "off"
            required
            />
        </div>
    </div>
  )
}
