import React from 'react'
import styled from '@emotion/styled'
import Card from '../components/Card'
const H1 = styled.h1`
  font-size: 6rem;
  color: var(--black);
  margin-top: 3rem;
  text-align: center;
  font-weight: lighter;
  margin-bottom: 5rem;
  font-weight: 400;
`
const Home: React.FC = () => {
  return (
    <>
      <H1>Portofolio</H1>
      <Card />
    </>
  )
}

export default Home
