import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCatalogList from "../components/ProductCatalogList";
import OptionsCatalog from "../components/OptionsCatalog";

function CatalogPage() {
    return (
        <div className="CatalogPage">
            <Header/>
            <OptionsCatalog/>
            <ProductCatalogList/>
            <Footer/>
        </div>
    );
}

export default CatalogPage;
