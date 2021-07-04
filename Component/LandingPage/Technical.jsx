import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const Technical = (props) => {
    return (
        <React.Fragment>
            <Container className="d-flex flex-column mt-4 mb-5">
                <h2 className="text-center">Technical</h2>

                <p className="text-center">ZHIK is one of the largest blockchain-based operating systems in the world.</p>
                <Row>
                    <Col lg="4" className="p-2" style={{minHeight: '265px', maxHeight: '280px', height: '3750px'}}>
                        <div lg="4" className="card-container pb-3 pb-lg-4">
                            <div className="mx-3 d-flex align-items-center flex-row border-bottom">
                                <h3 className="mr-auto my-4">High-throughput</h3>
                                <div className="ml-auto my-4" style={{height: '30px', width: '30px'}}>
                                    <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1625411851/Zhik-coin/Index/1_hppjsx.png" className="w-100 h-100"/>
                                </div>
                            </div>

                            <p className="ml-3 text-left my-3 pr-lg-5">High throughput is achieved by improving the TPS in ZHIK, which has surpassed Bitcoin and Ethereum, to a daily-use practical degree.</p>
                        </div>
                    </Col>

                    <Col lg="4" className="p-2" style={{maxHeight: '400px', height: '370px'}}>
                        <div lg="4" className="card-container pb-3 pb-lg-1">
                            <div className="mx-3 d-flex align-items-center flex-row border-bottom">
                                <h3 className="mr-auto my-4">High-scalability</h3>
                                <div className="ml-auto my-4" style={{height: '30px', width: '30px'}}>
                                    <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1625411851/Zhik-coin/Index/2_cskw7y.png" className="w-100 h-100"/>
                                </div>
                            </div>

                            <p className="ml-3 text-left my-3 pr-lg-5">Applications are given a wider variety of ways to be deployed in TRON because of its scalability and highly effective smart contract. It can support enormous numbers of users.</p>
                        </div>
                    </Col>

                    <Col lg="4" className="p-2" style={{maxHeight: '400px', height: '370px'}}>
                        <div lg="4" className="card-container pb-3 pb-lg-1">
                            <div className="mx-3 d-flex align-items-center flex-row border-bottom">
                                <h3 className="mr-auto my-4">High-availability
                                </h3>
                                <div className="ml-auto my-4" style={{height: '30px', width: '30px'}}>
                                    <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1625411851/Zhik-coin/Index/3_q3neev.png" className="w-100 h-100"/>
                                </div>
                            </div>

                            <p className="ml-3 text-left my-3 pr-lg-5">More reliable network structure, user asset, intrinsic value and a higher degree of decentralization consensus come with an improved rewards distribution mechanism.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Technical;