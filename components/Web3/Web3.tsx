import { CSSProperties, FC, LegacyRef } from "react";
import { Web3Context } from "../../contexts/Web3.context";
import { address } from "../../utils/web3";

interface Web3Panel {
  style?: CSSProperties,
  customRef?: LegacyRef<HTMLDivElement>
}

const Web3Panel: FC<Web3Panel> = ({ style, customRef }) => {
  return (
    <div style={style} ref={customRef}>
      <Web3Context.Consumer>
        {value => {
          if (!!value) {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                <span><em className="main-color">Connected</em></span>
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