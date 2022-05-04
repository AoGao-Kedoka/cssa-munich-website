import "./Pinned.css";
import ski from "../resources/images/ski.png";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

const Pinned = () => {
  return (
    <div>
      <div className="bigCard1">
        {/*The following card is the big card displayed on top. */}
        <Card
          style={{ width: "55rem", overflow: "hidden", borderRadius: "40px" }}
        >
          {/* <Card.Body></Card.Body> */}
          <Card.Img id="bigCardImg" variant="top" src={ski} />
          <Card.ImgOverlay>
            <Card.Title id="bigCardTitle">
              2022慕尼黑学联滑雪活动圆满结束
            </Card.Title>
            <Card.Text id="bigCardText">31.Mar.2022</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      {/*The following is a cardgroup which contains two cards */}
      <div class="row2">
        <CardGroup>
          <Card id="leftCard" style={{ width: "26rem", borderRadius: "40px" }}>
            <Card.Img id="leftCardImg" variant="top" src={ski} />
            <Card.Body style={{ backgroundColor: "#ffffff" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text id="leftBoxText">This is text for leftBox</Card.Text>
            </Card.Body>
          </Card>
          <Card id="rightCard" style={{ width: "26rem", borderRadius: "40px" }}>
            <Card.Img id="rightCardImg" variant="top" src={ski} />
            <Card.Body style={{ backgroundColor: "#ffffff" }}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text id="rightBoxText">This is text for rightBox</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Pinned;
