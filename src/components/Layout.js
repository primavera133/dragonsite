import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import './layout.css'
import Header from './Header'

export default ({ head, left, right, children, footer, wrapperNamespace }) => {
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
      'first-column'
      'third-column'
      'footer';
    margin: 1rem;

    @media only screen and (min-width: 500px) {
      grid-template-columns: 33% auto;
      grid-template-rows: auto auto 1fr 100px;
      grid-template-areas:
        'header   header'
        'first-column  main-column'
        'third-column main-column'
        'footer   footer';
      margin: 1rem;
    }

    @media only screen and (min-width: 1024px) {
      grid-gap: 20px;
      grid-template-columns: 25% auto 25%;
      grid-template-rows: auto auto 100px;
      grid-template-areas:
        'header  header  header'
        'first-column main-column third-column'
        'footer  footer  footer';
      max-width: 1440px;
    }

    @media only screen and (min-width: 1456px) {
      margin: 0 auto;
    }
  `

  const FirstColumn = styled.aside`
    grid-area: first-column;
  `
  const MiddleColumn = styled.main`
    grid-area: main-column;
  `
  const ThirdColumn = styled.aside`
    grid-area: third-column;
  `
  const Footer = styled.footer`
    background: #deded2;
  `

  return (
    <>
      <Wrapper className={wrapperNamespace}>
        <Helmet>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
          />
          <link
            rel='stylesheet'
            href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
            integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
            crossorigin=''
          />
        </Helmet>
        <Header title={data.site.siteMetadata.title}>{head}</Header>

        <FirstColumn>{left}</FirstColumn>
        <MiddleColumn>{children}</MiddleColumn>
        <ThirdColumn>{right}</ThirdColumn>
      </Wrapper>
      <Footer>{footer}</Footer>
    </>
  )
}
