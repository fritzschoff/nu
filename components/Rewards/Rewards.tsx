import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { FC, useState } from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { Button as MaterialButton } from '@material-ui/core'

const Rewards: FC = () => {
  const [amount, setAmount] = useState(0);

  const handleChange = (event) => {
    console.log(event.target.value)
    setAmount(parseInt(event.target.value, 10));
  }

  const getMaxNu = async () => {
    console.info('implement me');
    setAmount(10)
  }

  const claimRewards = () => {
    console.warn('IMPLEMENT ME')
  }


  const claimAndWithdraw = () => {
    console.warn('IMPLEMENT ME')
  }


  const withdraw = () => {
    console.warn('IMPLEMENT ME')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '36px' }}>
      <span>Rewards</span>
      <article style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} className="centered-mobile">
        <div>
          <div style={{ marginLeft: '24px' }}>
            <h2>231312,232 NU</h2>
            <p>Your WBTC profit</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button onClick={claimRewards}>Claim rewards</Button>
          <caption style={{ marginTop: '16px' }}>A performance fee <br /> (5% of profit) applies.</caption>
        </div>
      </article>
      <Divider style={{ marginTop: '32px' }}></Divider>
      <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px' }}>
        <OutlinedInput style={{ borderRadius: '15px', width: '100%' }} value={amount} onChange={handleChange} type="number"
          endAdornment={(
            <>
              <InputAdornment position="end" style={{ alignItems: 'initial' }} onClick={getMaxNu}>
                <MaterialButton><span style={{ fontStyle: 'italic', fontWeight: 600 }}>Max</span></MaterialButton>
              </InputAdornment>
              <InputAdornment position="end" style={{ alignItems: 'initial' }}>
                <MaterialButton><span style={{ fontStyle: 'italic', fontWeight: 600 }}>NU</span></MaterialButton>
              </InputAdornment>
            </>
          )} />
        <div style={{ margin: '24px', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
          className="centered-mobile">
          <Button onClick={withdraw} style={{ margin: '8px' }}>Withdraw</Button>
          <Button onClick={claimAndWithdraw} style={{ margin: '8px', }}>Claim & Withdraw</Button>
        </div>
      </article>
    </div>
  )
}

export default Rewards;