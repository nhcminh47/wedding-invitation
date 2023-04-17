import React from "react";
import { Card, Col, Row, Typography } from "antd";
const Intro = () => {
  return (
    <Row className="intro bg--img repeat" justify={"space-around"} align={"middle"}>
      <Col lg={7} sm={24}>
        <Card
          title={<cite>CHÚ RỂ</cite>}
          bordered={false}
          style={{
            textAlign: "center",
            boxShadow: "none",
            background: "none",
          }}
        >
          <Typography.Text className="name font--MotherLand">Nguyễn Huỳnh Công Minh</Typography.Text>
          <blockquote>
            Gặp được em là điều mà anh cảm thấy trân trọng nhất trọng cuộc đời
            này. Điều anh mong lúc này là chúng ta sẽ mãi hạnh phúc! <br />
            Anh yêu em ❤️
          </blockquote>
        </Card>
      </Col>
      <Col lg={9} sm={24}>
        <div className="border">
          <div className="img"></div>
        </div>
      </Col>
      <Col lg={7} sm={24}>
        <Card
          title={<cite>CÔ DÂU</cite>}
          bordered={false}
          style={{
            textAlign: "center",
            boxShadow: "none",
            background: "none",
          }}
        >
          <Typography.Text className="name font--MotherLand">
            Phạm Thị Phương Anh
          </Typography.Text>
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
