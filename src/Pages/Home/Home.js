import React, { useEffect, useState } from 'react'
import './Home.css';
import CardList from '../Card/CardList'
import MiddleNav from '../MiddleNav/MiddleNav'

function Home() {
    const [searchField, setSearchField] = useState('')
    const [currentDish, setCurrentDish] = useState('breakfast')
    const [foods, setFoods] = useState([]);
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchField(e.target.value)
    }
    const filteredFood = foods.filter(fd => {
        return fd.name.toLowerCase().includes(searchField.toLowerCase())
    })


    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                if (searchField === '') {
                    data = data.filter(n => n.category === currentDish);
                }
                setFoods(data)
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

            {filteredFood.length ?
                <div>
                    <MiddleNav currentDish={currentDish} setCurrentDish={setCurrentDish} searchField={searchField} />
                    <CardList
                        foods={filteredFood}
                    />
                </div> :
                <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>No Search Found</h1>
                </div>
            }

        </div>
    )
}

export default Home 