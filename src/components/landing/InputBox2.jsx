import React, { useState, useRef, useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const USER_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const NAME_REGEX = /^[a-zA-Z ]{4,15}$/; //not allowed to use special symbors or numbers but space btw letters
const TEXT_REGEX = /^[a-zA-Z 0-9 .,!@#$%&'"*+/=?^_`({|}):;~-]{4,70}$/; 

export default function InputBox2() {
    const userRef = useRef();
    const nameRef = useRef();
    const textRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);

    const [name, setName] = useState('');
    const [validName, setVaildName] = useState(false);

    const [text, setText] = useState('');
    const [validText, setValidText] = useState(false);
    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const [userFocus, setUserFocus] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
    const [textFocus, setTextFocus] = useState(false);


    //setting focus
    useEffect(() => {
        userRef.current.focus();
        nameRef.current.focus();
        textRef.current.focus();
    },[])

    //validate username
    useEffect(() => {
        const result = USER_REGEX.test(user); //test username agains regex
        console.log(result);
        console.log(user);
        setValidUser(result);
    },[user])

    ///validate full name
    useEffect(() => {
        const result = NAME_REGEX.test(name, text);
        console.log(result);
        console.log(name);
        setVaildName(result);
    }, [name])

    ///validate text
    useEffect(() => {
        const result = TEXT_REGEX.test(text);
        console.log(result);
        console.log(text);
        setValidText(result);
    }, [text])

    //display error message
    useEffect(() => {
        setErrMsg(''); //clear out error message when user make change
    },[user, name, text])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = NAME_REGEX.test(name);
        const v3 = TEXT_REGEX.test(text);

        if(!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, name, text);
        setSuccess(true)
    }

    //Separate styles to work for each box not all together at once
    const style1 = {
        width: "100%",
        borderBottom: "2px solid #A4A4A4",
        padding: "0.5em 0.75em",
        borderTop: (userFocus ? "2px solid #1C1C1C" : "none"),
        borderRight: (userFocus ? "2px solid #1C1C1C" : "none"),
        borderLeft: (userFocus ? "2px solid #1C1C1C" : "none"),
        borderRadius: (userFocus ? "5px" : "0"),
        borderColor: (!userFocus ? "#A4A4A4" : null || validUser && user && userFocus ? "royalblue" : null || !validUser && user && userFocus ? "red" : null),
        transition: (userFocus ? "border 80ms ease-out" : "none")
    }

    const style2 = {
        width: "100%",
        borderBottom: "2px solid #A4A4A4",
        padding: "0.5em 0.75em",
        borderTop: (nameFocus ? "2px solid #1C1C1C" : "none"),
        borderRight: (nameFocus ? "2px solid #1C1C1C" : "none"),
        borderLeft: (nameFocus ? "2px solid #1C1C1C" : "none"),
        borderRadius: (nameFocus ? "5px" : "0"),
        borderColor: (!nameFocus ? "#A4A4A4" : null || validName && name && nameFocus ? "royalblue" : null || !validName && name && nameFocus ? "red" : null),
        transition:  (nameFocus ? "border 80ms ease-out" : "none")
    }

    const style3 = {
        width: "100%",
        borderBottom: "2px solid #A4A4A4",
        padding: "0.5em 0.75em",
        borderTop: (textFocus ? "2px solid #1C1C1C" : "none"),
        borderRight: (textFocus ? "2px solid #1C1C1C" : "none"),
        borderLeft: (textFocus ? "2px solid #1C1C1C" : "none"),
        borderRadius: (textFocus ? "5px" : "0"),
        borderColor: (!textFocus ? "#A4A4A4" : null || validText && text && textFocus ? "royalblue" : null || !validText && text && textFocus ? "red" : null),
        transition: (textFocus ? "border 80ms ease-out" : "none")
    }

  return (
    <> 
        {success ? (
            <section className="success-page">
                <h1>Submitted successfully! <br/> Thanks for reaching us 💌</h1>
                <p style={{textDecoration: "underline", marginTop: "1em", cursor: "pointer"}}>
                    <a href="http://localhost:5173/">Back to the form</a>
                </p>
            </section>
        ) : (
        <div className='center'>
            <p 
            ref={errRef} 
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
            >
                {errMsg}
            </p>

            <form className="support-form" onSubmit={handleSubmit}>

                <label htmlFor="email" className='inputBox2-box'>
                    Email Address
                    <span className={validUser ? "valid" : "hide"}>
                        <CheckCircleOutlineIcon id='val-icon' />
                    </span>
                    <span className={validUser || !user ? "hide" : "invalid"}>
                        <ErrorOutlineIcon id='inval-icon' />
                    </span>
                </label>
                <input
                style={style1}
                id='email'
                name='email'
                type="email"
                autoComplete="off"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validUser ? "false" : "true"}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder='example@email.com'
                required
                />

                <p id="uidnote"
                className={userFocus && user && !validUser ? "instructions" : "offscreen"}
                >
                    <InfoIcon id='info-icon'/>
                    Must use the valid email format
                </p>

                <label htmlFor="name" className='inputBox2-box'>
                    Full Name
                    <span className={validName ? "valid" : "hide"}>
                        <CheckCircleOutlineIcon id='val-icon' style={{color: "royalblue"}}/>
                    </span>
                    <span className={validName || !name ? "hide" : "invalid"}>
                        <ErrorOutlineIcon id='inval-icon' style={{color: "red"}}/>
                    </span>
                </label>   
                <input
                style={style2}
                id='name'
                name='name'
                type="text"
                autoComplete="off"
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby='nmnote'
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                placeholder='John Doe'
                required
                />

                <p id="nmnote"
                    className={nameFocus && name && !validName ? "instructions" : "offscreen"}
                    >
                        <InfoIcon id='info-icon'/>
                        Must provide your first and last name
                </p>

                <label htmlFor="text" className='inputBox2-box'>
                    Enter your questions
                    <span className={validText ? "valid" : "hide"}>
                        <CheckCircleOutlineIcon id='val-icon' style={{color: "royalblue"}}/>
                    </span>
                    <span className={validText || !text ? "hide" : "invalid"}>
                        <ErrorOutlineIcon id='inval-icon' style={{color: "red"}}/>
                    </span>
                </label>
                <textarea 
                style={style3}
                ref={textRef}
                id='text' 
                name='text' 
                type="text" 
                autoComplete="off" 
                onChange={(e) => setText(e.target.value)}
                aria-describedby='txtnote' 
                onFocus={() => setTextFocus(true)}
                onBlur={() => setTextFocus(false)}
                aria-invalid={validText ? "false" : "true"}
                placeholder='What would you like to ask?' 
                required
                />

                <p id="txtnote"
                    className={textFocus && text && !validText ? "instructions" : "offscreen"}
                    >
                        <InfoIcon id='info-icon'/>
                        Must enter any text within 70 characters limit
                </p>

                <button className="support-btn" disabled={!validUser || !validName || !validText ? true : false} type='submit'>
                    Submit
                </button>
            </form>
        </div>
        )}
    </>
  )
}
