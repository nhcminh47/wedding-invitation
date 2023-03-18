import React from "react";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
import bgImg1 from "../../assets/images/header-4.jpg";
import bgImg2 from "../../assets/images/floating-img.png";
const Cover = (props) => {
  const { Title, Paragraph } = Typography;
  const fontSize = { fontSize: "4rem", color: "darkgoldenrod" };
  const center = { textAlign: "center", ...fontSize };
  return (
    <Row
      className="cover"
      justify={"center"}
      align="middle"
    >
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Title className="font--Palmaton" style={center}>
              Công Minh
            </Title>
          </Col>
          <Col span={24}>
            <Title className="font--Palmaton" style={center}>
              &
            </Title>
          </Col>
          <Col span={24}>
            <Title className="font--Palmaton" style={center}>
              Phương Anh
            </Title>
          </Col>
          <Col span={24} style={center}>
            <Paragraph>VÀO HỒI, 8:00 AM</Paragraph>
          </Col>
          <Col span={24} style={center}>
            <Paragraph>NGÀY 29 THÁNG 04 NĂM 2023</Paragraph>
          </Col>
          <Col span={24} style={center}>
            <Paragraph>(TỨC NGÀY 10/03/2023 QUÝ MÃO)</Paragraph>
          </Col>
          <Col span={24} style={center}>
            <Paragraph>
              Thân mời bạn cùng gia đình đến dự hôn lễ của chúng tôi!
            </Paragraph>
          </Col>
          <Col span={24} style={center}>
            <Button>Bạn sẽ đến chứ?</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Cover;
