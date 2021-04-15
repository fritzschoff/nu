import { ReactChildren } from 'react'

interface View {
  children: ReactChildren
}

const View: React.FC<View> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <main className="layout">{children[0]}</main>
      <section style={{ flexShrink: 1 }} className="side-panel">
        {children[1]}
      </section>
    </div>
  )
}

export default View;