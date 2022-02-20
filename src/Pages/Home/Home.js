import React, { useEffect, useState } from 'react'
import './Home.css';
import CardList from '../Card/CardList'
import MiddleNav from '../MiddleNav/MiddleNav'

function Home() {
    const [searchField, setSearchField] = useState('')
    const [currentDish, setCurrentDish] = useState('breakfast')
    const [foods,setFoods]=useState([]);
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchField(e.target.value)
    }

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                if (searchField === '') {
                    data = data.filter(n => n.category === currentDish);
                }
                setFoods(data)
                // console.log(data)
            })

    }, [currentDish, searchField]);
    return (
        <div>
            <div className='background-cointainer-home' >         <h1>Best food waiting for your belly</h1>
                <div>
                    <input onChange={handleSearch} className='home-search-input' placeholder='Search food items'></input>
                    <button className='home-search-btn' >Search</button>
                </div>

            </div>
            <MiddleNav currentDish={currentDish} setCurrentDish={setCurrentDish} searchField={searchField} />
            <CardList 
            foods={foods} 
            />
        </div>
    )
}

export default Home 