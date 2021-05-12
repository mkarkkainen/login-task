import React, { useState } from "react";
import useStyles from "../../styles/styles";
import UIButton from "../Buttons/UIButton";
import UITextInput from "../Inputs/UITextInput";
import {
  Tabs,
  Tab,
  Typography,
  Grid,
  Link,
  Container
} from "@material-ui/core";
import * as colors from "../../styles/colors";

const EmailForm = () => {
  const classes = useStyles();
  return (
    <>
      <UITextInput icon="person" placeholder="Email id" version="default" />
      <UITextInput icon="password" placeholder="Password" version="variant" />
      <UIButton label="Login" version="default" />
      <Typography
        align="center"
        style={{ padding: "22px 64px 44px 64px" }}
        className={`${classes.buttonText} ${classes.inactiveText}`}
      >
        FORGOT PASSWORD?
      </Typography>
    </>
  );
};

const MobileForm = () => {
  const classes = useStyles();
  return (
    <>
      <UITextInput icon="mobile" version="default" placeholder="Mobile No" />
      <Typography
        className={`${classes.smallCopy}`}
        style={{ color: colors.neutral.greySecondary, padding: "30px 0 0px 0" }}
      >
        Give us your mobile number to generate an OTP
      </Typography>
      <Link href="/otp">
        <UIButton label="Continue" version="cta" />
      </Link>
    </>
  );
};

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

      <Container style={{ height: "300px", paddingTop: "20px" }}>
        {value === 0 ? <EmailForm /> : <MobileForm />}
      </Container>

      <Grid
        container
        direction="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid item>
          <Typography
            className={classes.textBody}
            style={{ color: colors.neutral.greySecondary }}
          >
            Don't have an account?
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href="/signup"
            className={classes.textBody}
            style={{ color: colors.primary.logoPrimary }}
          >
            Sign up
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
