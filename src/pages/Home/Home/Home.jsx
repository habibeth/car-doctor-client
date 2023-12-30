import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <PopularProducts></PopularProducts>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;