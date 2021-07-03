import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const Owner = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column w-100 align-items-center justify-content-end text-white" style={{background: 'url(https://res.cloudinary.com/zalajobi/image/upload/v1625333290/Zhik-coin/about/bg-about_i2qtpr.svg)', backgroundSize: 'cover', height: '200px'}}>
                <h1>About</h1>
            </div>

            <div>
                <Container>
                    <Row >
                        <Col lg="8" className="d-flex flex-column mt-5">
                            <h2 className="font-weight-bolder"><span className="text-uppercase">Igbalajobi</span> Zhikrullah</h2>
                            <p className="text-black-50 mb-4 font-weight-bold">Founder and CEO of ZHIK</p>

                            <div className="d-flex flex-row w-100 mt-5">
                                <i className="icofont-square mt-1 mr-2" style={{color: '#ea665e'}}></i>

                                <p className="text-justify text-black-50">ZHIK has established dual headquarters in the Americas and Asia Pacific，with the establishment of more overseas offices in preparation and our team in rapid expansion. We offer employees opportunities to go on international business trips and to work on overseas posts. With ZHIK, you’ll be exposed to the most cutting-edge blockchain technology.</p>
                            </div>

                            <div className="d-flex flex-row w-100">
                                <i className="icofont-square mt-1 mr-2" style={{color: '#ea665e'}}></i>

                                <p className="text-justify text-black-50">ZHIK is now recruiting globally for members with a passion for blockchain technology. If you want to make history, come join us!</p>
                            </div>
                        </Col>

                        <Col lg="4" className="d-flex flex-column">
                            <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1625323187/Zhik-coin/black-businessman-4599849_640-removebg-preview_ccgktu.png"
                                   style={{maxHeight: '500px'}}
                                   alt="ZHIK founder"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Owner;