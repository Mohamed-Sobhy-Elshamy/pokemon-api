import React from "react";

const Pagination = ({goToNextPage, goToPrevPage }) => {
    return(
        <div className="container">
            {goToPrevPage && <button className="btn-p" onClick={goToPrevPage}>Previous page</button>}
            {goToNextPage && <button className="btn-n" onClick={goToNextPage}>Next page</button> }
        </div>
    )
}

export default Pagination;