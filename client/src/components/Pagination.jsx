import React from 'react'
import { GrFormPrevious,GrFormNext  } from "react-icons/gr";
const Pagination = ({ pageCount, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(pageCount + 1).keys()].slice(1)

    

    const goToNextPage = () => {
            if(currentPage !== pageCount) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav className=''>
            <ul className='pagination flex items-center justify-center gap-3'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={goToPrevPage} 
                        href='#'>
                        <GrFormPrevious />
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className={`${currentPage === pgNumber ? "font-black text-lg bg-blue-600 text-white py-1 px-2 rounded-full":""}`} 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={goToNextPage}
                        href='#'>
                        
                        <GrFormNext  />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination