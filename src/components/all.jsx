import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0),
        width: '100%',
    },
    root: {
        minWidth: 125,
        alignItems: 'center',
        // backgroundColor: 'black',
        margin: '15%',
    },
    pos: {
        marginBottom: 25,
    },
    container: {
    }
}));

export default function AllData() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isData, setData] = useState(false);
    const [isFetching, setFetching] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        async function fetchData() {
            setFetching(true);
            try {
                setFetching(true);
                const response = await fetch(
                    `https://corona.lmao.ninja/v2/all`
                );
                const json = await response.json();
                // console.log(json);
                setResult(json);
                setFetching(false);
            } catch (error) {
                setLoading("null");
            }
        }
        fetchData();
    }, [isData]);


    if (isFetching) {
        return <div>{' '}</div>
    }

    return (
        <Grid container className={classes.container}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} sm={3}>
                <Card className={classes.root} style={{
                    borderWidth: 1,
                    borderColor: `rgb(0,96,176)`,
                }} variant="outlined">
                    <CardContent className={classes.content}>
                        <Typography className={classes.pos} variant="h5" align="center" color="textSecondary">
                            {result.cases}
                        </Typography>
                        <Button
                            style={{ backgroundColor: `rgb(0,96,176)`, color: 'white' }}
                            disabled={true}
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                            startIcon={<LanguageSharpIcon />}>
                            Infected
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root} variant="outlined" style={{
                    borderWidth: 1,
                    borderColor: `rgb(180,0,0)`,
                }}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.pos} variant="h5" align="center" color="textSecondary">
                            {result.deaths}
                        </Typography>
                        <Button
                            style={{ backgroundColor: `rgb(180,0,0)`, color: 'white' }}
                            disabled={true}
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                            startIcon={<LanguageSharpIcon />}>
                            Deaths
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root} variant="outlined" style={{
                    borderWidth: 1,
                    borderColor: `rgb(45, 151, 7)`,
                }}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.pos} variant="h5" align="center" color="textSecondary">
                            {result.recovered}
                        </Typography>
                        <Button
                            style={{ backgroundColor: `rgb(45, 151, 7)`, color: 'white' }}
                            disabled={true}
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                            startIcon={<LanguageSharpIcon />}>
                            Recovered
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card className={classes.root} variant="outlined" style={{
                    borderWidth: 1,
                    borderColor: `rgb(255, 165, 0)`,
                }}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.pos} variant="h5" align="center" color="textSecondary">
                            {result.active}
                        </Typography>
                        <Button
                            style={{ backgroundColor: `rgb(255, 165, 0)`, color: 'white' }}
                            disabled={true}
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                            startIcon={<LanguageSharpIcon />}>
                            Active
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
