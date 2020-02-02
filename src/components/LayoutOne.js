import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import ListLink from './ListLink'
import styled from '@emotion/styled'
import FooterContent from './FooterContent'
import Helmet from 'react-helmet'
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
      padding: 1rem 1rem 2rem 3rem;
      // padding: 2rem 1rem 2rem 3rem;
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
      max-height: 51px;
      display: inline;
      vertical-align: text-top;
      margin: 0 0.3rem 0 0;
    }

    @media all and (min-width: 768px) {
      display: block;
      font-size: 1.7rem;
      img {
        max-width: 58px;
        max-height: 62px;
        margin: 0 1rem 0 0;
      }
    }

    @media all and (min-width: 1024px) {
      font-size: 2.5rem;
      img {
        max-width: 78px;
        max-height: 83px;
        margin: 0 1rem 0 0;
      }
    }
  `

  const Menu = styled.nav`
    text-align: right;
    @media all and (min-width: 768px) {
      margin-top: 0;
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
  const MiddleColumn = styled.main`
    grid-area: main-column;
  `

  const Footer = styled.footer`
    grid-area: footer;
  `

  return (
    <Wrapper>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
        />
      </Helmet>
      <Header>
        <div>
          <H3>
            <img src='/libellula-bw.png' alt='libellula' />
            <HeaderLink to={'/'}>{data.site.siteMetadata.title}</HeaderLink>
          </H3>
          {head}
        </div>

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
      <MiddleColumn>{children}</MiddleColumn>
    </Wrapper>
  )
}
