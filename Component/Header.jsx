import React, {useEffect, useState} from "react";
import Web3 from "web3"
import {Button, Container, Nav, Navbar} from "react-bootstrap";


const Header = (props) => {

    let web3 = new Web3()

    // Connect MetaMask
    function connectMetamask() {
        if(window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable().then(function() {
                    web3.eth.getAccounts((err, res) => {
                        localStorage.setItem('address', res[0])
                        // console.log(localStorage.getItem('address'))
                    })
                    setStatus('Connected')
                });
            } catch (e) {
                console.log('Access Denied')
            }
        }
        else if (window.web3) {
            web3 = new Web3(web3.currentProvider);
        }
        else {
            alert("Please install MetaMask !");
        }
    }

    const [status, setStatus] = useState('Connect');
    const [bgHeader, setBgHeader] = useState('transparent');

    useEffect(() => {
        //Change the background of the Header on Scroll
        window.onscroll = () => {
            if (window.scrollY >= 150) {
                setBgHeader('dark')
            }
            else
                setBgHeader('transparent')
        }
    })

    return (
        <section>
            <Navbar bg={bgHeader} expand="lg" sticky="top" style={{height: "70px"}} id="header">
                <Container>
                    <Navbar.Brand href="/" className="text-white">ZhikCoin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto w-50">
                            <Nav.Link href="/" className="nav-link mx-auto text-white text-uppercase">Home</Nav.Link>
                            <Nav.Link href="/portfolio" className="nav-link mx-auto text-white text-uppercase">my portfolio</Nav.Link>
                            <Nav.Link href="/about" className="nav-link mx-auto text-white text-uppercase">About</Nav.Link>
                            <Button className="mx-auto btn btn-outline-info bg-transparent" onClick={connectMetamask}><i className="icofont-plugin pr-2"></i>{status}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header;