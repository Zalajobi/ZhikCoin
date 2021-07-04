import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../Component/Header";
import Hero from "../Component/LandingPage/Hero";
import Footer from "../Component/Footer";
import Tokenomics from "../Component/LandingPage/Tokenomics";
import Technical from "../Component/LandingPage/Technical";

export default function Home() {
  return (
      <React.Fragment>
        <Head>
          <title>ZhikCoin</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


        <div className="d-flex flex-column">
            <Header/>

            <Hero/>

            <Tokenomics/>

            <Technical/>
          <Footer/>
        </div>
      </React.Fragment>
  )
}
