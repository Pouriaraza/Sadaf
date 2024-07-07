"use client"
import Navbar from "@/app/components/Navbar";
import ElasticCarousel from "@/app/components/Elastic";
import Carousal from "@itseasy21/react-elastic-carousel";
import styles from "../Elastic.scss";
import { items } from "./brandData.json";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];

const Home = () => {
    const { elastic } = items;

    return (
        <section className="work">
            <Navbar />
            <ElasticCarousel />
            <div className={styles.contWrapper}>
                <Carousal breakPoints={breakPoints}>
                    {elastic.map((item) => (
                        <div
                            key={item.id}
                            className={styles.card}
                        >
                            <div className="hoverbranditem">
                                <p>{item.title}</p>
                                <span>view more</span>
                            </div>
                            <img src={item.imageUrl} />
                        </div>
                    ))}
                </Carousal>
            </div>
        </section>
    );
}

export default Home;
