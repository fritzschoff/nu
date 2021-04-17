import Button from '../components/Button/Button'
import Divider from '../components/Divider/Divider'
import View from '../components/View/View'
import TabPanel from '../components/TabPanel/TabPanel'
import Head from 'next/head'
import { connect } from '../utils/web3';
import { useState } from 'react';
import { createMuiTheme, createStyles, makeStyles, Tab, Tabs, ThemeProvider, Theme } from '@material-ui/core';
import Stake from '../components/Stake/Stake'
import Rewards from '../components/Rewards/Rewards'
import Stats from '../components/Stats/Stats'
import Flex from '../components/Flex'
import { createGlobalState } from 'react-use'
import type { providers } from 'ethers';
import Modal from '@material-ui/core/Modal';

export const useGlobalValue = createGlobalState<providers.Web3Provider | null>(null);

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: 'absolute',
      width: 'fit-content',
      backgroundColor: 'white',
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      borderRadius: '5px',
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      flexWrap: 'wrap'
    },
  }),
);

export default function Home() {
  // Material UI
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#67f450"
      },
      secondary: {
        main: "#fff"
      }
    }
  });
  const [value, setValue] = useGlobalValue();

  // Web3
  const handleConnect = async (chosenProvider: 'metamask' | 'walletConnect') => {
    const provider = await connect(chosenProvider)
    if (!!provider) {
      setValue(provider)
      handleClose();
    }
  }

  // Tabs
  const [index, setIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setIndex(newValue);
  };

  // Modal
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Staker Party</title>
        <meta
          property="og:title"
          content="Staker Party"
        />
        <meta
          name="description"
          content="Stake your assets and earn some NU"
        />
        <meta
          name="image"
          content="/assets/nu.png"
          key="ogtitle"
        />
        <meta
          property="twitter:card"
          content="/assets/nu.png"
          key="twcard"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Staker Party" key="title" />
      </Head>
      <ThemeProvider theme={theme}>
        <Modal
          disablePortal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div style={modalStyle} className={classes.modal}>
            <h1>Choose a provider</h1>
            <Button style={{ background: 'transparent' }} onClick={() => handleConnect('metamask')}>
              <img src="/assets/metamask.png" width="200px" height="200px" />
            </Button>
            <Button style={{ background: 'transparent' }} onClick={() => handleConnect('walletConnect')}>
              <img src="/assets/walletConnect.svg" width="200px" height="200px" />
            </Button>
          </div>
        </Modal>
        <View>
          <Flex flexDirection="column">
            <h1 style={{ marginBottom: '64px' }}>STAKER<span className="main-color">.</span>PARTY</h1>
            {!value ? (<>
              <Button onClick={handleOpen}>Connect</Button>
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
              <article style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <p style={{ padding: '24px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a style={{ fontStyle: 'italic', marginTop: '24px' }}>Telegram</a>
                </div>
                <img src="/assets/nu.png" alt="nu logo" style={{ width: '72px', height: '72px' }} />
              </article>
            </>)
              : (
                <>
                  <Tabs value={index} onChange={handleChange} aria-label="tabs" indicatorColor="primary" color="primary"
                    scrollButtons="auto" variant="scrollable">
                    <Tab label="Deposit & Stake" value={0} style={{ marginRight: 'auto' }}></Tab>
                    <Tab label="Staking Rewards" value={1} />
                    <Tab label="Stats" value={2} style={{ marginLeft: 'auto' }} />
                  </Tabs>
                  <TabPanel value={index} index={0}>
                    <Stake></Stake>
                  </TabPanel>
                  <TabPanel value={index} index={1}>
                    <Rewards></Rewards>
                  </TabPanel>
                  <TabPanel value={index} index={2}>
                    <Stats></Stats>
                  </TabPanel>
                </>
              )
            }
          </Flex>
          {/* Concent for side panel */}
          <h1>Whatever you want</h1>
        </View>
      </ThemeProvider>
    </>
  )
}
