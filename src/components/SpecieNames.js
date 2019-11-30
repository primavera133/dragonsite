import React from 'react'
import styled from '@emotion/styled'

const SpecieNames = styled.div`
  margin: 0 0 1rem;
`

const H1 = styled.h1`
  margin: 0;
  font-style: italic;
`
const AuthorCitation = styled.div``

const H3 = styled.h3`
  margin: 0;
  line-height: 2.3rem;
  display: inline;

  :after {
    content: ', ';
  }

  :last-child:after {
    content: '';
  }
`

export default ({ pageContext }) => {
  return (
    <SpecieNames>
      <H1>{pageContext.scientific_name}</H1>
      <AuthorCitation>{pageContext.author_citation}</AuthorCitation>
      {pageContext.local_names.map((name, idx) => (
        <H3 key={`ln_${idx}`}>{name}</H3>
      ))}
    </SpecieNames>
  )
}
