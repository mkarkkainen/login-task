import React from 'react';
import { UIButton, UITextInput } from '../components';
import { Grid, Typography, Link } from '@material-ui/core';
import useStyles from '../styles/styles';

const OTP = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item>
                    <Typography align="center" style={{paddingTop: '64px'}} className={`${classes.subtitle} ${classes.inactiveText}`}>We have sent you an OTP</Typography>
                </Grid>

                <UITextInput placeholder="Enter OTP" icon="mobile" version="default" />

                <Grid item style={{ width: '85%' }}>
                    <Link href="/"><UIButton label="Submit" version="cta" /></Link>
                </Grid>

            </Grid>
        </>
    )
}

export default OTP;