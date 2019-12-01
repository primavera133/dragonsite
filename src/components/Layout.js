import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import ListLink from './ListLink'
import styled from '@emotion/styled'
import FooterContent from './FooterContent'

export default ({ left, right, children }) => {
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

  const Header = styled.header`
    grid-area: header;
    margin-bottom: 1.5rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    border-bottom: solid 0.5rem #deded2;

    padding: 1rem 2rem;
    margin: -1rem -1rem 1.2rem;

    @media all and (min-width: 768px) {
      flex-flow: row;
      padding: 2rem 1rem 2rem 3rem;
    }
  `

  const HeaderLink = styled(Link)`
    text-shadow: none;
    background-image: none;
    color: #5c4031;
  `

  const H3 = styled.h3`
    color: #5c4031;
    margin: 0;
    line-height: 1.8;
    display: flex;
    justify-content: space-between;

    img {
      max-width: 48px;
      display: inline;
      vertical-align: middle;
      margin: 0 0.3rem 0 0;
    }

    @media all and (min-width: 768px) {
      display: block;
      font-size: 1.5rem;
      img {
        max-width: 58px;
        margin: 0 1rem 0 0;
      }
    }

    @media all and (min-width: 1024px) {
      font-size: 2.5rem;
      img {
        max-width: 78px;
        margin: 0 1rem 0 0;
      }
    }
  `

  const Menu = styled.nav`
    text-align: right;
    @media all and (min-width: 768px) {
      margin-top: -1rem;
    }
    @media all and (min-width: 1456px) {
      margin-top: 0;
    }
  `

  const MenuList = styled.ul`
    list-style: none;
    margin: 0;
    li {
      margin-bottom: 0;
    }
    a {
      color: #5c4031;

      text-shadow: none;
      font-family: 'Varela Round', sans-serif;
      text-decoration: none;
      background-image: none;
      :hover {
        text-decoration: underline;
      }
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
    grid-area: footer;
  `

  return (
    <Wrapper>
      <Header>
        <H3>
          <img src='/libellula-bw.png' alt='libellula' />
          <HeaderLink to={'/'}>{data.site.siteMetadata.title}</HeaderLink>
        </H3>
        <Menu>
          <MenuList>
            <ListLink inline to='/'>
              Home
            </ListLink>
            <ListLink inline to='/about/'>
              About
            </ListLink>
            <ListLink inline to='/species/'>
              Species
            </ListLink>
          </MenuList>
        </Menu>
      </Header>
      <FirstColumn>{left}</FirstColumn>
      <MiddleColumn>{children}</MiddleColumn>
      <ThirdColumn>{right}</ThirdColumn>
      <Footer>
        <FooterContent />
      </Footer>
    </Wrapper>
  )
}
