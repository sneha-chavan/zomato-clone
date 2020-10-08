import React from 'react'
import './SearchBar.css'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, NativeSelect } from '@material-ui/core';

function SearchBar() {
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
                <input className="searchbar__input" type="text " placeholder="Search for restaurant, cuisine or a dish" />

                <SearchIcon className="searchbar__searchIcon" />
            </div>

        </div>
    )
}

export default SearchBar
