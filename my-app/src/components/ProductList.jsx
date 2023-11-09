import React from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom";

function ProductList() {
    const products = [
        {
            imageSrc: '/images/sport_pants.png',
            title: 'Sport pants',
            description: 'Sports pants that can be worn both for running and work. Comfortable, beautiful and at a good price. Available in three sizes S, M and L, and in three colours black, beige and light green',
            link: '',
        },
        {
            imageSrc: '/images/basic_hoodie.png',
            title: 'Basic hoodie',
            description: 'A basic hoodie for walking and sports in winter. Available in 5 colours: black, blue, dark grey, brown and white. Sizes: S, M, L, XL',
            link: '',
        },
        {
            imageSrc: '/images/sportswear.png',
            title: 'Sportswear',
            description: 'Sportswear, a great option in summer, for everyday wear or for sports. Available in three colours: black, white and grey. Sizes: S, M, L',
            link: '',
        },
    ];

    return (
        <Container style={{marginTop: "100px", marginBottom:"50px"}}>
            <Row>
                {products.map((product) => (
                    <ProductCard
                        imageSrc={product.imageSrc}
                        title={product.title}
                        description={product.description}
                        link={product.link}
                    />
                ))}
            </Row>
            <div className="text-center">
                <Button variant="primary" style={{backgroundColor:"#333", borderStyle:"none"}}>
                    <Link to={"/catalog"} style={{textDecoration: "none", color: "white"}}>Show More</Link>
                </Button>
            </div>
        </Container>
    );
}

export default ProductList;
