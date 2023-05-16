import React from 'react'
import styled from '@emotion/styled'
import { cardData } from '../data/card'
import { Link } from 'react-router-dom'

interface Props {
  generic: string
}
const Container = styled.div`
  .wrapper {
    // this is used to avoid cumulative layout shift
    width: 310px;
    height: 200px;
    margin: 0 auto;
    @media (max-width: 37.5em) {
      width: 248px;
      height: 160px;
    }
  }
  img {
    width: 100%;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
  h3 {
    font-size: 2rem;
    color: var(--black);
    margin-top: 2.5rem;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 7rem;
  }
`
const Card: React.FC<Props> = ({ generic }) => {
  return (
    <Container>
      {generic === 'pig' && (
        <Link to="/portfolio/pig">
          <div className="wrapper">
            <img src={cardData[0].image} alt="pig" />
          </div>
        </Link>
      )}
      {generic === 'pig' && <h3>{cardData[0].content}</h3>}
      {generic === 'chroma' && (
        <Link to="/portfolio/chroma">
          <div className="wrapper">
            <img src={cardData[1].image} alt="chroma" />
          </div>
        </Link>
      )}
      {generic === 'chroma' && <h3>{cardData[1].content}</h3>}
      {generic === 'secpaas' && (
        <Link to="/portfolio/secpaas">
          <div className="wrapper">
            <img src={cardData[2].image} alt="secpaas" />
          </div>
        </Link>
      )}
      {generic === 'secpaas' && <h3>{cardData[2].content}</h3>}
      {generic === 'energy' && (
        <Link to="/portfolio/energy">
          <div className="wrapper">
            <img src={cardData[3].image} alt="energy" />
          </div>
        </Link>
      )}
      {generic === 'energy' && <h3>{cardData[3].content}</h3>}
    </Container>
  )
}
export default Card
