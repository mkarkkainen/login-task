import React, { useState } from 'react';
import useStyles from '../../styles/styles';
import { Tabs, Tab, Typography, Grid, Link, Container } from '@material-ui/core';
import EmailForm from './EmailForm';
import MobileForm from './MobileForm';
import * as colors from '../../styles/colors';



const LoginForm = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                classes={{
                    root: classes.tabRoot,
                    indicator: classes.tabIndicator
                }}
                centered
            >
                <Tab className={classes.tab} label="Email" />
                <Tab className={classes.tab} label="Mobile" />
            </Tabs>

            <Container style={{ height: '320px', paddingTop: '20px'}}>
                { value === 0 ? <EmailForm /> : <MobileForm /> }
            </Container>
            
            <Grid container direction="row" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item ><Typography className={classes.textBody} style={{ color: colors.neutral.greySecondary }}>Don't have an account?</Typography></Grid>
                <Grid item><Link href="/signup"className={classes.textBody} style={{ color: colors.primary.logoPrimary }}>Sign up</Link></Grid>
            </Grid>
        </>
    )
}

export default LoginForm;