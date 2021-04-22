import WalletConnectProvider from '@walletconnect/web3-provider';
import { constants, Contract, providers } from 'ethers'

export let provider: providers.Web3Provider;
export let address: string;

function ethereum() {
  return (window as any)?.ethereum
}

export async function connect(chosenProvider: 'metamask' | 'walletConnect') {
  if (chosenProvider === 'metamask') {
    const acc = await ethereum().request({ method: 'eth_requestAccounts' });
    if (acc.length) {
      address = acc[0]
      try {
        provider = new providers.Web3Provider(ethereum())
        return provider;
      } catch (error) {
        console.error('could not connect')
      }
    }
  } else {
    try {
      const walletConnectProvider = new WalletConnectProvider({
        infuraId: process.env['infura'],
      });
      await walletConnectProvider.enable();
      provider = new providers.Web3Provider(walletConnectProvider)
    }
    catch (error) {
      console.error('could not connect')
    }
  }
}

export const poolContract = new Contract(constants.AddressZero, [
  'function isDepositAllowed() public view returns (bool)',
  'function isWithdrawAllAllowed() public view returns (bool)',
  'function depositTokens(uint256 _value) external',
  'function withdrawTokens(uint256 _value) public'])