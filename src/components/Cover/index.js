import React from "react";
import { Row, Col, Button } from "antd";
import { Typography } from "antd";
const Cover = (props) => {
  const { Title, Text } = Typography;
  const fontSize = {
    fontSize: "2rem",
    color: "darkgoldenrod",
    letterSpacing: "5px",
  };
  const center = { textAlign: "center", ...fontSize };
  return (
    <Row id="cover" className="cover bg--img" justify={"center"} align="middle">
      <Col span={22}>
        <Row gutter={[0,20]}>
          <Col span={24}>
            <Title className="font--MotherLand" style={{ ...center, marginBottom: "0" }}>
              Công Minh
            </Title>
          </Col>
          <Col span={24}>
            <Title
              className="font--MotherLand"
              style={{ ...center, marginBottom: "0" }}
            >
              &
            </Title>
          </Col>
          <Col span={24}>
            <Title className="font--MotherLand" style={{ ...center, marginBottom: "0" }}>
              Phương Anh
            </Title>
          </Col>
          <Col span={24}>
            <center>
              <Text className="font--lora" strong>
                VÀO HỒI, 8:00 AM
              </Text>
            </center>
          </Col>
          <Col span={24}>
            <center>
              <Text className="font--lora" strong>
                NGÀY 29 THÁNG 04 NĂM 2023
              </Text>
            </center>
          </Col>
          <Col span={24}>
            <center>
              <Text className="font--lora" strong>
                TỨC NGÀY 10/03/2023 QUÝ MÃO
              </Text>
            </center>
          </Col>
          <Col span={24}>
            <center>
              <Text className="font--lora" strong italic>
                Thân mời bạn cùng gia đình đến <br/> dự hôn lễ của chúng tôi!
              </Text>
            </center>
          </Col>
          <Col span={24}>
            <center>
              <Button>
                <Text className="font--lora" strong>
                  BẠN SẼ ĐẾN CHỨ
                </Text>
              </Button>
            </center>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Cover;
