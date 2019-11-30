import React from 'react'
import styled from '@emotion/styled'

const Topic = styled.dt`
  flex: 0 1 auto;
  margin: 0;
  order: 1;
  display: flex;
  align-items: center;
`

export default ({ children }) => <Topic>{children}</Topic>
