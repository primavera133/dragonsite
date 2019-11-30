import React from 'react'
import styled from '@emotion/styled'

const Li = styled.li`
  list-style: circle;
`

export default ({ children }) => {
  return <Li>{children}</Li>
}
