import React from "react";

const PageDescription = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column w-100 align-items-center justify-content-end text-white" style={{background: 'url(https://res.cloudinary.com/zalajobi/image/upload/v1625333290/Zhik-coin/about/bg-about_i2qtpr.svg)', backgroundSize: 'cover', height: '200px'}}>
                <h1>{props.desc}</h1>
            </div>
        </React.Fragment>
    )
}

export default  PageDescription;