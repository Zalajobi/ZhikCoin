import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Owner from "../../Component/About/Owner";
import Foundation from "../../Component/About/Foundation";
import Timeline from "../../Component/About/Timeline";


export default function Home() {
    return (
        <React.Fragment>
            <div className="d-flex flex-column">
                <Header/>

                <Owner/>
                
                <Timeline/>

                <Foundation/>

                <Footer/>
            </div>
        </React.Fragment>
    )
}