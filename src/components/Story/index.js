import { Col, Row, Space, Typography } from "antd";
import React from "react";
import decor from "../../assets/images/story__decor.png";
import decor2 from "../../assets/images/story__decor--2.png";
function Story(props) {
  const { flower } = props;
  const imgArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Row gutter={[0, 20]} justify="center" align="middle">
      <Col span={22}>
        <Row gutter={[20, 20]} align="middle" justify="center">
          <Col span={24}>
            <Typography.Title level={2} style={{ textAlign: "center" }}>
              Love Story
            </Typography.Title>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography.Text>
              Chúng mình đã có khoảng thời gian yêu nhau rất hạnh phúc. Hãy cùng
              lắng nghe câu chuyện của chúng mình nhé!
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={22}>
        <Space direction="vertical" size={[10, 40]}>
          {imgArr.map((item, index) => {
            return (
              <Row
                key={index}
                align="middle"
                justify="space-around"
                gutter={[20, 40]}
                style={{ padding: "3rem auto" }}
                
              >
                <Col xs={20} sm={10} lg={7} xl={4}>
                  <div
                    className={`story__content--image--${item} ${
                      index % 2 === 1 ? "left" : "right"
                    }`}
                  ></div>
                  <img
                    className="story__content--image--decor"
                    src={item % 2 !== 0 ? decor : decor2}
                    alt="..."
                  />
                </Col>
                <Col xs={24} sm={10} lg={14} >
                  <Typography.Title level={3} style={{ textAlign: "center" }}>
                    Lần đầu gặp nhau
                  </Typography.Title>
                  <Typography.Paragraph style={{ textAlign: "center" }}>
                    Gặp nhau lần đầu ở một quán cà phê quen thuộc của chú rể..
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium repudiandae, quaerat veniam iure non deleniti
                    exercitationem debitis atque aliquid sit cum recusandae iste
                    assumenda neque facilis consequuntur nesciunt? Recusandae,
                    reprehenderit.
                  </Typography.Paragraph>
                </Col>
              </Row>
            );
          })}
        </Space>
      </Col>
    </Row>
  );
}

export default Story;
