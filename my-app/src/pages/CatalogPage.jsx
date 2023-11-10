import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCatalogList from "../components/ProductCatalogList";
import OptionsCatalog from "../components/OptionsCatalog";
import {useState} from "react";
import products from "../data/data"

function CatalogPage() {
    const [items, setItems] = useState(products)

    return (
        <div className="CatalogPage">
            <Header/>
            <OptionsCatalog data={items} setData={setItems}/>
            <ProductCatalogList data={items}/>
            <Footer/>
        </div>
    );
}

export default CatalogPage;
