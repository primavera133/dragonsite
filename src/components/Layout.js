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
      grid-template-rows: 100px auto 1fr 100px;
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
      grid-template-rows: 100px auto 100px;
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

    @media all and (min-width: 768px) {
      flex-flow: row;
    }
  `

  const HeaderLink = styled(Link)`
    text-shadow: none;
    background-image: none;
    color: hsla(0, 0%, 0%, 0.9);
  `

  const H3 = styled.h3`
    margin: 0;
    line-height: 1.8;
  `

  const Menu = styled.nav``

  const MenuList = styled.ul`
    list-style: none;
    margin: 0;
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
