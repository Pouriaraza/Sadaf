import Navbar from "@/app/components/Navbar";
import "./SocialMedia1.scss";
import firstpostimg from "../../../../public/images/firstpost/post.png"
import secendpostimg from "../../../../public/images/secendpost/secendpost.png"
import treepostimg from "../../../../public/images/treepost/treepost.png"
import fourpostimg from "../../../../public/images/fourpost/fourpost.png"


import { items } from "./SocialMedia1.json";
import Image from "next/image";

const Home = () => {
    const { fisrpost, secendpost, treepost, fourpost } = items;
    return (
        <section className="SocialMedia1">
            <Navbar />
            <div className="first">
                <h1>INSTAGRAM POST DESIGN</h1>
                <h4 className="date">2023</h4>
                <p className="description">
                    Posts are strategically designed based on the client's needs and brand guidelines to enhance engagement and increase awareness on social media. <br /> <br />Utilizing techniques such as photomontage and collage, these posts aim to create more compelling and interactive content.
                </p>
            </div>
            <div className="post">
                <Image src={firstpostimg} alt="post" />
                <section className="post-grid">
                    {fisrpost.map((item) => (
                        <img src={item.imageUrl} />
                    ))}
                </section>
            </div>

            <div className="post">
                <Image src={secendpostimg} alt="post" />
                <section className="post-grid">
                    {secendpost.map((item) => (
                        <img src={item.imageUrl} />
                    ))}
                </section>
            </div>

            <div className="post">
                <Image src={treepostimg} alt="post" />
                <section className="post-grid">
                    {treepost.map((item) => (
                        <img src={item.imageUrl} />
                    ))}
                </section>
            </div>

            <div className="post fourpost">
                <Image src={fourpostimg} alt="post" />
                <section className="post-grid">
                    {fourpost.map((item) => (
                        <img src={item.imageUrl} />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default Home;
