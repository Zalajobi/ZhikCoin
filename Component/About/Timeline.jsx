import React, {useEffect, useState} from "react";
import TimelineItem from "./TimelineItem";
import Carousel from "react-multi-carousel";

const Timeline = (props) => {

    //Multi-Slider responsiveness
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [windowsDimension, setWindowsDimension] = useState(325);

    useEffect(() => {
        return () => {
            setWindowsDimension(window.innerWidth)
        };
    })


    return (
        <React.Fragment>
            <div className="d-flex flex-column mt-5">
                <h1 className="text-dark w-100 text-center">Timeline</h1>

                <Carousel className="mt-5" responsive={responsive} showDots={false} draggable={true} swipeable={true} autoPlay={windowsDimension !== "mobile"} infinite={true}>
                    <TimelineItem date="March 13, 2020" event="ZHIK DApps were listed on the frontpage of SAMSUNG Galaxy Store" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329272/Zhik-coin/about/1_lb42fz.png"/>
                    <TimelineItem date="August 3, 2020" event="JUST, ZHIK's first decentralized stablecoin lending platform went live" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329232/Zhik-coin/about/2_azyeyb.png"/>
                    <TimelineItem date="December 31, 2019" event="DLive and its blockchain development team joined the BitTorrent ecosystem under ZHIK." image="https://res.cloudinary.com/zalajobi/image/upload/v1625329248/Zhik-coin/about/3_qr0fze.png"/>
                    <TimelineItem date="November 12, 2019" event="ZHIK officially established a strategic partnership with Poloniex" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329269/Zhik-coin/about/4_qju3l9.png"/>
                    <TimelineItem date="October 30, 2019" event="ZHIK established an official partnership with SAMSUNG, and completed its integration with SAMSUNG Blockchain Keystore. The built-in blockchain wallet within Samsung cell phones now supports TRX. ZHIK becomes the only made-in-China blockchain supported by Samsung." image="https://res.cloudinary.com/zalajobi/image/upload/v1625329270/Zhik-coin/about/5_firxm9.png"/>
                    <TimelineItem date="October 1, 2019" event="ZHIK launched BTFS Mainnet" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329310/Zhik-coin/about/6_eaifaq.png"/>
                    <TimelineItem date="May 25, 2019" event="ZHIK's scaling solution SUN Network V1.0 (DAppChain) Mainnet officially went live" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329279/Zhik-coin/about/7_arpyr3.png"/>
                    <TimelineItem date="June 25, 2019" event="One-year anniversary of ZHIK’s Independence Day" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329296/Zhik-coin/about/8_izujzo.png"/>
                    <TimelineItem date="May 31, 2019" event="One-year anniversary of the official launch of ZHIK MainNet" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329294/Zhik-coin/about/9_ryrbhf.png"/>
                    <TimelineItem date="March 4, 2019" event="Tether partnered with ZHIK to issue the stablecoin TRC20-USDT" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329277/Zhik-coin/about/10_sxtmng.png"/>
                    <TimelineItem date="January 28, 2019" event="BitTorrent (BTT), under the umbrella of ZHIK, completed its crowdfunding on Binance's LaunchPad in 14 minutes and 41 seconds." image="https://res.cloudinary.com/zalajobi/image/upload/v1625329302/Zhik-coin/about/11_dpccij.png"/>
                    <TimelineItem date="January 17, 2019" event="niZHIK SUMMIT 2019 hosted by ZHIK opened officially in San Francisco, USA." image="https://res.cloudinary.com/zalajobi/image/upload/v1625329312/Zhik-coin/about/12_cbvxns.png"/>
                    <TimelineItem date="October 2018" event="ZHIK's decentralized application store DappHouse was established" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329304/Zhik-coin/about/13_mrz79h.png"/>
                    <TimelineItem date="August 30, 2018" event="The ZHIK virtual machine (TVM) was officially launched" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329311/Zhik-coin/about/14_zfv43a.png"/>
                    <TimelineItem date="August 23, 2018" event="The first 27 super representatives of ZHIK were born" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329326/Zhik-coin/about/15_awdnnr.png"/>
                    <TimelineItem date="July 24, 2018" event="N successfully completed the acquisition of BitTorrent and all its products, and incorporated them into ZHIK's ecosystem" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329339/Zhik-coin/about/16_gra3lx.png"/>
                    <TimelineItem date="June 25, 2018" event="ZHIK Independence Day<b/> The Genesis block has been created with the consensus of ZHIK community" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329314/Zhik-coin/about/17_ynexli.png"/>
                    <TimelineItem date="May 31, 2018" event="ZHIK launches MainNet<b/> Odyssey 2.0 is a technical milestone for ZHIK" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329330/Zhik-coin/about/18_phwdkr.png"/>
                    <TimelineItem date="December, 2017" event="ZHIK launches its open source protocol" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329340/Zhik-coin/about/19_dm1ldi.png"/>
                    <TimelineItem date="October 1, 2019" event="ZHIK Foundation is established in Singapore" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329340/Zhik-coin/about/19_dm1ldi.png"/>
                    <TimelineItem date="July, 2017" event="ZHIK launched BTFS Mainnet" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329324/Zhik-coin/about/20_hiyos4.png"/>
                    <TimelineItem date="March, 2014" event="ZHIK is established" image="https://res.cloudinary.com/zalajobi/image/upload/v1625329329/Zhik-coin/about/21_skxsqw.png"/>
                </Carousel>
            </div>
        </React.Fragment>
    )
}

export default Timeline;