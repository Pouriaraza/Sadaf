import Navbar from "@/app/components/Navbar";
import "./style.scss";
import ElasticCarousel from "@/app/components/Elastic";


const Home = () => {

    return (
        <section className="work">
            <Navbar />
            <ElasticCarousel />
        </section>
    );
}

export default Home;
