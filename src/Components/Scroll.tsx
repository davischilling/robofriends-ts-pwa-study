import * as React from 'react'

interface IScrollStateless {
  children: JSX.Element
}

const Scroll: React.FunctionComponent<IScrollStateless> = ({
  children
}) => {
  return (
    <div style={{ overflowY: 'scroll', height: '800px' }}>
      {children}
    </div>
  )
}

export default Scroll
