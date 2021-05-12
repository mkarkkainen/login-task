import React from "react";
import * as colors from "../../styles/colors";
import { makeStyles } from "@material-ui/styles";

import IconFirstname from "../../styles/icons/SvgFirstname";
import IconLastname from "../../styles/icons/SvgLastname";
import IconPerson from "../../styles/icons/SvgPerson";
import IconEmail from "../../styles/icons/SvgEmail";
import IconPassword from "../../styles/icons/SvgPassword";
import IconMobile from "../../styles/icons/SvgMobile";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    width: "280px",
    height: "40px",
    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "10px 0px",
    textTransform: "none"
  },

  default: {
    backgroundColor: colors.accent.offwhite,
    color: colors.active,
    borderColor: colors.neutral.greySecondary,
    "&:focus-within": {
      backgroundColor: colors.white,
      color: colors.active,
      borderColor: "#6340FB"
    }
  },

  focused: {
    backgroundColor: colors.white,
    color: colors.active,
    borderColor: "#6340FB"
  },

  disabled: {
    backgroundColor: colors.white,
    color: colors.inactive,
    borderColor: colors.inactive
  },

  variant: {
    background: colors.white,
    color: colors.active,
    borderColor: "#FFB3B3",
    "&:focus-within": {
      backgroundColor: colors.white,
      color: colors.active,
      borderColor: "#6340FB"
    }
  },

  input: {
    height: "100%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    width: "100%"
  },

  icon: {
    padding: "16px 11px 12px 16px"
  }
});

const UITextInput = ({ version, placeholder, icon }) => {
  const classes = useStyles();

  const handleIcon = (icon) => {
    switch (icon) {
      case "person":
        return <IconPerson />;
      case "password":
        return <IconPassword />;

      case "email":
        return <IconEmail />;
      case "firstname":
        return <IconFirstname />;
      case "lastname":
        return <IconLastname />;
      case "mobile":
        return <IconMobile />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${classes.root} ${
        version === "default"
          ? classes.default
          : version === "focused"
          ? classes.focused
          : version === "disabled"
          ? classes.disabled
          : classes.variant
      }`}
    >
      <div className={classes.icon}>{handleIcon(icon)}</div>
      <input
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          e.target.placeholder ? (e.target.placeholder = placeholder) : null
        }
        className={classes.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default UITextInput;
