import React from "react";

const TimelineItem = (props) => {
    return (
        <React.Fragment>
            <div style={{height: '300px', background: `url(${props.image})`, backgroundSize: 'cover', boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)'}} className="d-flex flex-column align-items-center justify-content-end slider">
                <h4 className="my-2 text-white text-center">{props.event}</h4>
                <p className="font-weight-lighter text-white">{props.date}</p>
                {/*<i className="ri-arrow-up-s-line font-weight-lighter text-white"></i>*/}
            </div>
        </React.Fragment>
    )
}

export default TimelineItem;