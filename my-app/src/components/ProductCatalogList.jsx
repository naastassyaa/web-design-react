import React from 'react';
import {Container, Row} from 'react-bootstrap';
import ProductCatalogCard from "./ProductCatalogCard";

function ProductCatalogList() {
    const products = [
        {
            imageSrc: '/images/sport_pants.png',
            title: 'Sport pants',
            description: 'Sports pants that can be worn both for running. Available in three sizes S, M and L, and in three colours black, beige and light green',
            price: '130',
            link: '',
        },
        {
            imageSrc: '/images/sport_suit.png',
            title: 'Sport suit',
            description: 'Two-piece sports suit, top + bicycles. Top with cups, high-waisted bicycles. Colours: beige, milk, brown, coral. Sizes: XS, C, M',
            price: '100',
            link: '',
        },
        {
            imageSrc: '/images/basic_hoodie.png',
            title: 'Basic hoodie',
            description: 'A basic hoodie for walking and sports in winter. Available in 5 colours: black, blue, dark grey, brown and white. Sizes: S, M, L, XL',
            price: '120',
            link: '',
        },
        {
            imageSrc: '/images/sportswear.png',
            title: 'Sportswear',
            description: 'Sportswear, a great option in summer, for everyday wear or for sports. Available in three colours: black, white and grey. Sizes: S, M, L',
            price: '180',
            link: '',
        },
        {
            imageSrc: '/images/sport_shorts.png',
            title: 'Sport shorts',
            description: 'High rise sports shorts. Perfect for summer. Available colours: grey, black, pink, white. Sizes: XS, C, M, L',
            price: '96',
            link: '',
        },
        {
            imageSrc: '/images/top_trousers.png',
            title: 'Tracksuit',
            description: 'Tracksuit, top + trousers. Can be purchased separately. Available colours: white, brown, black. Sizes: S, M, L',
            price: '199',
            link: '',
        },
    ];


    return (
        <Container style={{marginTop: "50px", marginBottom:"50px"}}>
            <Row>
                {products.map((product) => (
                    <ProductCatalogCard
                        imageSrc={product.imageSrc}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        link={product.link}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProductCatalogList;