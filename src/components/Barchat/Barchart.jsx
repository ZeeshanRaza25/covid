import React from 'react';
import { Bar } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Covid-19 dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Barchart = () => {
  return (
    <Grid container alignItems="center" alignContent="center" justify="center">
      <Grid item xs={12} sm={9}>
        <h2>Bar Example</h2>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: true
          }}
        />
      </Grid>
    </Grid>
  );
};
export default Barchart;
