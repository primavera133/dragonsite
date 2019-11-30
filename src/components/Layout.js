import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import ListLink from './ListLink'
import styled from '@emotion/styled'

export default ({ children }) => {
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
    margin: 3rem auto;
    max-width: 650px;
    padding: 0 1rem;
  `

  const Header = styled.header`
    margin-bottom: 1.5rem;
  `

  const HeaderLink = styled(Link)`
    text-shadow: none;
    background-image: none;
  `

  const H3 = styled.h3`
    display: inline;
  `

  const Menu = styled.nav`
    float: right;
  `

  const MenuList = styled.ul`
    list-style: none;
  `

  return (
    <Wrapper>
      <Header>
        <HeaderLink>
          <H3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</H3>
        </HeaderLink>
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
      {children}
    </Wrapper>
  )
}
