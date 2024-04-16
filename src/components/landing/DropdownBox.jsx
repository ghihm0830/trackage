import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import searchData from '../../search-data';


export default function DropdownBox(props) {
    const [clicked, setClicked] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState([]);
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = searchData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        
        if(searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }; //when removing search word, the dropdown is disappeared
  
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

  return (
    <div style={{position: "relative"}}>
        <label htmlFor="text" className={clicked ? "valid" : "hide"}>Shipping Company</label>
        <div className='input-box' style={{display: "flex", alignItems: "center", borderColor: clicked ? "#1C1C1C" : "#A4A4A4"}}>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.icon}
                style={{fill: clicked ? "#1C1C1C" : "#A4A4A4"}}
                />
            </svg>
            <input 
            className='input'
            type="text" 
            value={wordEntered}
            placeholder={props.placeholder} 
            onFocus={() => setClicked(true)}
            onBlur={() => setClicked(false)}
            onChange={handleFilter}
            />
            <div className='search-icon'>
                {filteredData.length === 0 ? <KeyboardArrowDownIcon style={{color: clicked ? "#1C1C1C" : "#A4A4A4"}} /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
            </div>
        </div>

        {filteredData.length != 0 && (
            <div className='search-data'>
                {filteredData.slice(0, 10).map((value, key) => {
                    return <div className='search-option'>{value.name}</div>
                })}
            </div>
        )}
    </div>
  )
}
