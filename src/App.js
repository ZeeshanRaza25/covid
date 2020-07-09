import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
// import CountrySelect from './components/Search/Search';
import Barchart from './components/Barchat/Barchart';
// import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import PieChart from './components/PieGraph/PieChart';
// import { Typography } from '@material-ui/core';
import TableDetail from './components/table';
import AllData from './components/all';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item>
          <AllData />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs="auto" sm={6}>
            <Barchart />
          </Grid>
          <Grid item xs="auto" sm={6}>
            <PieChart />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs='auto' />
          <Grid item xs={12}>
            <TableDetail />
          </Grid>
          <Grid item xs='auto' />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
