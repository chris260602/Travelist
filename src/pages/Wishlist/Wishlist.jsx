import React, { Fragment } from 'react'
import classes from './Wishlist.module.css'
import ProductList from './components/productList'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Wishlist = () => {
    return (
        <Fragment>
            <Header/>
            <div className={classes.container}>
                <div className={classes.titleOfSection}>
                    <p>
                        Wishlist
                    </p>
                </div>
                <ProductList/>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Wishlist