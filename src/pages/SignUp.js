import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { UIButton, UITextInput } from '../components';
import useStyles from '../styles/styles';

const SignUp = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item>
                <Typography align="left" style={{paddingTop: '64px'}} className={`${classes.subtitle} ${classes.inactiveText}`}>Sign Up</Typography>
                </Grid>

                <Grid item>
                <UITextInput icon="firstname" version="default" placeholder="Your first name" />
                <UITextInput icon="lastname" version="default" placeholder="Your last name" />
                <UITextInput icon="email" version="default" placeholder="Email" />
                <UITextInput icon="mobile" version="default" placeholder="Mobile No" />
                <UITextInput icon="password" version="default" placeholder="Password" />
                </Grid>

                <Typography className={`${classes.infoText} ${classes.activeText}`}>By clicking submit you agree to the <Link>Terms & Conditions</Link></Typography>

                <Grid item style={{ width: '85%' }}>
                    <Link href="/"><UIButton label="Submit" version="cta" /></Link>
                </Grid>

            </Grid>
        </>
    )
}

export default SignUp;