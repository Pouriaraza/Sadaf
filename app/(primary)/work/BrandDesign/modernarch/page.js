import Navbar from "@/app/components/Navbar";
import "./modernarch.scss";
import gifmaker from "../../../../../public/images/modernarch/gifmaker.png"
import formation from "../../../../../public/images/modernarch/formation.png"
import text from "../../../../../public/images/modernarch/text.png"
import pallete from "../../../../../public/images/modernarch/pallete.png"
import boxs from "../../../../../public/images/modernarch/boxs.png"
import logoinuse from "../../../../../public/images/modernarch/logoinuse.png"
import VertcialDS from "../../../../../public/images/modernarch/VertcialDS.png"
import Mockup from "../../../../../public/images/modernarch/Mockup.png"
import orange from "../../../../../public/images/modernarch/orange.png"
import pattern from "../../../../../public/images/modernarch/pattern.png"
import VertcialBig from "../../../../../public/images/modernarch/VertcialBig.png"
import freeBus from "../../../../../public/images/modernarch/freeBus.png"
import free from "../../../../../public/images/modernarch/free.png"

import iPhoneMock from "../../../../../public/images/modernarch/iPhoneMock.png"
import Signon from "../../../../../public/images/modernarch/Signon.png"

import green from "../../../../../public/images/modernarch/green.png"
import FreeBinde from "../../../../../public/images/modernarch/FreeBinde.png"
import gifmaker1 from "../../../../../public/images/modernarch/gifmaker1.png"
import bigbanner from "../../../../../public/images/modernarch/bigbanner.png"
import FreePoster from "../../../../../public/images/modernarch/FreePoster.png"
import giff3 from "../../../../../public/images/modernarch/giff3.png"
import webdesign from "../../../../../public/images/modernarch/webdesign.png"
import webdesignpic from "../../../../../public/images/modernarch/webdesignpic.png"



import Image from "next/image";

const Home = () => {
    // const { fisrpost, secendpost, treepost, fourpost } = items;
    return (
        <section className="modernarch">
            <Navbar />
            <div className="first">
                <h1>Modern Arch</h1>
                <h4 className="date">2022</h4>
                {/* <p className="description">
                    Posts are strategically designed based on the client's needs and brand guidelines to enhance engagement and increase awareness on social media. <br /> <br />Utilizing techniques such as photomontage and collage, these posts aim to create more compelling and interactive content.
                </p> */}
            </div>
            <div className="post">
                <Image src={gifmaker} alt="post" />
                <Image src={formation} alt="post" />
                <Image src={text} alt="post" />
                <Image src={pallete} alt="post" />
                <Image src={boxs} alt="post" />

                <Image src={logoinuse} alt="post" />
                <section className="arch-grid">
                    <div className="item-arch fourbox">
                        <Image src={VertcialDS} />
                    </div>
                </section>
                {/* <section className="post-grid">
                    {fisrpost.map((item) => (
                        <img src={item.imageUrl} />
                    ))}
                </section> */}
            </div>
            <div className="post">
                <div className="main-value">
                    <h2>brand value</h2>
                    <ul>
                        <li>Efficiency</li>
                        <li>Creativity</li>
                        <li>Excellence</li>
                    </ul>
                    <ul>
                        <li>Innovation</li>
                        <li>Resilience</li>
                        <li>Modernity</li>
                    </ul>
                </div>
            </div>
            <div className="post">
                <Image src={Mockup} alt="post" />
                <div className="brand">
                    <Image src={iPhoneMock} alt="post" />
                    <Image src={Signon} alt="post" />
                </div>
            </div>
            <div className="post">
                <Image src={pattern} alt="post" />
                <Image src={VertcialBig} alt="post" />
                <Image src={orange} alt="post" />
                <div className="brand">
                    <Image src={free} alt="post" />
                    <Image src={freeBus} alt="post" />
                </div>
                <Image src={green} alt="post" />
                <div className="brand">
                    <Image src={gifmaker1} alt="post" />
                    <Image src={FreeBinde} alt="post" />
                </div>
                <Image src={bigbanner} alt="post" />
                <div className="brand">
                    <Image src={FreePoster} alt="post" />
                    <Image src={giff3} alt="post" />
                </div>
            </div>
            <div className="post">
                <Image src={webdesign} alt="post" />
                <Image src={webdesignpic} alt="post" />

            </div>
        </section>
    );
}

export default Home;
