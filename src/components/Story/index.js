import { Col, Row, Typography } from "antd";
import React from "react";
import decor from "../../assets/images/story__decor.png";
import decor2 from "../../assets/images/story__decor--2.png";
function Story(props) {
	const { flower } = props;
	return (
		<Row>
			<Col span={24}>
				<Row>
					<Col span={24}>
						<Typography.Title
							level={2}
							style={{ textAlign: "center" }}
						>
							Love Story
						</Typography.Title>
					</Col>
				</Row>
				<Row align="middle" justify="center" gutter={[0,40]}>
					<Col md={24}>
						<div className="story__content--image--1 right"></div>
						<img
							className="story__content--image--decor"
							src={decor}
							alt="..."
						/>
					</Col>
					<Col md={24}>
						<Typography.Title
							level={3}
							style={{ textAlign: "center" }}
						>
							Lần đầu gặp nhau
						</Typography.Title>
						<Typography.Paragraph style={{ textAlign: "center", padding:'0 1rem' }}>
							Gặp nhau lần đầu ở một quán cà phê quen thuộc của
							chú rể.. Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Praesentium repudiandae, quaerat
							veniam iure non deleniti exercitationem debitis
							atque aliquid sit cum recusandae iste assumenda
							neque facilis consequuntur nesciunt? Recusandae,
							reprehenderit.
						</Typography.Paragraph>
					</Col>
					<Col sm={24}>
						<div className="story__content--image--2 left"></div>
						<img
							className="story__content--image--decor"
							src={decor2}
							alt="..."
						/>
					</Col>
					<Col sm={24}>
						<Typography.Title
							level={3}
							style={{ textAlign: "center" }}
						>  
							Lần đầu gặp nhau
						</Typography.Title>
						<Typography.Paragraph style={{ textAlign: "center" , padding:'0 1rem'}}>
							Gặp nhau lần đầu ở một quán cà phê quen thuộc của
							chú rể.. Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Praesentium repudiandae, quaerat
							veniam iure non deleniti exercitationem debitis
							atque aliquid sit cum recusandae iste assumenda
							neque facilis consequuntur nesciunt? Recusandae,
							reprehenderit.
						</Typography.Paragraph>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Story;
