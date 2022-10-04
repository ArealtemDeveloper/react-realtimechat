import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Wrapper>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export default Loader