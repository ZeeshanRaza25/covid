import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import logo from '../assets/logo.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: '#000000'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Header() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title} align="center">
                        <img src={logo} className="App-logo" alt="logo" /> {' '}
                        COVID-19 Tracker
                    </Typography>
                    {/* <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={!auth} onChange={handleChange} aria-label="login switch" />}
                            label={auth ? 'Light' : 'Dark'}
                        />
                    </FormGroup> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}