import { Typography, Link } from '@material-ui/core'
import * as colors from '../../styles/colors';
import useStyles from '../../styles/styles';
import UIButton from '../Buttons/UIButton';
import UITextInput from '../Inputs/UITextInput';


const MobileForm = () => {
  const classes = useStyles();
  return (
    <>
      <UITextInput icon="mobile" version="default" placeholder="Mobile No" />
      <Typography className={`${classes.smallCopy}`} style={{ color: colors.neutral.greySecondary, padding: '20px 30px 20px 30px'}}>Give us your mobile number to generate an OTP</Typography>
      <Link href="/otp"><UIButton style={{ padding: '36px 40px 22px 40px' }} label="Continue" version="cta" /></Link>
    </>
  )
}

export default MobileForm;