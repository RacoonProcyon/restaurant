import React, { Component } from 'react';
import { Card, Row, Col, CardBody, Button, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Dispatcher.css';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Dispatcher extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <Row style={{ padding: '10px', borderBottom: "inset" }}>
              <Col className="textHover" >
                <Link to="/dispatcher" style={{ fontSize: '15px', fontWeight: 'lighter' }}>Incomming Orders</Link>
              </Col>
              <Col className="textHover">
                <Link to="/accepted" style={{ fontSize: '15px', fontWeight: 'lighter' }}>Accepted Orders</Link>
              </Col>
              <Col className="textHover">
                <Link to="/ongoing" style={{ fontSize: '15px', fontWeight: 'lighter' }}>Ongoing Orders</Link>
              </Col>
              <Col className="textHover">
                <Link to="/cancelled" style={{ fontSize: '15px', fontWeight: 'lighter' }}>Cancelled Orders</Link>
              </Col>
            </Row>
            <Row>
              <Col >
                <h4 className=" text-muted">CUSTOMER PENDING LIST</h4>
                <Card>
                  <CardBody className="scrollView" style={{ backgroundColor: '#da4241e0' }}>
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs="3" sm="3" lg="3">
                        <div>
                          <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="" style={{ width: '100%' }}></img>
                        </div>
                      </Col>
                      <Col xs="9" sm="9" lg="9">
                        <div>
                          <strong className=" text-light">#60</strong><br />
                          <span className=" text-light">demo</span><br />
                          <span className=" text-light">+9198*******88</span> <br />
                          <Button block color="danger" style={{ marginRight: '10px' }}>Order List <Badge color="info"> Dispute</Badge></Button>
                        </div>
                      </Col>
                    </Row>
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <div style={{ height: '100vh', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: ""}}
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
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Dispatcher;
