import React from 'react'
import CategoryContainer from './CategoryContainer/CategoryContainer'
import Card from '@material-ui/core/Card';
import './Category.css';

function Category() {
    return (
        <div className="category">

            <CategoryContainer className="category__dineOut" name="Order Food Online" img="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png" />
            <CategoryContainer className="category__dineOut" name="Go out for a meal" img="https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png" />
            <CategoryContainer className="category__dineOut" name="Nightlife & Clubs" img="https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png" />
            <CategoryContainer className="category__dineOut" name="Zomato Pro" img="https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png" />

        </div>
    )
}

export default Category
