import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Col, Row, Card, Image, Spinner, Alert} from 'react-bootstrap';
import styles from '../styles/ItemDetails.module.css';
import {Link} from "react-router-dom";
import {getProductDetails} from "../reguests/products";
import {useDispatch} from "react-redux";
import {addProduct} from "../store/action";

const ItemDetails = ({id}) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProductDetails(id)
            .then((product) => {
                setProduct(product);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setSelectedQuantity(parseInt(event.target.value, 10));
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct(id, selectedColor, selectedSize, selectedQuantity, product.price));
    };

    if (loading) {
        return (
            <Container className={styles.container}>
                <Row className="justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className={styles.container}>
                <Row className="justify-content-center">
                    <Alert variant="danger">
                        Error fetching data. Please try again later.
                    </Alert>
                </Row>
            </Container>
        );
    }

    return (
        <Container className={styles.container}>
            <Card>
                <Row>
                    <Col sm={4}>
                        <Image src={product.image} alt={product.title} fluid className={styles.picture}/>
                    </Col>
                    <Col sm={8}>
                        <Card.Body>
                            <Card.Title className={styles.title}>{product.title}</Card.Title>
                            <Card.Text className={styles.description}>{product.description}</Card.Text>
                            <Form fluid>
                                <Form.Group as={Row}>
                                    <Form.Label column md="2">
                                        Quantity
                                    </Form.Label>
                                    <Col md="2">
                                        <Form.Control type="number" min={1} value={selectedQuantity}
                                                      onChange={handleQuantityChange}/>
                                    </Col>
                                </Form.Group>
                                <Row className={styles.fieldsRow}>
                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Color
                                        </Form.Label>
                                        <Col md="4">
                                            <Form.Control as="select" value={selectedColor}
                                                          onChange={handleColorChange}>
                                                <option value="">Select Color</option>
                                                {product.colors.map((choice) => (
                                                    <option key={choice.id} value={choice.name}>
                                                        {choice.name}
                                                    </option>))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Size
                                        </Form.Label>
                                        <Col md="4">
                                            <Form.Control as="select" value={selectedSize}
                                                          onChange={handleSizeChange}>
                                                <option value="">Select Size</option>
                                                {product.sizes.map((choice) => (
                                                    <option key={choice.id} value={choice.name}>
                                                        {choice.name}
                                                    </option>))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>
                <Row className={styles.bottomRow}>
                    <Col sm={8}>
                        <Card.Text className={styles.price}>Price: ${product.price}</Card.Text>
                    </Col>
                    <Col sm={4} className={styles.buttonsRow}>
                        <Button variant="primary" className={styles.buttons}><Link to={"/catalog"}
                                                                                   className={styles.goBack}>Go
                            back</Link></Button>
                        <Button variant="primary" className={styles.buttons} onClick={handleAddToCart}><Link to={"/cart"} className={styles.goBack}>Add to
                            Cart</Link></Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ItemDetails;
