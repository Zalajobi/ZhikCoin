import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import axios from "axios";


const Tokenomics = (props) => {

    const [price, setPrice] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    useEffect(() => {
        getPrice()
    });

    async function getPrice() {
        try {
            const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=Uniswap&vs_currencies=usd&include_market_cap=true`)
            setPrice(res.data.uniswap.usd)
            setMarketCap(res.data.uniswap.usd_market_cap)
        } catch (err) {
            setPrice(0)
            setMarketCap(0)
        }
    }

    return (
        <React.Fragment>
            <Container id="tokemonics" className="mb-5">
                <div>
                    <h2>With over 250,690 active holders and market capitalization of 19,320,000,000.00, ZHIK is the fastest-growing public chain</h2>

                    <Row className="bg-white">
                        <Col lg="4" className="d-flex align-items-center justify-content-center border-right" style={{height: '120px'}}>
                            <div className="d-flex flex-column align-items-center justify-content-center w-75">
                                <CountUp className="counter-up" end={250690} start={0} duration={8} separator=","/>
                                <p className="text-black-50">Holders</p>
                            </div>
                        </Col>

                        <Col lg="4" className="d-flex align-items-center justify-content-center border-right" style={{height: '120px'}}>
                            <div className="d-flex flex-column align-items-center justify-content-center w-75">
                                <h2 className="counter-up">$<CountUp end={price} start={0} duration={8} separator=","/></h2>
                                <p className="text-black-50">Price</p>
                            </div>
                        </Col>

                        <Col lg="4" className="d-flex align-items-center justify-content-center" style={{height: '120px'}}>
                            <div className="d-flex flex-column align-items-center justify-content-center w-75">
                                <h2 className="counter-up">$<CountUp end={marketCap} start={0} duration={8} separator=","/></h2>
                                <p className="text-black-50">Market Capitalization</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Tokenomics;