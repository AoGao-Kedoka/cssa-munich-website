import "./Pinned.css";
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
                        <Card.ImgOverlay>
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
            <Row style={{paddingTop: "30px"}}>
                {/*The following is a cardgroup which contains two cards */}
                <Col classname="col-6-md">
                    <Card id="leftCard1" style={{borderRadius: "40px"}}>
                        <Card.Img className="smallCardImg" variant="top" style={{objectFit: "cover"}}
                                  src={props.leftCardImage1}/>
                        <Card.Body>
                            <Card.Title>{props.leftCardTitle1}</Card.Title>
                            <Card.Text id="leftBoxText">{props.leftCardDate1}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col classname="col-6-md">
                    <Card id="rightCard1" style={{borderRadius: "40px"}}>
                        <Card.Img className="smallCardImg" variant="top"
                                  src={props.rightCardImage1}/>
                        <Card.Body>
                            <Card.Title>{props.rightCardTitle1}</Card.Title>
                            <Card.Text id="rightBoxText">{props.rightCardDate1}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                {/*The following is a cardgroup which contains two cards */}
                <Col classname="col-6-md">
                    <Card id="leftCard2" style={{borderRadius: "40px"}}>
                        <Card.Img className="smallCardImg" variant="top" style={{objectFit: "cover"}}
                                  src={props.leftCardImage2}/>
                        <Card.Body>
                            <Card.Title>{props.leftCardTitle2}</Card.Title>
                            <Card.Text id="leftBoxText">{props.leftCardDate2}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col classname="col-6-md">
                    <Card id="rightCard2" style={{borderRadius: "40px"}}>
                        <Card.Img className="smallCardImg" variant="top" style={{objectFit: "cover"}}
                                  src={props.rightCardImage2}/>
                        <Card.Body>
                            <Card.Title>{props.rightCardTitle2}</Card.Title>
                            <Card.Text id="rightBoxText">{props.rightCardDate2}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Pinned;
