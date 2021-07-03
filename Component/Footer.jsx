import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Footer = (props) => {
    return (
        <React.Fragment>
            <div className="bg-dark">
                <Container>
                    <Row className="my-5">
                        <Col lg="3" className="d-flex flex-column px-lg-2 px-3">
                            <p className="text-white px-lg-4 mb-4">IGBALAJOBI Zhikrullah</p>

                            <div className="d-flex flex-row px-lg-4 mt-2">
                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mr-auto">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ri-facebook-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ri-instagram-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://weibo.com" target="_blank" rel="noreferrer"><i className="ri-weibo-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="ri-twitter-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center ml-auto">
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="5" className="d-flex flex-column px-lg-5 px-3">
                            <p className="text-white px-lg-5 mb-4">ZHIK Social Platform</p>

                            <div className="d-flex flex-row px-lg-5 my-2">
                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mr-auto">
                                    <a href="https://telegram.com" target="_blank" rel="noreferrer"><i className="ri-telegram-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://weibo.com" target="_blank" rel="noreferrer"><i className="ri-weibo-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="ri-twitter-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="ri-youtube-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center ml-auto">
                                    <a href="https://discord.com" target="_blank" rel="noreferrer"><i className="ri-discord-fill"></i></a>
                                </div>
                            </div>

                            <div className="d-flex flex-row px-lg-5 my-2">
                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mr-auto">
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ri-instagram-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://reddit.com" target="_blank" rel="noreferrer"><i className="ri-reddit-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center mx-auto">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ri-facebook-fill"></i></a>
                                </div>

                                <div style={{width: '35px', height: '35px'}} className="socials border border-light d-flex align-items-center justify-content-center ml-auto">
                                    <a href="https://medium.com" target="_blank" rel="noreferrer"><i className="ri-medium-fill"></i></a>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" className="d-flex flex-column px-lg-5 px-3">
                            <p className="text-white px-lg-5 mb-4">ZHIK Social Platform</p>

                            <div className="d-flex flex-column my-2 contact-us px-lg-5">
                                <p className="text-decoration-none text-white mb-0 faq"><a>FAQ</a></p>
                                <p className="text-white mb-1 ">Contact Us</p>
                                <a className="text-decoration-none text-white text-black-50" href="mailto:feedback@zhik.network"><i className="ri-mail-send-line mr-2"></i>feedback@zhik.network</a>
                                <a className="text-decoration-none text-white text-black-50" href="mailto:press@zhik.network"><i className="ri-mail-send-line mr-2"></i>press@zhik.network</a>
                                <a className="text-decoration-none text-white text-black-50" href="mailto:service@zhik.network"><i className="ri-mail-send-line mr-2"></i>service@zhik.network</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Footer;