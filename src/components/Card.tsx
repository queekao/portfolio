import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { cardData, CardType } from '../data/card'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  padding: 2rem;
  align-items: center;
  justify-items: center;
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
    font-weight: 300;
    margin-bottom: 7rem;
  }
`
const Card: React.FC = () => {
  return (
    <Container>
      {cardData.map((value: CardType, index: number) => {
        return (
          <Fragment key={index}>
            <Link to={value.path}>
              <div className="wrapper">
                <img src={value.image} alt={value.generic} />
              </div>
              <h3>{value.content}</h3>
            </Link>
          </Fragment>
        )
      })}
    </Container>
  )
}
export default Card
