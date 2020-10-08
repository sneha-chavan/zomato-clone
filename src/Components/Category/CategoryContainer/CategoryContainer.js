
import { Card } from '@material-ui/core';
import { Category } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import zomato from '../../../config/zomato';
import './CategoryContainer.css';


function CategoryContainer({ name, img }) {
    const [all_categories, setAll_Categories] = useState([]);

    useEffect(async () => {
        const response = await zomato
            .get(`categories`)
            .then(response => {
                setAll_Categories(response.data.categories)
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    console.log(all_categories);


    return (
        <div className="categoryContainer">
            {/* SET category radius and its transition*/}
            <Card className="categoryContainer__card">
                <img className="categoryContainer__cardImage" src={img} />
                <p className="categoryContainer__cardTitle">{name}</p>
            </Card>
        </div>
    )
}

export default CategoryContainer
