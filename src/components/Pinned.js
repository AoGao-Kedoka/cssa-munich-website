import "./Pinned.css";
import ski from "../resources/images/ski.png";
import Card from "react-bootstrap/Card";
import {Col, Container, Row } from "react-bootstrap";

const Pinned = () => {
  return (
    <Container>
      {/*The three components are contained in 1 container
         2 rows - 1st row contains just 1 column, the big card, with column unit 12
                - 2nd row contains the two smaller cards in 2 columns , with column unit 6
      */}
      <Row>
        <Col class="col-12">
          {/*The following card is the big card displayed on top. */}
          <Card
            style={{
              overflow: "hidden",
              borderRadius: "40px",
              marginBottom:20
            }}
          >
            {/* <Card.Body></Card.Body> */}
            <Card.Img id="bigCardImg" variant="top" src={ski} />
            <Card.ImgOverlay classname="d-flex align-items-end">
              <Card.Title id="bigCardTitle" style={
                {
                  position:"relative",
                  top:400,
                  left:0
                }
              }>
                2022慕尼黑学联滑雪活动圆满结束
              </Card.Title>
              <Card.Text id="bigCardText">31.Mar.2022</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        {/*The following is a cardgroup which contains two cards */}
        <Col classname="col-6-md">
          <Card id="leftCard" style={{ borderRadius: "40px" }}>
            <Card.Img id="leftCardImg" variant="top" src={ski} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text id="leftBoxText">This is text for leftBox</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col classname="col-6-md">
          <Card id="rightCard" style={{ borderRadius: "40px" }}>
            <Card.Img id="rightCardImg" variant="top" src={ski} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text id="rightBoxText">This is text for rightBox</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pinned;
