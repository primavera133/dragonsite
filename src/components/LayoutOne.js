import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import Header from './Header'

import './layout.css'

export default ({ head, left, right, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const Wrapper = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
      'header'
      'main-column'
      'footer';
    margin: 1rem;

    @media only screen and (min-width: 1024px) {
      grid-gap: 20px;
      max-width: 1440px;
    }

    @media only screen and (min-width: 1456px) {
      margin: 0 auto;
    }
  `

  const MiddleColumn = styled.main`
    grid-area: main-column;
  `

  return (
    <Wrapper>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
        />
      </Helmet>
      <Header title={data.site.siteMetadata.title}>{head}</Header>
      <MiddleColumn>{children}</MiddleColumn>
    </Wrapper>
  )
}
