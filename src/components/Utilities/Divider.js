import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from '../../styles/styles';
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     alignItems: "center",
//     width: '75%',
//   },
//   border: {
//     borderBottom: "2px solid black",
//     width: "100%"
//   },
//   content: {
//     padding: '0 10px 0 10px',
//     fontWeight: 500,
//     fontSize: 22,
//     color: "black"
//   }
// }));

const Divider = ({ children }) => {
 const classes = useStyles();
 return (
  <div className={classes.dividerContainer}>
    <div className={classes.dividerBorder} />
        <span className={classes.dividerContent}>
            <Typography className={`${classes.smallCopy} ${classes.inactiveText}`}>{children}</Typography>
        </span>
    <div className={classes.dividerBorder} />
  </div>
 );
};

export default Divider;