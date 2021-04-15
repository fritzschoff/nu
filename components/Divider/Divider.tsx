import { FC, CSSProperties } from 'react';

const Divider: FC<Record<string, CSSProperties>> = ({ style }) => {
  return (
    <hr style={style} className="divider" />
  )
}

export default Divider;