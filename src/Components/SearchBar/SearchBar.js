import React, { useState } from 'react'
import './SearchBar.css'
import zomato from '../../config/zomato';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, NativeSelect } from '@material-ui/core';

function SearchBar() {
    const [cuisine, setCuisine] = useState('');
    const [nearByRestaurant, setNearByRestaurant] = useState([]);
    const [operation, setOperation] = useState("Search");

    // cuisine ='' , nearByReastaurant=[], operation ='search'

    const handleSearch = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(async (position) => {
            setOperation("Fetching location....")
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log("lat= " + lat + " lon= " + lon);

            const url = await zomato
                .get(`search?start=0&count=10&lat=${lat}&lon=${lon}&radius=5000000&cuisines=${cuisine}`)
                .then(response => {
                    setNearByRestaurant(response.data.restaurants)
                })
                .catch(error => {
                    console.log(error);
                });


        })
    }

    console.log(nearByRestaurant);
    return (
        <div className="searchbar">
            {/* <h1 className="searchbar__title">zomato</h1> */}
            {/* SET image ease transition */}
            <img className="zomatoLogo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
            <h4 className="searchbar__punchLine">Discover the best food & drinks in <span className="punchLine__placenName">Mumbai</span></h4>
            <div className="inputBar">
                <LocationOnIcon className="searchbar__locationIcon" />

                <select className="searchbar__placeNames">

                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Thane</option>
                    <option>Pune</option>
                </select>
                {/* <FormControl >
                <NativeSelect className="searchbar__placeNames" >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>

                </NativeSelect>
                </FormControl> */}
                <input
                    className="searchbar__input"
                    type="text "
                    placeholder="Search for restaurant, cuisine or a dish"
                    value={cuisine}
                    onChange={e => setCuisine(e.target.value)}
                />

                <SearchIcon className="searchbar__searchIcon" />
                <button value={operation} onClick={handleSearch}>Search</button>
            </div>

        </div>
    )
}

export default SearchBar
