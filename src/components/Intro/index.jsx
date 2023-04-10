import React from "react";
import { Card, Col, Row } from "antd";
const Intro = () => {
  return (
    <Row className="intro" justify={"space-around"} align={"middle"}>
      <Col md={6} sm={6} xs={24}>
        <Card
          title="CHÚ RỂ"
          bordered={false}
          style={{
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <cite>NGUYỄN HUỲNH CÔNG MINH</cite>
          <blockquote>
            Gặp được em là điều mà anh cảm thấy trân trọng nhất trọng cuộc đời
            này. Điều anh mong lúc này là chúng ta sẽ mãi hạnh phúc! <br />
            Anh yêu em ❤️
          </blockquote>
        </Card>
      </Col>
      <Col md={12} sm={8} xs={24}>
        <div className="border">
          <div className="img"></div>
        </div>
      </Col>
      <Col md={6} sm={6} xs={24}>
        <Card
          title="CÔ DÂU"
          bordered={false}
          style={{
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <cite>PHẠM THỊ PHƯƠNG ANH</cite>
          <blockquote>
            Gặp được anh là điều mà em cảm thấy trân trọng nhất trọng cuộc đời
            này. Điều em mong lúc này là chúng ta sẽ mãi hạnh phúc! Em yêu anh
            ❤️
          </blockquote>
        </Card>
      </Col>
    </Row>
  );
};

export default Intro;
