import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Grid, Container, Button} from '@material-ui/core'
import './App.css';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
        <Typography variant="title" color="inherit">
          Rand Math!
        </Typography>
    </Toolbar>
  </AppBar>
)

function App() {
  const numbersLength = 5
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0])
  const [restNumber, setResultNumber] = useState(0)

  const actionRandom = () => {
    let newNumbers = []
    for (let i = 0; i < numbersLength; i++) {
      newNumbers.push(Math.floor(Math.random() * 10))
    }
    let newResultNumber = Math.floor(Math.random() * 100)
    setNumbers(newNumbers)
    setResultNumber(newResultNumber)
  }

  return (
    <>
      {NavBar()}
        <Container maxWidth="sm">
          <Grid container direction="row" justify="space-around" alignItems="center">
            {numbers.map(number => (
              <Grid container item xs={1}>
                <h2>{number}</h2>
              </Grid>
            ))}
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
            <h1>{restNumber}</h1>
            <Button variant="contained" color="primary" onClick={actionRandom}>New</Button>
          </Grid>


        </Container>
    </>
  );
}

export default App;
