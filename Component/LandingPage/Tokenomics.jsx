import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";

const Tokenomics = (props) => {
    return (
        <React.Fragment>
            <Container id="tokemonics" className="mb-5">
                <div>
                    <h2>With over 250,690 active holders and market capitalization of 19,320,000,000.00, ZHIK is the fastest-growing public chain</h2>

                    <Row className="bg-white">
                        <Col lg="4" className="d-flex align-items-center justify-content-center border-right" style={{height: '120px'}}>
                            <div className="d-flex flex-column align-items-center justify-content-center w-75">
                                <CountUp className="counter-up" end={250690} start={0} duration={15} separator=","/>
                                <p className="text-black-50">Holders</p>
                            </div>
                        </Col>

                        <Col lg="4" className="d-flex align-items-center justify-content-center border-right" style={{height: '120px'}}>
                            <div className="d-flex flex-column align-items-center justify-content-center w-75">
                                <h2 className="counter-up">$<CountUp end={19320000000} start={0} duration={15} separator=","/></h2>
                                <p className="text-black-50">Fully Diluted Market Cap</p>
                            </div>
                        </Col>

                        <Col lg="4" className="d-flex align-items-center justify-content-center" style={{height: '120px'}}>
                            <div className="d-flex flex-column align-items-center justify-content-center w-75">
                                <h2 className="counter-up">$<CountUp className="counter-up" end={10044830783} start={0} duration={15} separator=","/></h2>
                                <p className="text-black-50">Circulating Market Cap</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Tokenomics;