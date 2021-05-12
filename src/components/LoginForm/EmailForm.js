import { Typography } from '@material-ui/core'
import useStyles from '../../styles/styles'
import UIButton from '../Buttons/UIButton';
import UITextInput from '../Inputs/UITextInput';


const EmailForm = () => {
  const classes = useStyles();
  return (
    <>
      <UITextInput icon="person" placeholder="Email id" version="default" />
      <UITextInput icon="password" placeholder="Password" version="variant" />
      <UIButton style={{ padding: '36px 40px 22px 40px' }} label="Login" version="default" />
      <Typography align="center" style={{ padding: '22px 64px 44px 64px'}} className={`${classes.buttonText} ${classes.inactiveText}`}>FORGOT PASSWORD?</Typography>
    </>
  )
}

export default EmailForm;