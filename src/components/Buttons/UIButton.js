import React from 'react';
import { Button } from '@material-ui/core'
import * as colors from '../../styles/colors';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: '8px 16px',
        borderRadius: '20px',
        width: '100%',
        height: '40px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '10px 0px',
        textTransform: 'none',
        borderWidth: '2px',
        borderStyle: 'solid',
    },

    default: {
        background: colors.primary.logoPrimary,
        borderColor: '#9f9783',
        color: '#9f9783',
    },

    variant: {
        borderColor: colors.primary.logoPrimary,
        color: `${colors.primary.logoPrimary}`,
        backgroundColor: 'Transparent',

    },

    cta: {
        background: colors.accent.cta,
        borderColor: '#365aa4',
        boxShadow: '0px 2px 0px rgba(105, 121, 248, 0.2)',
        color: 'white',
        "&:hover" : {
            color: colors.accent.cta,
        },
    },

})


const UIButton = ({ label, version }) => {
    const classes = useStyles();
    return (
        <Button className={ `${classes.root} ${version === "default" ? classes.default : version === "variant" ? classes.variant : classes.cta}` }>
            <Typography variant="button">{label}</Typography>
        </Button>
    )
}

export default UIButton;