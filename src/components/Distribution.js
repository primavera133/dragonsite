import React from 'react'
import styled from '@emotion/styled'
import { Markdown } from 'react-showdown'

const Distribution = styled.div``

export default ({ pageContext }) => (
  <Distribution>
    <h2>Distribution</h2>
    <Markdown markup={pageContext.distribution} />
  </Distribution>
)
