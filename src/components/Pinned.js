import "./Pinned.css";
import ski from "../resources/images/ski.png";
import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";

const Pinned = (props) => {
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
                        <Card.Img id="bigCardImg" variant="top" src={props.bigCardImage}/>
                        <Card.ImgOverlay >
                            <Card.Title
                                id="bigCardTitle"
                                style={{
                                    position: "absolute",
                                    bottom: 50,
                                    left: 10,
                                }}
                            >
                                {props.bigCardTitle}
                            </Card.Title>
                            <Card.Text
                                id="bigCardText"
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 10,
                                }}
                            >
                                {props.bigCardDate}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row>
                {/*The following is a cardgroup which contains two cards */}
                <Col classname="col-6-md">
                    <Card id="leftCard" style={{borderRadius: "40px"}}>
                        <Card.Img className="smallCardImg" variant="top" style={{objectFit:"cover"}} src={props.leftCardImage}/>
                        <Card.Body>
                            <Card.Title>{props.leftCardTitle}</Card.Title>
                            <Card.Text id="leftBoxText">{props.leftCardText}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col classname="col-6-md">
                    <Card id="rightCard" style={{borderRadius: "40px"}}>
                        <Card.Img className="smallCardImg" variant="top" style={{objectFit:"cover"}}src={props.rightCardImage}/>
                        <Card.Body>
                            <Card.Title>{props.rightCardImage}</Card.Title>
                            <Card.Text id="rightBoxText">{props.rightCardText}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Pinned;
