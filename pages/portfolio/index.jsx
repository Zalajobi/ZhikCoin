import React from "react";
import Header from "../../Component/Header";
import PageDescription from "../../Component/Common/PageDescription";
import Footer from "../../Component/Footer";

const Portfolio = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column">
                <Header/>

                <PageDescription desc="Portfolio"/>

                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;