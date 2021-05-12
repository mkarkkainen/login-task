import React from "react";
import useStyles from "../../styles/styles";
import { Button } from "@material-ui/core";
import SvgGoogle from "../../styles/icons/SvgGoogle.js";
import SvgFacebook from "../../styles/icons/SvgFacebook.js";

const UISocialMediaButton = ({ vendor }) => {
  const classes = useStyles();
  return (
    <>
      {vendor === "facebook" ? (
        <Button
          startIcon={<SvgFacebook />}
          className={classes.socialMediaButton}
        >
          FACEBOOK
        </Button>
      ) : (
        <Button startIcon={<SvgGoogle />} className={classes.socialMediaButton}>
          GOOGLE
        </Button>
      )}
    </>
  );
};

export default UISocialMediaButton;

