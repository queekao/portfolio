import React from 'react'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Portofolio from './pages/Portfolio'
import { Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'
function App(): React.ReactElement {
  const P = styled.p`
    text-align: center;
    font-size: 1.6rem;
    margin-top: 4rem;
    margin-bottom: 6rem;
    color: var(--black);
    a {
      font-size: 1.6rem;
      font-weight: 500;
    }
  `
  return (
    <>
      <P>
        Contact:{' '}
        <a href="mailto:xeriok92599@gmail.com" rel="noreferrer">
          xeriok925999@gmail.com
        </a>
      </P>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/portfolio/:portfolioId" element={<Portofolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
