import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class AddAddOn extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardBody>
                        <h4 className="text-muted" style={{ borderBottom: "inset", padding: '10px' }}>Create Addon</h4>
                        <p className="text-muted">Shop Name</p>
                        <p className="text-dark">Kfc</p>
                        <FormGroup>
                            <Label className="textmuted">Name</Label>
                            <Input type="text" className="form-control" placeholder="Name..." />
                        </FormGroup>
                        <Button type="button" className="btn btn-info btn-lg">Save</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AddAddOn;
