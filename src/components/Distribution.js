import React from 'react'
import styled from '@emotion/styled'
import { Markdown } from 'react-showdown'

const Distribution = styled.div``

export default ({ pageContext }) => (
  <Distribution>
    <Markdown markup={pageContext.distribution} />
  </Distribution>
)
