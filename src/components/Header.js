import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ListLink } from './ListLink'
import { LogoHexagon } from './LogoHexagon'

const HeaderOuter = styled.header`
  grid-area: header;
  margin-bottom: 1.5rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  border-bottom: solid 0.5rem #deded2;

  padding: 1rem 1rem;
  margin: -1rem -1rem 1.2rem;

  @media all and (min-width: 768px) {
    flex-flow: row;
    padding: 1rem 2rem 2rem;
    // padding: 2rem 1rem 2rem 3rem;
  }
`
const HeaderWrapper = styled.div`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: 72px auto;
  grid-template-areas:
    'left top'
    'left bottom';

  @media all and (min-width: 768px) {
    display: grid;
    grid-column-gap: 1.5rem;
    grid-template-columns: 100px auto;
    grid-template-areas:
      'left top'
      'left bottom';
  }
  @media all and (min-width: 1024px) {
    grid-column-gap: 1.75rem;
  }
`

const HeaderLink = styled(Link)`
  text-shadow: none;
  background-image: none;
  color: #5c4031;
`

const H3 = styled.h3`
  grid-area: top;
  color: #5c4031;
  margin: 0;
  line-height: 1.8;

  @media all and (min-width: 768px) {
    grid-area: top;
    display: block;
    font-size: 1.7rem;
    text-align: left;
  }

  @media all and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`

const Menu = styled.nav`
  grid-area: bottom;
  margin-top: 0;
  min-width: 230px;

  text-align: right;
  @media all and (min-width: 768px) {
    grid-area: bottom;
    margin-top: 0;
    min-width: 230px;
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

export const Header = ({ title, children }) => {
  return (
    <HeaderOuter>
      <HeaderWrapper>
        <LogoHexagon />
        {/* <Libellula src='/libellula-bw.png' alt='libellula' /> */}
        <H3>
          <HeaderLink to={'/'}>{title}</HeaderLink>
        </H3>
        {children}
      </HeaderWrapper>

      <Menu>
        <MenuList>
          <ListLink inline to="/">
            Home
          </ListLink>
          <ListLink inline to="/families/">
            Families
          </ListLink>
          <ListLink inline to="/genera/">
            Genera
          </ListLink>
          <ListLink inline to="/species/">
            Species
          </ListLink>
          <ListLink inline to="/about/">
            About
          </ListLink>
        </MenuList>
      </Menu>
    </HeaderOuter>
  )
}
