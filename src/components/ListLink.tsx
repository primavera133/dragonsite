import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type ListLinkProps = {
  inline?: boolean
  to: string
  children: string
}

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

export const ListLink: React.FC<ListLinkProps> = ({
  inline = false,
  to,
  children,
}) => {
  if (inline) {
    return (
      <LiInline>
        <Link to={to}>{children}</Link>
      </LiInline>
    )
  } else {
    return (
      <Li>
        <Link to={to}>{children}</Link>
      </Li>
    )
  }
}
