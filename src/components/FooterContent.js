import React from 'react'
import styled from '@emotion/styled'

const FooterContent = styled.footer`
  font-size: 0.8rem;

  padding: 2rem 1rem;

  li {
    list-style: circle;
  }
`

export default ({ pageContext }) => {
  return (
    <FooterContent>
      <h4>Sources</h4>
      {pageContext.sources && (
        <ul>
          {pageContext.sources.map((source, idx) => (
            <li key={`footer_${idx}`}>{source}</li>
          ))}
        </ul>
      )}
    </FooterContent>
  )
}
