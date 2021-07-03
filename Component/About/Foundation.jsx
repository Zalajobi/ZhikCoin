import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
// import Image from "react-multi-carousel/dev/components/image";

const Foundation = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex> pt-5" style={{background: '#fafafa', maxHeight: '700px', height: '500px'}}>
                <Container>
                    <Row>
                        <Col lg="7" className="d-flex flex-column">
                            <h3 className="text-capitalize my-2 pl-lg-5 ml-lg-5"><span className="text-uppercase">zhik</span><br/>foundation</h3>

                            <p className="text-black-50 my-2 pl-lg-5 ml-lg-5">Since the ZHIK Foundation was<br/> founded, it has upheld its<br/> original faith of decentralizing<br/> the internet, working hard to<br/> change the world with<br/> technology.</p>
                        </Col>

                        <Col lg="5" className="d-flex flex-column">
                            <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1625334058/Zhik-coin/about/foundation_njxnf1.svg"
                                   className="w-100 h-100" alt="Background image"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Foundation;