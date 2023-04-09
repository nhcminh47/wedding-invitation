import { Col, Row } from "antd";
import React from "react";
import story1 from '../../assets/images/STORY1.png'
function Story(props) {
  const { flower } = props;
  return (
    <Row>
      <Col>
        <Row>
            <Col>
            <img src={story1} alt="" />
            </Col>
            <Col></Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Story;
