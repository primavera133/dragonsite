import React from 'react'
import styled from '@emotion/styled'

const Distribution = styled.div``

export default ({ pageContext }) => (
  <Distribution>
    <h2>Distribution</h2>
    <p>{pageContext.distribution}</p>
  </Distribution>
)
