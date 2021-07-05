import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import BalanceValue from "./BalanceValue";

const Balance = (props) => {

    //Use State
    const [balance, setBalance] = useState(0);
    const [decimal, setDecimal] = useState(0);
    const [nonce, setNonce] = useState(0);
    const [vote, setVote] = useState(0);
    const [delegate, setDelegate] = useState(0);
    const [mintCap, setMintCap] = useState(0);
    const [minTimeBetweenMints, setMinTimeBetweenMints] = useState(0);
    const [mintingAllowedAfter, setMintingAllowedAfter] = useState(0);
    const [minter, setMinter] = useState('');
    const [checkpoint, setCheckpoint] = useState(0);
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState(' ');
    const [totalSupply, setTotalSupply] = useState('');

    useEffect(() => {
        getNonce()
        getName()
        getBalance()
        getSymbol()
        getVotes()
        getMinter()
        getMintCap()
        getMinTimeBetweenMints()
        getDecimal()
        // getDelegate()
        getMintAllowedAfter()
        getCheckpoint()
        getTotalSupply()
    });

    //Get Nonce
    async function getNonce() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/nonces?address=${localStorage.getItem('address')}`)
            setNonce(res.data)
        } catch (err) {
            setNonce(0)
        }
    }

    //Get Name
    async function getName() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/name`)
            setName(res.data)
        } catch (err) {
            setName(0)
        }
    }

    //Get Token Balance
    async function getBalance() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/balance/?walletAddress=${localStorage.getItem('address')}`)
            setBalance(res.data)
        } catch (err) {
            setBalance(0)
        }
    }

    //Get Symbol
    async function getSymbol() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/symbol`)
            setSymbol(res.data)
        } catch (err) {
            setSymbol(0)
        }
    }

    // Get Votes
    async function getVotes() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/vote?address=${localStorage.getItem('address')}`)
            setVote(res.data)
        } catch (err) {
            setVote(0)
        }
    }

    //Get Minter
    async function getMinter() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/minter`)
            setMinter(res.data)
        } catch (err) {
            setMinter(0)
        }
    }

    //Get Minter
    async function getMintCap() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/mint-cap`)
            setMintCap(res.data)
        } catch (err) {
            setMintCap(0)
        }
    }

    //Minting Allowed After
    async function getMintAllowedAfter() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/mintingAllowedAfter`)
            setMintingAllowedAfter(res.data)
        } catch (err) {
            setMintingAllowedAfter(0)
        }
    }

    //Time Between Mints
    async function getMinTimeBetweenMints() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/min-mint-time`)
            setMinTimeBetweenMints(res.data)
        } catch (err) {
            setMinTimeBetweenMints(0)
        }
    }

    //Decimal
    async function getDecimal() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/decimal`)
            setDecimal(res.data)
        } catch (err) {
            setDecimal(0)
        }
    }

    //Delegate
    async function getDelegate() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/delegate?address=${localStorage.getItem('address')}`)
            setDelegate(res.data)
        } catch (err) {
            setDelegate(0)
        }
    }

    //Checkpoint
    async function getCheckpoint() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/checkpoint?address=${localStorage.getItem('address')}`)
            setCheckpoint(res.data)
        } catch (err) {
            setCheckpoint(0)
        }
    }

    //Supply
    async function getTotalSupply() {
        try {
            const res = await axios.get(`https://zhik-coin.herokuapp.com/api/v1/web3/totalsupply`)
            setTotalSupply(res.data)
        } catch (err) {
            setTotalSupply(0)
        }
    }

    return (
        <React.Fragment>
            <div>
                <Container className="my-5">
                    <div className="d-flex flex-column">
                        <h2 className="token-name">Token <span className="text-black-50 token-value-desc">{name}</span></h2>

                        <Row>
                            <BalanceValue value={balance} description={symbol}/>

                            <BalanceValue value={nonce} description="Nonce"/>

                            <BalanceValue value={vote} description="Votes"/>

                            <BalanceValue value={minter} description="Minter" fontSize="9px"/>

                            <BalanceValue value={mintCap} description="Mint Cap"/>

                            <BalanceValue value={mintingAllowedAfter} description="Minting Allowed After"/>

                            <BalanceValue value={minTimeBetweenMints} description="Minimum Time Between Mints"/>

                            <BalanceValue value={decimal} description="Decimal"/>

                            {/*<BalanceValue value={delegate} description="Delegate"/>*/}

                            <BalanceValue value={checkpoint} description="Checkpoint"/>

                            <BalanceValue value={totalSupply} description="Total Supply"/>
                        </Row>
                    </div>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Balance;