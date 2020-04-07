import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import FileBase64 from 'react-file-base64';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Resturant extends Component {
    constructor() {
        super()
        this.state = {
            checkbox: true,
            shopFiles: [],
            AdminFiles: []
        }
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    handleCheckbox = () => {
        this.setState({ ...this.state, checkbox: false })
    }

    getFilesShop = (files) => {
        this.setState({ shopFiles: files })
    }
    getFilesAdmin = (files) => {
        this.setState({ AdminFiles: files })
    }
    render() {
        console.log(this.state.files)
        return (
            <div className="animated fadeIn">
                <Card>
                    <h4 className="text-muted" style={{ padding: '20px', borderBottom: "inset" }}>Edit Shop</h4>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label className="text-muted">drftgf</Label>
                                        <Input type="text" id="text-input" name="text-input" placeholder="drftgf" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">E-Mail Address</Label>
                                        <Input type="email" id="email-input" name="email-input" placeholder="d***m@gmail.com" autoComplete="email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Cuisine</Label>
                                        <Input type="select" name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">INDIAN</option>
                                            <option value="2">SOUTH INDIAN</option>
                                            <option value="3">WESTERN</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Phone</Label>
                                        <Input type="number" id="number-input" name="number-input" placeholder="987978***" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Password</Label>
                                        <Input type="password" id="password-input" name="password-input" placeholder="******" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Repeat Password</Label>
                                        <Input type="password" name="password1-input" id="password1-input" placeholder="******" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Status</Label>
                                        <Input type="select" name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Status</option>
                                            <option value="2">Onboarding</option>
                                        </Input>
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <br />
                                            <FormGroup>
                                                <Label className="text-muted">Everyday</Label>	&nbsp;	&nbsp;	&nbsp;	&nbsp;
                                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="everyday" value="" onClick={() => this.handleCheckbox()} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label className="text-muted">Open Shop</Label>
                                                <Input type="time" id="text-input" name="open-input" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label className="text-muted">Close Shop</Label>
                                                <Input type="time" id="text-input" name="close-input" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {this.state.checkbox === false ?
                                        <Row >
                                            <Col>
                                                <br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="sunday" name="sunday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="sunday">Sunday</Label>
                                                </FormGroup>
                                                <br /><br /><br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="monday" name="monday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="monday">Monday</Label>
                                                </FormGroup>
                                                <br /><br /><br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="Tuesday" name="Tuesday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="tuesday">Tuesday</Label>
                                                </FormGroup>
                                                <br /><br /><br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="Wednesday" name="Wednesday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="Wednesday">Wednesday</Label>
                                                </FormGroup>
                                                <br /><br /><br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="Thursday" name="Thursday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="Thursday">Thursday</Label>
                                                </FormGroup>
                                                <br /><br /><br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="Friday" name="Friday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="Friday">Friday</Label>
                                                </FormGroup>
                                                <br /><br />
                                                <FormGroup check className="checkbox">
                                                    <Input className="form-check-input" type="checkbox" id="Saturday" name="Saturday" value="" />
                                                    <Label check className="form-check-label" className="text-muted" htmlFor="Saturday">Saturday</Label>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Open Shop</Label>
                                                    <Input type="time" id="text-input" name="open-input" />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="text-muted">Close Shop</Label>
                                                    <Input type="time" id="text-input" name="close-input" />
                                                </FormGroup>
                                            </Col>
                                        </Row> : null}
                                    <Row>
                                        <Col md="6">
                                            <Label className="text-muted">Shop Banner</Label>
                                            <img src={this.state.shopFiles && this.state.shopFiles[0] && this.state.shopFiles[0].base64} alt="" style={{ width: '100%', maxHeight: '250px' }} >
                                            </img>
                                            <FileBase64
                                                multiple={true}
                                                onDone={(file) => this.getFilesShop(file)} />
                                        </Col>
                                        <Col md="6">
                                            <Label className="text-muted">admin shops create image</Label>
                                            <img src={this.state.AdminFiles && this.state.AdminFiles[0] && this.state.AdminFiles[0].base64} alt="" style={{ width: '100%', maxHeight: '250px' }} ></img>
                                            <FileBase64
                                                multiple={true}
                                                onDone={(file) => this.getFilesAdmin(file)}>
                                            </FileBase64>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <FormGroup check inline>
                                        <Label className="text-muted">Is veg pure veg ?</Label>&nbsp;&nbsp;
                                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                        <Label className="text-muted">Yes</Label>&nbsp;&nbsp;
                                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                        <Label className="text-muted">No</Label>&nbsp;&nbsp;
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                        <Label className="text-muted">Min Amount</Label>&nbsp;&nbsp;
                                            <Input type="number" id="number-input" name="number-input" placeholder="Min Amount" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Offer in Percentage</Label>&nbsp;&nbsp;
                                            <Input type="number" id="number-input" name="number-percentage-input" placeholder="Offer in Percentage" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Max Delivery Time</Label>&nbsp;&nbsp;
                                            <Input type="number" id="Delivery-input" name="Delivery-input" placeholder="Max Delivery Time" />
                                    </FormGroup>
                                    <FormGroup >
                                        <Label className="text-muted">Description</Label>
                                        <Input type="textarea" name="description-input" id="description-input" placeholder="Discription..." />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Location</Label>
                                        <Input type="text" id="location-input" name="location-input" placeholder="location" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted">Address</Label>
                                        <Input type="text" id="address-input" name="address-input" placeholder="address" />
                                    </FormGroup>
                                    <div style={{ height: '100vh', width: '100%' }}>
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
                                </Col>
                            </Row>

                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default Resturant;
