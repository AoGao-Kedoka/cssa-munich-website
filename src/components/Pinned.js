import "./Pinned.css";
import useFetch from "../api/FetchData";
import ski from "../resources/images/ski.png";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

const Pinned = (props) => {
  const rootUrl = "http://cssa-munich.de:1337";
  const { loading, error, data } = useFetch(rootUrl, props.type);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  function checkPinned(data) {
    if (!data.attributes.pinned) {
      return <></>;
    }
  }

  return (
    <dir>
      {data.data.map((cssaEvents) => (
        <Container>
          {/*The three components are contained in 1 container
         2 rows - 1st row contains just 1 column, the big card, with column unit 12
                - 2nd row contains the two smaller cards in 2 columns , with column unit 6
      */}
          <Row>
            <Col class="col-12">
              {/*The following card is the big card displayed on top. */}
              <Card id="bigCard">
                <Card.Img
                  id="bigCardImg"
                  variant="top"
                  src={
                    rootUrl +
                    cssaEvents.attributes.MainImage.data.attributes.url
                  }
                  alt={cssaEvents.id}
                />
                <Card.ImgOverlay classname="d-flex align-items-end">
                  <Card.Title
                    id="bigCardTitle"
                    style={{
                      position: "absolute",
                      bottom: 50,
                      left: 10,
                    }}
                  >
                    {cssaEvents.attributes.Title}
                  </Card.Title>

                  <Card.Text
                    id="bigCardText"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 10,
                    }}
                  >
                    {cssaEvents.attributes.Date}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row>
            {/*The following is a cardgroup which contains two cards */}
            <Col classname="col-6-md">
              <Card id="leftCard" style={{ borderRadius: "40px" }}>
                <Card.Img
                  className="smallCardImg"
                  variant="top"
                  src={
                    rootUrl +
                    cssaEvents.attributes.MainImage.data.attributes.url
                  }
                  alt={cssaEvents.id}
                />
                <Card.Body>
                  <Card.Title>{cssaEvents.attributes.Title}</Card.Title>
                  <Card.Text id="leftBoxText">
                    {cssaEvents.attributes.Date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col classname="col-6-md">
              <Card id="rightCard" style={{ borderRadius: "40px" }}>
                <Card.Img
                  className="smallCardImg"
                  variant="top"
                  src={
                    rootUrl +
                    cssaEvents.attributes.MainImage.data.attributes.url
                  }
                  alt={cssaEvents.id}
                />
                <Card.Body>
                  <Card.Title>{cssaEvents.attributes.Title}</Card.Title>
                  <Card.Text id="rightBoxText">
                    {cssaEvents.attributes.Date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </dir>
  );
};

export default Pinned;
