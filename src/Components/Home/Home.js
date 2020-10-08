import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Categories from '../Category/Category'
import Collections from '../Collections/Collections';
import './Home.css'


function Home() {
    return (
        <div className="home">
            <SearchBar />
            <Categories />
            <Collections />
        </div>
    )
}

export default Home
