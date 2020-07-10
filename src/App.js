import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import LinChart from './components/Barchat/Barchart';
// import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import PieChart from './components/PieGraph/PieChart';
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
        <Grid container item style={{ marginTop: '4%' }}>
          <AllData />
        </Grid>
        <Grid container item xs={12} alignItems="center" alignContent="center" justify="center" style={{ marginTop: '6%' }}>
          {/* <Grid item xs="auto" sm={6}>
            <LinChart />
          </Grid> */}
          <Grid item xs="auto" sm={8}>
            <PieChart />
          </Grid>
        </Grid>
        <Grid container item style={{ marginTop: '7%' }}>
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
