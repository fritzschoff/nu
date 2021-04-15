import Button from '../components/Button/Button'
import Divider from '../components/Divider/Divider'
import View from '../components/View/View'

export default function Home() {
  return (
    <View>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ marginBottom: '64px' }}>STAKER<span className="main-color">.</span>PARTY</h1>
        <Button>Connect</Button>
        <section style={{ display: 'flex', marginTop: '240px', marginBottom: '40px' }}>
          <div style={{ marginRight: '48px' }}>
            <h2>Open</h2>
            <span>Pool status</span>
          </div>
          <div>
            <h2>12 NU</h2>
            <span>Current pool APY</span>
          </div>
        </section>
        <Divider style={{ width: '70%', marginLeft: '0px' }}></Divider>
        <article style={{ display: 'flex' }}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
            <a style={{ fontStyle: 'italic', marginTop: '24px' }}>Telegram</a>
          </div>
          <img src="/assets/nu.png" alt="nu logo" style={{ width: '72px', height: '72px' }} />
        </article>
      </div>
      <h1>side</h1>
    </View>
  )
}
