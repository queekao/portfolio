import React, { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { portfolioData, PortfolioData } from '../data/portfolioContent'
import { VideoIcon, LinkIcon, BackIcon } from '../assets/icon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  .title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 5rem;
  }
  .back {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    filter: drop-shadow(0px 0.823492px 12.3524px rgba(0, 0, 0, 0.13));
    border-radius: 40px;
  }
  img {
    width: 40rem;
    height: 130px;
    margin-right: 2rem;
    filter: drop-shadow(0px 0.823492px 12.3524px rgba(0, 0, 0, 0.13));
    @media (max-width: 37.5em) {
      width: 20rem;
      height: 70px;
    }
  }
  svg {
    @media (max-width: 37.5em) {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  h2 {
    font-size: 3.4rem;
    margin-top: 6rem;
    margin-bottom: 2rem;
    color: var(--black);
    text-align: center;
    font-weight: 400;
    @media (max-width: 50em) {
      margin-top: 2rem;
    }
  }
  video {
    width: 70rem;
    border-radius: 10px;
    margin-top: 6rem;
    height: 37rem;
    @media (max-width: 50em) {
      width: 100%;
      height: 30rem;
      margin-top: 2rem;
    }
  }
  p {
    font-size: 2rem;
    color: var(--black);
    max-width: 50rem;
    text-align: center;
    font-weight: 300;
    span {
      font-size: 2rem;
      color: var(--black);
      font-weight: 400;
    }
  }
`
function PortfolioContent(): React.ReactElement {
  const [data, setData] = useState<PortfolioData | undefined>(undefined)
  const [url, setUrl] = useState<string>('')
  const { portfolioId } = useParams()
  const navigate = useNavigate()
  useMemo(() => {
    if (portfolioId === 'pig') {
      setData(portfolioData[0])
    } else if (portfolioId === 'chroma') {
      setData(portfolioData[1])
    } else if (portfolioId === 'secpaas') {
      setData(portfolioData[2])
    } else if (portfolioId === 'energy') {
      setData(portfolioData[3])
    } else if (portfolioId === 'tycia') {
      setData(portfolioData[4])
    } else {
      setData(undefined)
    }
    // useMemo is able to cache portfolioId
  }, [portfolioId])
  useEffect(() => {
    const abortController = new AbortController()
    fetch(`${data?.video}`, { signal: abortController.signal })
      // Retrieve its body as ReadableStream
      .then(response => response.body)
      .then((rs: any) => {
        const reader = rs.getReader()
        return new ReadableStream({
          async start(controller) {
            const shouldRun = true
            while (shouldRun) {
              const { done, value } = await reader.read()

              // When no more data needs to be consumed, break the reading
              if (done) {
                break
              }

              // Enqueue the next data chunk into our target stream
              controller.enqueue(value)
            }

            // Close the stream
            controller.close()
            reader.releaseLock()
          }
        })
      })
      // Create a new response out of the stream
      .then(rs => new Response(rs))
      // Create an object URL for the response
      .then(response => response.blob())
      .then(blob => {
        const videoBlob = new Blob([blob], { type: 'video/mp4' })
        return URL.createObjectURL(videoBlob)
      })
      // Update image
      .then(url => setUrl(url))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Request aborted by user')
        } else {
          console.error('Error fetching data:', error)
        }
      })
    return () => {
      abortController.abort()
    }
  }, [data?.video])
  useEffect(() => {
    // failover
    if (!data) navigate('/not-found')
  }, [data, navigate])
  return (
    <Container>
      <Link to="/" className="back">
        <BackIcon />
      </Link>
      <div className="title">
        <img src={data?.titleImage} alt={data?.titleImageAlt} />
        <a href={data?.videoLink} target="_blank" rel="noreferrer">
          {data?.videoLink ? <VideoIcon /> : ''}
        </a>
        <a href={data?.webLink} target="_blank" rel="noreferrer">
          {data?.webLink ? <LinkIcon /> : ''}
        </a>
      </div>
      <p>
        {data?.intro}
        <span>{data?.introHighlight}</span>
      </p>
      <video src={url} autoPlay loop poster={data?.videoPoster} />
      <div>
        <h2>Callenge</h2>
        <p>{data?.callengeContent}</p>
      </div>
      <div>
        <h2>Skill I applied</h2>
        <p>{data?.skillContent}</p>
      </div>
    </Container>
  )
}

export default PortfolioContent
