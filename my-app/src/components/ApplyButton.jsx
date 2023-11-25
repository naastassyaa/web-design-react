import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/ApplyButton.module.css';
import {getAllColors, getFilteredProducts} from "../reguests/products";

const filter = ([color, size], setData) => {
    getFilteredProducts(color, size)
        .then((products) => {
            setData(products)
        })
        .catch((error) => {
            console.log(error)
        });
}


const ApplyButton = ({setData, states}) => {
    return (
        <Button
            variant="primary" className={styles.apply} onClick={() => filter(states, setData)}>
            Apply
        </Button>
    );
};

export default ApplyButton;