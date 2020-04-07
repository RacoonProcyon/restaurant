import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const backImg = "https://www.wallpaperup.com/uploads/wallpapers/2017/05/06/1089084/bcdc749650b552868396f382b878be65-700.jpg"
class Location extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <div className="app flex-row align-items-center" style={{ backgroundImage: `url(${backImg})` }}>
                <Container >
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6" >
                            <Card className="mx-4"  >
                                <CardBody className="p-4">
                                    <Form>
                                        <h1>Location</h1>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Enter Shop  Location" autoComplete="Loaction" style={{ padding: "20px", paddingBottom: "30px", paddingTop: "30px" }} required />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="text" placeholder="Address" autoComplete="address" style={{ padding: "20px", paddingBottom: "30px", paddingTop: "30px" }} required />
                                        </InputGroup>
                                        <div style={{ height: '30vh', width: '100%',paddingBottom:'20px' }}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: "" }}
                                                defaultCenter={this.props.center}
                                                defaultZoom={this.props.zoom}
                                            >
                                                <AnyReactComponent
                                                    lat={59.955413}
                                                    lng={30.337844}
                                                    text="My Marker"
                                                />
                                            </GoogleMapReact>
                                        </div>                                      
                                          <Row>
                                            <Col xs="12" sm="6">
                                                <Link to="/register">
                                                    <Button color="danger" block>Previous</Button>
                                                </Link>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Link to="/login">
                                                    <Button color="success" block>Rgister</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter className="p-4" >
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Location;
