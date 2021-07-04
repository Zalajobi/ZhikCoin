import React from "react";
import {Col} from "react-bootstrap";
import CountUp from "react-countup";

const BalanceValue = (props) => {
    return (
        <React.Fragment>
            <Col lg="3" className="p-2">
                <div className="token-desc-container">
                    {/*<CountUp className="counter-up" end={10044830783} start={0} duration={15} separator=","/>*/}
                    <h2 className="token-name" style={{fontSize: `${props.fontSize}`}}>{props.value}</h2>
                    <h5 className="token-name token-value-desc text-black-50">{props.description}</h5>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default BalanceValue;