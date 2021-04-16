import { FC } from "react";

const Stats: FC = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '36px' }}>
      <article style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1, margin: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h3>0.0 ETh</h3>
          <span>Total rewards</span>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>123123123 ETh</h3>
          <span>Locked rewards</span>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>12312312 ETh</h3>
          <span>End of program</span>
        </div>
      </article>
      <article style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1, margin: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h3>200 USD</h3>
          <span>Total deposits</span>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h3>10,928,982.12 USD</h3>
          <span>Unlocked rewards</span>
        </div >
        <div style={{ marginBottom: '24px' }}>
          <h3>1,920.01 USD</h3>
          <span>Reward unlock rate</span>
        </div>
      </article>
    </section>
  )
}

export default Stats;