import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { LoginForm, Divider, UISocialMediaButton } from '../components';
import useStyles from '../styles/styles';

const Login = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item>
                <Typography style={{paddingTop: '64px'}} className={`${classes.subtitle} ${classes.inactiveText}`}>Login</Typography>
                </Grid>

                <Grid item>
                <Grid container >
                    <Grid item style={{ margin: '12px' }}>
                    <UISocialMediaButton vendor="facebook" />
                    </Grid>
                    <Grid item style={{ margin: '12px' }}>
                    <UISocialMediaButton vendor="google" />
                    </Grid>
                </Grid>
                </Grid>

                <Divider>OR</Divider>

                <Grid item style={{ width: '85%' }}>
                    <LoginForm />
                </Grid>

            </Grid>
        </>
    )
}

export default Login;