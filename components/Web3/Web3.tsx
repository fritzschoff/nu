import { CSSProperties, FC, LegacyRef } from "react";
import { Web3Context } from "../../contexts/Web3.context";
import { address } from "../../utils/web3";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
interface Web3Panel {
  style?: CSSProperties,
  customRef?: LegacyRef<HTMLDivElement>
  disconnect?: () => void
}

const Web3Panel: FC<Web3Panel> = ({ style, customRef, disconnect }) => {
  return (
    <div style={style} ref={customRef}>
      <Web3Context.Consumer>
        {value => {
          if (!!value) {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}><em className="main-color" style={{ marginRight: '8px' }}>
                  Connected</em><ExitToAppIcon onClick={() => disconnect(null)} className="clickable" /></span>
                <span>{address.substr(0, 5).concat('...').concat(address.substr(address.length - 5, address.length))}</span>
                <span>0.0 NU</span>
              </div>
            )
          }
        }}
      </Web3Context.Consumer>
    </div>
  )
}

export default Web3Panel;