import React from 'react';
import categoryCardData from './categoryCardData'
import classes from './categoryCard.module.css'
const CategoryCard =() =>{
    console.log(categoryCardData);
    const listItems = categoryCardData.map((item) =>
        <div className={classes.card} key={item.id}>
            <div className={classes.card_img}>
                <img src={item.img} alt="error"/>
            </div>
            <div className={classes.card_header}>
                <p>{item.categoryName}</p>
            </div>
        </div>
    )

    return(
        <div className={classes.category_list}>
            {listItems}
        </div>
    )
}

export default CategoryCard;