import { FC, useState } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button as MaterialButton, InputAdornment } from "@material-ui/core";
import Button from '../Button/Button';

const Stake: FC = () => {
  const [amount, setAmount] = useState(0);
  const [isApproved, setApproved] = useState(false);
  const handleChange = (event) => {
    console.log(event.target.value)
    setAmount(parseInt(event.target.value, 10));
  }

  const getMaxNu = async () => {
    console.info('implement me');
    setAmount(10)
  }

  const approveContract = async () => {
    console.info('implement me')
    setApproved(true)
  }

  const sendTx = async () => {

  }
  return (
    <>
      <article style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', paddingTop: '36px' }}>
        <div>

          <div>
            <h3>23</h3>
            <p style={{ textAlign: 'center' }}>Staking Lots Purchased</p>
          </div>
          <div>
            <h3>12</h3>
            <p style={{ textAlign: 'center' }}>Eth Lots</p>
          </div>
        </div>
        <div>


          <div>
            <h3>11</h3>
            <p style={{ textAlign: 'center' }}>BTC Lots</p>
          </div>
          <div>
            <h3>21M</h3>
            <p style={{ textAlign: 'center' }}>NU in pool</p>
          </div>
        </div>
      </article>
      <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '80px', marginBottom: 'auto' }}>
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
          <Button onClick={approveContract} disabled={isApproved} style={{ margin: '16px' }}>Approve</Button>
          <Button onClick={sendTx} disabled={!isApproved} style={{ margin: '16px' }}>Deposit</Button>
        </div>
      </article>
      <p>
        Deposit your NU in the pool and start earning fees <br /> generated by the Hegic Protocol.
        </p>
      <ul>
        <ol>
          <li>
            Deposit your NU
            </li>
          <li>
            You start earning ETH and WBTC right away.
            </li>
          <li>
            Yes, both ETH and WBTC.
            </li>
          <li>
            You can withdraw your NU anytime.
            </li>
        </ol>
      </ul>

    </>
  )
}

export default Stake;