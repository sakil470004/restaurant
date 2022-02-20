import './Cart.css'
import React, { useEffect, useState } from 'react'
import { removeFromDb, clearTheCart, getStoredCart } from '../fakedb/fakedb';
import Card from '../Card/Card'
import { Button, Container, Grid } from '@mui/material';
import jsPDF from 'jspdf';


export default function Cart() {
    const [cartFood, setCartFood] = useState([])
    const [tips, setTips] = useState(true);

    const totalCost = cartFood.reduce((fd, currentValue) => {
        return fd + parseInt((currentValue.quantity * currentValue.price).toFixed(2))

    }, 0)
    const handleMakeBill = () => {
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.setFont('Helvertica', 'bold')
        doc.text(60, 60, 'Total Cost\n')
        doc.text(60, 80, 'Tips')
        doc.text(60, 100, 'Total Bill')
        doc.setFont('Helvertica', 'Normal')
        doc.text(130, 60, totalCost.toString())
        doc.text(130, 80, (totalCost * 0.1).toString())
        doc.text(130, 100, (totalCost + (totalCost * 0.1)).toString())
        doc.save('bill.pdf')
        clearTheCart()
        alert('Bill Outed')
        setCartFood([])
    }
    const fetchDataFromLocalStorage = (data) => {
        // setFoods(data)
        // console.log(data)
        const savedCart = getStoredCart();

        // console.log(data)
        // console.log(savedCart)
        if (savedCart) {
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = data.find(product => product._id === key);
                // console.log("iam here")
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            // setCart(storedCart);
            // console.log(storedCart)
            setCartFood(storedCart)

        }
    }

    useEffect(() => {
        fetch('https://resturent-api.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                fetchDataFromLocalStorage(data)


            })


    }, []);
    const handleRemove = (key) => {
        removeFromDb(key);
        //    history.push('/cart')
        fetchDataFromLocalStorage(cartFood)

    }
    return (
        <Container className='card-main' >
            <Grid container spacing={3} style={{ marginBottom: '5px', marginTop: '10px' }}>
                {
                    cartFood.map(food => {

                        return (
                            <Grid sx={{ borderRadius: 15 }} item xs={12} sm={6}
                                key={food._id}
                            >
                                <div>
                                    <div className='cart-div-main-wrapper'>
                                        <Card className=''
                                            key={food._id}
                                            id={food._id}
                                            name={food.name}
                                            image={food.img}
                                            description={food.description}
                                            price={`${food.price} $`}

                                        />
                                        <div style={{ marginLeft: '10px' }}>
                                            <h4> Quantity : {food.quantity}</h4>
                                            <h2>Total : {(food.quantity * food.price).toFixed(2)}</h2>
                                            <button onClick={() => handleRemove(food._id)}>remove</button>
                                        </div>
                                    </div>


                                </div>
                            </Grid>

                        );

                    })
                }
            </Grid>
            <div>
                <h2>Total Cost : {totalCost}</h2>
                <Button onClick={() => setTips(!tips)}>{tips ? 'Cancel Tips' : 'Set Tips'}</Button>
                <h1>Total Bill With Or Without Tips : {totalCost + (tips ? (totalCost * 0.1) : 0)}</h1>
                <Button style={{ color: 'red' }} onClick={handleMakeBill}>Make Bill</Button>
            </div>
        </Container>
    )
}
