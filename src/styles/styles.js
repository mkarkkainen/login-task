import { makeStyles } from '@material-ui/styles'
import * as typography from './typography';
import * as colors from './colors';
import bgPattern from './bg-graphics.svg';

export default makeStyles(() => ({


    // Root Container

    container: {
        width: "360px",
        height: "640px",
        margin: "100px auto",
        backgroundColor: "#ffffff",
        border: '2px solid black',
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "0",
        backgroundImage: `url(${bgPattern})`
    },

    // Typography

    h1: {
        fontSize: typography.textH1.fontSize,
        fontWeight: typography.textH1.fontWeight,
        lineHeight: typography.textH1.lineHeight,
        letterSpacing: typography.textH1.letterSpacing,
    },

    h2: {
        fontSize: typography.textH2.fontSize,
        fontWeight: typography.textH2.fontWeight,
        lineHeight: typography.textH2.lineHeight,
        letterSpacing: typography.textH2.letterSpacing,
    },

    h3: {
        fontSize: typography.textH3.fontSize,
        fontWeight: typography.textH3.fontWeight,
        lineHeight: typography.textH3.lineHeight,
        letterSpacing: typography.textH3.letterSpacing,
    },

    subtitle: {
        fontSize: typography.textSubtitle.fontSize,
        fontWeight: typography.textSubtitle.fontWeight,
        lineHeight: typography.textSubtitle.lineHeight,
    },

    bold: {
        fontWeight: typography.textBold.fontWeight,
        lineHeight: typography.textBold.lineHeight,
    },

    smallCopy: {
        fontSize: typography.textSmallCopy.fontSize,
        fontWeight: typography.textSmallCopy.fontWeight,
        lineHeight: typography.textSmallCopy.lineHeight,
    },

    textBody: {
        lineHeight: typography.textBody.lineHeight,
        fontSize: typography.textBody.fontSize,
    },
    
    pretitle: {
        fontSize: typography.textPretitle.fontSize,
        fontWeight: typography.textPretitle.fontWeight,
        lineHeight: typography.textPretitle.lineHeight,
        letterSpacing: typography.textPretitle.letterSpacing,
        textTransform: typography.textPretitle.textTransform,
    },

    buttonText: {
        fontSize: typography.textButton.fontSize,
        fontWeight: typography.textButton.fontWeight,
        lineHeight: typography.textButton.lineHeight,
        letterSpacing: typography.textButton.letterSpacing,
        textTransform: typography.textButton.textTransform,
    },

    activeText: {
        color: colors.active,
    },

    inactiveText: {
        color: colors.inactive,
    },

    infoText: {
        fontSize: typography.textInfo.fontSize,
        lineHeight: typography.textInfo.lineHeight,
        fontWeight: typography.textInfo.fontWeight,
    },


    // Social Media Button

    socialMediaButton: {
        width: '128px',
        height: '40px',
        border: `1px solid ${colors.active}`,
        color: colors.active,
        borderRadius: '4px',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        padding: '8px 10px 8px 10px',
    },

    // Divider 

    dividerContainer: {
        display: "flex",
        alignItems: "center",
        width: '75%',
        padding: '15px'
    },

    dividerBorder: {
        borderBottom: `1px solid ${colors.active}`,
        width: "100%"
    },

    dividerContent: {
        padding: '0 10px 0 10px',
        fontWeight: 500,
        fontSize: 22,
        color: "black"
    },

    // Tab

    tabRoot: {
        color: colors.primary.logoPrimary,
    },

    tabIndicator: {
        backgroundColor: colors.primary.logoPrimary,
    },

    tab: {
        color: colors.primary.logoPrimary,
    }

}))