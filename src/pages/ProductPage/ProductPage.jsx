import React, { Fragment } from 'react'
import classes from './ProductPage.module.css'
import ProductList from './components/productList'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Products = () => {
    return (
        <Fragment>
            <Header/>
            <div className={classes.container}>
                <div className={classes.titleOfSection}>
                    <p>
                        Products
                    </p>
                </div>
                <ProductList/>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Products