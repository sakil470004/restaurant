import { Button, Container, FormControl, InputLabel, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddFood() {

    const [food, setFood] = useState({})




    const navigation = useNavigate();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...food };
        newData[field] = value;
        setFood(newData)
    }


    const handleLoginSubmit = (e) => {
        // const newData = { ...food, date: date.toLocaleDateString(), email: user }
        // fetch('https://event-managementt.herokuapp.com/addevent', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newData)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('Event Added')
        //             navigation('/myEvents')
        //         } else {
        //             alert(data.message)
        //         }
        //     })
        e.preventDefault();
    }
    return (
        <Container>
            <div style={{ marginTop: '150px' }}>
                <div >

                    <h1>Add Food</h1>

                    <form onSubmit={handleLoginSubmit}>
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
                        <TextField
                            required
                            sx={{ width: '75%', maxWidth: '450px', m: 1 }}
                            type='number'
                            label="Event Image Link"
                            variant="standard"
                            name='category'
                            onBlur={handleOnBlur}
                        />
                        <br />

                        {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                            <Select native defaultValue="" id="grouped-native-select" label="Grouping">

                                <option value={1}>Option 1</option>
                                <option value={2}>Option 2</option>

                                <option value={3}>Option 3</option>
                                <option value={4}>Option 4</option>

                            </Select>
                        </FormControl> */}
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