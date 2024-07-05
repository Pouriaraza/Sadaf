"use client"
import { items } from "../../public/Item.json";
import Carousel from "react-elastic-carousel";
import styles from "./Elastic.scss";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];
export default function ElasticCarousel() {
    const { elastic } = items;
    return (
        <div className="container">
            <div className="title">
                <h1>Brand Design</h1>
            </div>
            <div className={styles.contWrapper}>
                <Carousel breakPoints={breakPoints}>
                    {elastic.map((item) => (
                        <div
                            key={item.id}
                            className={styles.card}
                        >
                            <img src={item.imageUrl} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
