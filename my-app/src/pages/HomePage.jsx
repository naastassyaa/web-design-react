import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

function HomePage() {
    return (
        <div className="HomePage">
            <Header/>
            <Heading/>
            <ProductList/>
            <Footer/>
        </div>
    );
}

export default HomePage;