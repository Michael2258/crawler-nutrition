import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import data from '../data/TuoiTreData.json';
import Pagination from '../components/Pagination';

DanTri.propTypes = {
    setPosts: PropTypes.func,
};

const TOTAL = 15;
const itemEachPage = 5;

function DanTri(props) {
    const { setPosts, currentPosts, posts, currentPage, postsPerPage, paginationHandler } = props;

    const postHandler = () => {
        setPosts(data.dantri);
    }

    useEffect(() => {
        postHandler();
    }, []);

    console.log(currentPosts);

    return (
        <div>
            <Row gutter={[24, 24]}>
                {currentPosts.map(item => (
                    <Col span={8}>
                        <div className="link-hover">
                            <a href={item.image} target="_blank">
                                <img style={{width: '100%', height: '100%'}} src={item.image} alt=""/>
                            </a>
                        </div>
                        <h1 style={{marginTop: '5px', marginRight: '10px'}}>{item.header}</h1>
                    </Col>
                ))}
            </Row>

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginationHandler={paginationHandler}
            />
        </div>
    );
}

export default React.memo(DanTri);