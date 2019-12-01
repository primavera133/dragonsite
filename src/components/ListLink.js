import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Li = styled.li`
  display: list-item;
  list-style: circle;
`
const LiInline = styled(Li)`
  display: inline-block;
  margin-right: 1rem;
  :last-child {
    margin-right: 0;
  }
`

const ListLink = props => {
  if (props.inline) {
    return (
      <LiInline>
        <Link to={props.to}>{props.children}</Link>
      </LiInline>
    )
  } else {
    return (
      <Li>
        <Link to={props.to}>{props.children}</Link>
      </Li>
    )
  }
}

export default ListLink
