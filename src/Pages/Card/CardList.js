import { Container, Grid } from '@mui/material';
import React from 'react';
import Card from './Card';
import './CardList.css'

const CardList = ({ foods }) => {
  return (
    <Container>
      {/* {console.log(foods)} */}
      <Grid container spacing={3} style={{ marginBottom: '5px', marginTop: '10px' }}>
        {
          foods.map(food => {

            return (
              <Grid sx={{ borderRadius: 15 }} item xs={12} sm={6} md={6} lg={4}
                key={food._id}
              >
                <Card
                  id={food._id}
                  name={food.name}
                  image={food.img}
                  description={food.description}
                  price={`${food.price} $`}

                />
              </Grid>

            );

          })
        }
      </Grid>
    </Container>
  );
}

export default CardList;