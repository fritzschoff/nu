import { OutlinedInput } from "@material-ui/core";
import { FC, useState } from "react";
import { provider } from "../../utils/web3";
import Button from "../Button/Button";
import Flex from "../Flex";
import firebase from 'firebase'

const Email: FC = () => {
  const [email, setEmail] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const sendEmail = async () => {
    const isEmail = (email as string).match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    if (isEmail) {
      const address = await provider.getSigner().getAddress();
      firebase.app('staker-party').firestore().collection('users').doc(address).update({ email: email });
      setDisabled(true)
    } else {
      // not a valid email
      setDisabled(false)
    }
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (disabled) setDisabled(false)
  }
  return (
    <Flex flexDirection="column" alignItems="center" style={{ margin: '32px' }}>
      <h2>12d : 17h : 11m : 53s</h2>
      <span style={{ marginBottom: '32px' }}>ETH Lots</span>
      <OutlinedInput type="email" placeholder="Your email to subscribe" value={email} onChange={handleEmail}
        style={{ borderRadius: '15px', width: '100%', marginBottom: '32px' }} />
      <Button onClick={sendEmail} style={{ alignSelf: 'flex-end', marginBottom: '32px' }} disabled={disabled}>Subscribe</Button>
      <span style={{ alignSelf: 'flex-start' }}>The pool is closed. Leave your email and we let you <br />
        know when it will be opened again.</span>
    </Flex>
  )
}

export default Email;