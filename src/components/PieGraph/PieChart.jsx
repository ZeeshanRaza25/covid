import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function PieChart() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isData, setData] = useState(false);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setFetching(true);
            try {
                setFetching(true);
                const response = await fetch(
                    `https://corona.lmao.ninja/v2/all`
                );
                const json = await response.json();
                console.log("barchart =>", json);
                setResult(json);
                setFetching(false);
            } catch (error) {
                setLoading("null");
            }
        }
        fetchData();
    }, [isData]);

    const data = {
        labels: ['Deaths', 'Infected', 'Active', 'Recovered'],
        datasets: [
            {
                data: [result.deaths, result.cases, result.active, result.recovered],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFCCDF'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFCCDF']
            }]
    };

    if (isFetching) {
        return <div>Data Loading.....</div>
    }

    return (
        <Grid container alignItems="center" alignContent="center" justify="center">
            <Grid container item sm={9} xs={12}>
                <Grid item sm={12}>
                    <Typography variant="h4" component="h3" align="center">
                        PieChart
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Pie data={data} />
                </Grid>
            </Grid>
        </Grid>
    );
};