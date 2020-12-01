import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import tuoitre from '../data/TuoiTreData.json';
import Pagination from '../components/Pagination';

TuoiTre.propTypes = {
    setPosts: PropTypes.func,
};

const TOTAL = 15;
const itemEachPage = 5;

function TuoiTre(props) {
    const { setPosts, currentPosts, posts, currentPage, postsPerPage, paginationHandler } = props;

    const postHandler = () => {
        setPosts(tuoitre);
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
                        <h1 style={{marginTop: '5px'}}>{item.title}</h1>
                    </Col>
                ))}
            </Row>

            <Row span={24}>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginationHandler={paginationHandler}
                />
            </Row>
        </div>
    );
}

export default React.memo(TuoiTre);