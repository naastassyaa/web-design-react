import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCatalogList from "../components/ProductCatalogList";
import OptionsCatalog from "../components/OptionsCatalog";
import {useEffect, useState} from "react";
import {getAllProducts} from "../reguests/products";

function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
     getAllProducts()
            .then((products) => {
                setProducts(products);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);


    return (
        <div className="CatalogPage">
            <Header/>
            <OptionsCatalog data={products} setData={setProducts}/>
            <ProductCatalogList data={products} loading={loading} error={error}/>
            <Footer/>
        </div>
    );
}

export default CatalogPage;
