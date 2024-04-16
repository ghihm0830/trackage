import React, { useState, useEffect } from 'react';
import EVENT_CONTENTS from '../../event-contents';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function EventBox() {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    
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

    // Pagination
    // Total number of items and items per page
    const totalItems = EVENT_CONTENTS.length;
    const contentsPerPage = 3;

    // Calculate the start index and end index of reviews to display based on the current page
    const startIndex = (currentPage - 1) * contentsPerPage;
    const endIndex = startIndex + contentsPerPage;

    //For map()
    const contents = EVENT_CONTENTS.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / contentsPerPage);

    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Function to navigate to the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to navigate to the next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle page click
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2em"}}>
        {contents.map((content, index) => (
            <div className='event-box' key={index} style={{display: width > 600 ? null : "block", width: width > 600 ? null : "100%"}}>
                <img src={content.url} alt={content.alt} />
                <div className='event-content' >
                    <div className='event-text'>
                        <h2>{content.h2}</h2>
                        <h2>{content.h2m}</h2>
                        <h3>{content.h3}</h3>
                    </div>
                    <button className='event-btn' style={{alignSelf: width < 600 ? "center" : "start", marginTop: width < 600 ? null : "0"}}><a href="#">{content.btn}</a></button>
                </div>
            </div>
        ))}

        <div className="pagination">
            <button  className="pagi-btn" onClick={prevPage} disabled={currentPage === 1}>
                <ArrowBackIcon />
            </button>

            {pageNumbers.map((pageNumber) => (
                <button
                    style={{padding: "5px 10px"}}
                    key={pageNumber}
                    className={pageNumber === currentPage ? 'active' : ''}
                    onClick={() => handlePageClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}

            <button className="pagi-btn" onClick={nextPage} disabled={currentPage === totalPages}>
                <ArrowForwardIcon />
            </button>
        </div>
        
    </div>
  )
}
