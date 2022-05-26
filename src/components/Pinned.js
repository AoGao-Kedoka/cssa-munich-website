<<<<<<< HEAD
import "./Pinned.css"

const Pinned = () => {
  return (<>
<div className="box1">
    <img
    src="ski.png"
    alt="bigEvent"
    />
</div>

  <div class="row2">
    <span id="row2box1">
      <img
      src = "../resources/images/ski.png"
      alt = "smallLeft"
      />
    </span>
    <span id="row2box2">
      pic2
    </span>
  </div>

  </>)

}

export default Pinned;
=======
import "./Pinned.css";
import ski from "../resources/images/ski.png";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

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
          <Card id="bigCard">
            <Card.Img id="bigCardImg" variant="top" src={ski} />
            <Card.ImgOverlay classname="d-flex align-items-end">
              <Card.Title
                id="bigCardTitle"
                style={{
                  position: "absolute",
                  bottom: 50,
                  left: 10,
                }}
              >
                2022慕尼黑学联滑雪活动圆满结束
              </Card.Title>
              <Card.Text
                id="bigCardText"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 10,
                }}
              >
                31.Mar.2022
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        {/*The following is a cardgroup which contains two cards */}
        <Col classname="col-6-md">
          <Card id="leftCard" style={{ borderRadius: "40px" }}>
            <Card.Img className="smallCardImg" variant="top" src={ski} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text id="leftBoxText">This is text for leftBox</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col classname="col-6-md">
          <Card id="rightCard" style={{ borderRadius: "40px" }}>
            <Card.Img className="smallCardImg" variant="top" src={ski} />
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
>>>>>>> 5841bde37e7618101ff999be0255750a3380b086
