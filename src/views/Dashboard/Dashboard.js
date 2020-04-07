import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle, Table,
  Col,
  Progress,
  Row,
  Badge,
} from 'reactstrap';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};


//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div>Order Received</div>
                <div className="text-value">+ 23</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div>Orders Delivered</div>
                <div className="text-value"> <i className="cui-arrow-top"></i> 15</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <div>Today Earnings</div>
                <div className="text-value"> <i className="cui-arrow-bottom"> </i>$400.00</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div>Monthly Earnings</div>
                <div className="text-value"> <i className="cui-arrow-top"></i>$1134.00</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="8">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">PRODUCTS SALES</CardTitle>
                    <div className="small text-muted">March 2020</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="4">
            <Card>
              <CardBody>
                <h4>RECENT DELIVERIES</h4>
                <br />
                <Row>
                  <Col xs="4" sm="2" lg="2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSLmktkJrArXh_zZVovazl5mb3lna9HXqPo7XvvviCSQAuru5C" style={{ width: "100%" }} alt="" />
                  </Col>
                  <Col xs="8" sm="10" lg="10">
                    <Link to="/dashboard" className="text-font-weight-bold"> <strong style={{ fontSize: '20px', fontWeight: 'lighter' }}>Demo <br /><Badge className="mr-1" color="info"> Delivered</Badge></strong><span className="text-muted" style={{ float: 'right', fontSize: '20px' }}> $137.00</span></Link>
                  </Col>
                </Row><br />
                <Row>
                  <Col xs="4" sm="2" lg="2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSLmktkJrArXh_zZVovazl5mb3lna9HXqPo7XvvviCSQAuru5C" style={{ width: "100%" }} alt="" />
                  </Col>
                  <Col xs="8" sm="10" lg="10">
                    <Link to="/dashboard" className="text-font-weight-bold"> <strong style={{ fontSize: '20px', fontWeight: 'lighter' }}>Demo1 <br /><Badge className="mr-1" color="info"> Delivered</Badge></strong><span className="text-muted" style={{ float: 'right', fontSize: '20px' }}> $137.00</span></Link>
                  </Col>
                </Row> <br />
                <Row>
                  <Col xs="4" sm="2" lg="2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSLmktkJrArXh_zZVovazl5mb3lna9HXqPo7XvvviCSQAuru5C" style={{ width: "100%" }} alt="" />
                  </Col>
                  <Col xs="8" sm="10" lg="10">
                    <Link to="/dashboard" className="text-font-weight-bold"> <strong style={{ fontSize: '20px', fontWeight: 'lighter' }}>Demo2 <br /><Badge className="mr-1" color="info"> Delivered</Badge></strong><span className="text-muted" style={{ float: 'right', fontSize: '20px' }}> $137.00</span></Link>
                  </Col>
                </Row> <br />
                <Row>
                  <Col xs="4" sm="2" lg="2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSLmktkJrArXh_zZVovazl5mb3lna9HXqPo7XvvviCSQAuru5C" style={{ width: "100%" }} alt="" />
                  </Col>
                  <Col xs="8" sm="10" lg="10">
                    <Link to="/dashboard" className="text-font-weight-bold"> <strong style={{ fontSize: '20px', fontWeight: 'lighter' }}>Demo3 <br /><Badge className="mr-1" color="info"> Delivered</Badge></strong><span className="text-muted" style={{ float: 'right', fontSize: '20px' }}> $137.00</span></Link>
                  </Col>
                </Row> <br />
                <Row>
                  <Col xs="4" sm="2" lg="2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSLmktkJrArXh_zZVovazl5mb3lna9HXqPo7XvvviCSQAuru5C" style={{ width: "100%" }} alt="" />
                  </Col>
                  <Col xs="8" sm="10" lg="10">
                    <Link to="/dashboard" className="text-font-weight-bold"> <strong style={{ fontSize: '20px', fontWeight: 'lighter' }}>Demo4 <br /><Badge className="mr-1" color="info"> Delivered</Badge></strong><span className="text-muted" style={{ float: 'right', fontSize: '20px' }}> $137.00</span></Link>
                  </Col>
                </Row> <br />
                <Row>
                  <Col xs="4" sm="2" lg="2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSLmktkJrArXh_zZVovazl5mb3lna9HXqPo7XvvviCSQAuru5C" style={{ width: "100%" }} alt="" />
                  </Col>
                  <Col xs="8" sm="10" lg="10">
                    <Link to="/dashboard" className="text-font-weight-bold"> <strong style={{ fontSize: '20px', fontWeight: 'lighter' }}>Demo5 <br /><Badge className="mr-1" color="info"> Delivered</Badge></strong><span className="text-muted" style={{ float: 'right', fontSize: '20px' }}> $137.00</span></Link>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card>
          <CardBody>
            <h4>RECENT ORDERS</h4>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Customer Name</th>
                  <th>Restaurant Name</th>
                  <th>Delivery Person</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>234</td>
                  <td>demo1</td>
                  <td>kfc</td>
                  <td>user demo</td>
                  <td>
                    <Badge color="info">Complete</Badge>
                  </td>
                  <td>$234.00</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>demo1</td>
                  <td>kfc</td>
                  <td>user demo</td>
                  <td>
                    <Badge color="info">Complete</Badge>
                  </td>
                  <td>$234.00</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>demo1</td>
                  <td>kfc</td>
                  <td>user demo</td>
                  <td>
                    <Badge color="info">Complete</Badge>
                  </td>
                  <td>$234.00</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>demo1</td>
                  <td>kfc</td>
                  <td>user demo</td>
                  <td>
                    <Badge color="info">Complete</Badge>
                  </td>
                  <td>$234.00</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>demo1</td>
                  <td>kfc</td>
                  <td>user demo</td>
                  <td>
                    <Badge color="info">Complete</Badge>
                  </td>
                  <td>$234.00</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
