import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Row, Col } from 'antd';

function Pagination(props) {
    const { postsPerPage, totalPosts, paginationHandler } = props;
    const pageNumber = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <Row className="row-pagination">
            <Col span={12} offset={6}>
            
                <nav className="pagination">
                    <ul>
                        {pageNumber.map(number => (
                            <li key={number}>
                                <Router>
                                    <Link style={{fontSize: '1.4rem'}} onClick={() => paginationHandler(number)} to={`/tuoitre/:${number}`}>
                                        {number}
                                    </Link>
                                </Router>
                            </li>
                        ))}
                    </ul> 
                </nav>
            </Col>
        </Row>
    );
}

export default React.memo(Pagination);