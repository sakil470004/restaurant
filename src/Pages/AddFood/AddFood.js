import { Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddFood() {

    const [food, setFood] = useState({})
    const [radioValue, setRadioValue] = React.useState('breakfast');

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };

    const navigation = useNavigate();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...food };
        newData[field] = value;
        setFood(newData)
    }


    const handleAddFood = (e) => {

        const newData = { ...food, category: radioValue }
        console.log(newData)

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Food Added')
                    navigation('/')
                } else {
                    alert(data.message)
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <div style={{ marginTop: '150px' }}>
                <div >

                    <h1>Add Food</h1>

                    <form onSubmit={handleAddFood}>
                        <TextField
                            required

                            type='text'
                            sx={{ width: '75%', maxWidth: '450px', m: 1 }}
                            label="Food Name"
                            variant="standard"
                            name='name'
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            required
                            sx={{ width: '75%', maxWidth: '450px', m: 1 }}
                            type='text'
                            label="Food Description"
                            variant="standard"
                            name='description'
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            required
                            sx={{ width: '75%', maxWidth: '450px', m: 1 }}
                            type='text'
                            label="Event Image Link"
                            variant="standard"
                            name='img'
                            onBlur={handleOnBlur}
                        />

                        <br />
                        <br />

                        <FormControl >
                            <FormLabel id="demo-row-radio-buttons-group-label">Food Category</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={radioValue}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="breakfast" control={<Radio />} label="Breakfast" />
                                <FormControlLabel value="lunch" control={<Radio />} label="Lunch" />
                                <FormControlLabel value="dinner" control={<Radio />} label="Dinner" />

                            </RadioGroup>
                        </FormControl>
                        <br />
                        <TextField
                            required
                            sx={{ width: '75%', maxWidth: '450px', m: 1 }}
                            type='number'
                            label="Price"
                            variant="standard"
                            name='price'
                            onBlur={handleOnBlur}
                        />

                        <br />
                        <Button
                            sx={{ width: '75%', maxWidth: '450px', m: 1, color: 'white', background: '#2E3B55', borderRadius: '10px' }}
                            variant='contained'
                            type='submit'
                        >Add Food</Button>

                    </form>

                </div>
            </div>
        </Container>
    )
}

export default AddFood  