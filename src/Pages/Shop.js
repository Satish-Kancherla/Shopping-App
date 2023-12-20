import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetters from "../components/NewLetters/NewsLetters";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";

const Shop = () => {
    return ( 
        <>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetters/>
        <Footer />
        </>
     );
}
 
export default Shop;