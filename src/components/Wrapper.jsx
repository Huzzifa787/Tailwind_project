import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div style={{ border: "5px solid black", padding: "10px" }}>
        {children}
    </div>
  )
}

export default Wrapper