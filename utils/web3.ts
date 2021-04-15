import { providers } from 'ethers'

export let provider: providers.Web3Provider;
export let address: string;

function ethereum() {
  return (window as any)?.ethereum
}

export async function connect() {
  const acc = await ethereum().request({ method: 'eth_requestAccounts' });
  if (acc.length) {
    address = acc[0]
    try {
      provider = new providers.Web3Provider(ethereum())
    } catch (error) {
      console.error('could not connect')
    }
  }
}
