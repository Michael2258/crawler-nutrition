import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Pagination(props) {
    const { postsPerPage, totalPosts, paginationHandler } = props;
    const pageNumber = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumber.map(number => (
                    <li key={number}>
                        <Router>
                            <Link onClick={() => paginationHandler(number)} to={`/tuoitre/:${number}`}>
                                {number}
                            </Link>
                        </Router>
                    </li>
                ))}
            </ul> 
        </nav>
    );
}

export default React.memo(Pagination);