import React from 'react'
import styled from '@emotion/styled'

const SpecieThumb = styled.div`
  background-color: lightgrey;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ({ pageContext }) => (
  <SpecieThumb>
    SpecieThumb placeholder {pageContext.scientific_name}
  </SpecieThumb>
)
