import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    Col,
    FormGroup,
    Input,
    Row,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <Row style={{ padding: '20px' }}>
                        <Col>
                            <span className="text-danger">** Demo Mode : No Permission to Edit and Delete.</span>
                        </Col>
                        <Col >
                            <Button className="btn btn-info" style={{ float: 'right' }}><Link to="/add-product" className="text-dark">Add Product</Link></Button>
                        </Col>
                    </Row>
                    <h4 className="text-muted" style={{ padding: '20px', borderBottom: "inset" }}>ADDONS</h4>
                    <Row>
                        <Col md="5" style={{ textAlign: 'center' }}>
                            <Button className="btn btn-info" disabled>Copy</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Csv</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Excel</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Print</Button>&nbsp;&nbsp;
                        <Button className="btn btn-info" disabled>Pdf</Button>
                        </Col>
                    </Row>

                    <CardBody>
                        <FormGroup row >
                            <Col md="1">
                                <Button className="btn btn-info">Search</Button>
                            </Col>
                            <Col md="4">
                                <Input type="text" id="search-input" name="search-input" placeholder="search.." />
                            </Col>
                        </FormGroup>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>SI.NO</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ketchup</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Barbeque sauce	</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Tomato</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Capsicum</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Onions</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Red chilli</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Sauce</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Pepper</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Cheese</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                        <p className="text-muted">Showing 1 to 10 of 10 entries</p>
                        <Pagination>
                            <PaginationItem>
                                <PaginationLink previous tag="button"></PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink tag="button">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next tag="button"></PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Product;
