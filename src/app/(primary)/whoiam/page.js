import Navbar from "@/app/components/Navbar";
import "./style.scss";
import Image from "next/image";
// import Whoiamimg from "../../../../public/Imgs/Frame.png"

const Home = () => {

    return (
        <div className="whoiam">
            <Navbar />
            <section className="grid-pagewho">
                <div className="imge-pagewho">
                    {/* <Image src={Whoiamimg} alt="Whoiamimg" /> */}
                    <img src="/Imgs/Frame.png" />
                </div>
                <div className="dis-pagewho">
                    <h2>Who Am I ?</h2><br /><br />
                    <p>I am a Marketing Strategist with a flair for creativity and a knack for strategy. <br />  <br />My journey started in <span className="blue">Tehran</span>, where I delved into the world of <span className="yellow">Graphic Design</span>, and took me to Canada, where I studied <span className="yellow">Marketing</span>. Now, I blend these skills while enjoying the vibrant Canadian lifestyle. <br /><br />From crafting websites to designing social media posts, campaigns, brand development, and marketing strategy, I bring a dynamic approach to every project. <br /><br /><span className="blue">Curiosity is my compass</span>, guiding me to constantly learn, ask questions, and uncover new insights. For me, <span className="yellow">life is a thrilling adventure filled with endless opportunities for discovery and growth.</span></p>
                </div>
            </section>
        </div>
    );
}

export default Home;
