import React from "react";
import {Carousel, Container} from "react-bootstrap";

const Hero = (props) => {
    return (
        <React.Fragment>
            <section id="hero">
                <Container id="landing-container" className="w-100 h-100">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
                        <h1 className="text-uppercase text-white">decentralize the web</h1>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Hero;