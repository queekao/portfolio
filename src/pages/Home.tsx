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
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  padding: 2rem;
  align-items: center;
  justify-items: center;
`
const Home: React.FC = () => {
  return (
    <>
      <H1>Portofolio</H1>
      <Container>
        <Card generic={'pig'} />
        <Card generic={'energy'} />
        <Card generic={'secpaas'} />
        <Card generic={'chroma'} />
      </Container>
    </>
  )
}

export default Home
