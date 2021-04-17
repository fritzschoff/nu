import { CSSProperties, FC, LegacyRef } from "react";
import { address } from "../../utils/web3";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useGlobalValue } from '../../pages/index';
interface Web3Panel {
  style?: CSSProperties,
  customRef?: LegacyRef<HTMLDivElement>
}

const Web3Panel: FC<Web3Panel> = ({ style, customRef }) => {
  const [provider, setProvider] = useGlobalValue();
  return (
    <div style={style} ref={customRef}>
      {provider ? (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}><em className="main-color" style={{ marginRight: '8px' }}>
            Connected</em><ExitToAppIcon onClick={() => setProvider(null)} className="clickable" /></span>
          <span>{address.substr(0, 5).concat('...').concat(address.substr(address.length - 5, address.length))}</span>
          <span>0.0 NU</span>
        </div>
      ) : <></>}
    </div>
  )
}

export default Web3Panel;