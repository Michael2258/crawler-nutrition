import React from 'react';
import About from '../data/About.json';
import { Collapse, Row, Col } from 'antd';
import { createFromIconfontCN  } from '@ant-design/icons';
const { Panel } = Collapse;

function AboutPage(props) {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    return (
        <Row span={24} gutter={[24, 24]}>
            <Col span={8} offset={8}>
                <Collapse>
                    {About.map((item, index) => (
                        <Panel header={`${index + 1}. ${item.name}`} key={index + 1}>
                            <Row className="member-info">
                                <Col span={12}>
                                    <p>Student ID: {item.ID}</p>
                                </Col>
                                <Col span={12}>
                                    <a href={item.facebook} target="_blank">
                                        <IconFont style={{marginRight: '8px'}} className="icon" type="icon-facebook" />
                                    </a>
                                    <a href={item.github} target="_blank" style={{color: 'black'}}>
                                        <IconFont className="icon" type="icon-github" />
                                    </a>
                                </Col>
                            </Row>
                        </Panel>
                    ))}
                </Collapse>
            </Col>
        </Row>
    );
}

export default React.memo(AboutPage);