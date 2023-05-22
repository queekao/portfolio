import React from 'react'
import styled from '@emotion/styled'
const Container = styled.div`
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    color: var(--black);
    text-align: center;
    font-weight: 400;
  }
`
const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>404 Not Found</h1>
    </Container>
  )
}

export default NotFound
