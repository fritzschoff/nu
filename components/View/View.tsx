import { ReactChild, useEffect, useRef } from 'react'
import Web3Panel from '../Web3/Web3';

interface View {
  children: ReactChild[],
  disconnect?: () => void
}

const View: React.FC<View> = ({ children, disconnect }) => {
  const sectionRef = useRef(null);
  const web3Ref = useRef(null);
  const mainRef = useRef(null);
  useEffect(() => {
    web3Ref.current.style.right = `${sectionRef.current.clientWidth + 16}px`;
    mainRef.current.style.paddingRight = `${sectionRef.current.clientWidth + 16}px`;
  }, [sectionRef])
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Web3Panel disconnect={disconnect} style={{ position: 'absolute', top: '0', right: '30%', display: 'inline' }} customRef={web3Ref}></Web3Panel>
      <main className="layout" ref={mainRef}>{children[0]}</main>
      <section style={{ flexShrink: 1, height: '100vh', position: 'fixed', right: '0' }} className="side-panel" ref={sectionRef}>
        {children[1]}
      </section>
    </div>
  )
}

export default View;