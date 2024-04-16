import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const FOOTERS = [
    {
        title: "About",
        opt1: "Option2",
        opt2: "Option3",
        opt3: "Option4",
    },
    {
        title: "News",
        opt1: "Option2",
        opt2: "Option3",
        opt3: "Option4",
    },
    {
        title: "Support",
        opt1: "Option2",
        opt2: "Option3",
        opt3: "Option4",
    },
    {
        title: "More",
        opt1: "Option2",
        opt2: "Option3",
        opt3: "Option4",
    },
]

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer>
        {FOOTERS.map((footer, index) => (
            <div key={index} className='footers'>
                <h3>{footer.title}</h3>
                <ul>
                    <li><a href="#">{footer.opt1}</a></li>
                    <li><a href="#">{footer.opt2}</a></li>
                    <li><a href="#">{footer.opt3}</a></li>
                    <li><a href="#">{footer.opt4}</a></li>
                </ul>
            </div>
            ))
        }
        <div className='copyright'>
            trackage <CopyrightIcon className='copy-icon'/> {currentYear}
        </div>
    </footer>
  )
}
