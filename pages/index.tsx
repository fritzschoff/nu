import Button from '../components/Button/Button'
import Divider from '../components/Divider/Divider'
import View from '../components/View/View'
import TabPanel from '../components/TabPanel/TabPanel'
import Head from 'next/head'
import { connect, provider } from '../utils/web3';
import { Web3Context } from '../contexts/Web3.context';
import { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';

export default function Home() {
  // Web3
  const [stateProvider, setProvider] = useState(null)
  const handleConnect = async () => {
    await connect()
    setProvider(provider)
  }

  // Tabs
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>Staker Party</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Web3Context.Provider value={stateProvider}>
        <View>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ marginBottom: '64px' }}>STAKER<span className="main-color">.</span>PARTY</h1>
            {!stateProvider ? (<>
              <Button onClick={handleConnect}>Connect</Button>
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
            </>)
              : (
                <>
                  <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="Item One" >Hey</Tab>
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    Item One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </>
              )
            }
          </div>
          <h1>Whatever you want</h1>
        </View>
      </Web3Context.Provider>
    </>
  )
}
