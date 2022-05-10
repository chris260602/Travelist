import React, { Fragment } from 'react'
import classes from './productList.module.css'
import ProductCard from './components/productCard'
import ProductList_data from './components/productCard_data'

const ProductList = (props) => {

    const listItems = ProductList_data.map((item) => (
        <Fragment>
          <ProductCard item={item} isAdmin={props.isAdmin} />
        </Fragment>
      ));
    
    return <div className={classes.product_list}>{listItems}</div>;
}

export default ProductList