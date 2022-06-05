import React from 'react'
import styled from '@emotion/styled'
import { Markdown } from 'react-showdown'

const FC = styled.footer`
  font-size: 0.8rem;

  padding: 2rem 1rem;

  li {
    list-style: circle;
  }
`

export const FooterContent = ({ pageContext }) => {
  return (
    <FC>
      <h4>Sources</h4>
      {pageContext.sources && (
        <ul>
          {pageContext.sources.map((source, idx) => (
            <li key={`footer_${idx}`}>
              <Markdown markup={source} />
            </li>
          ))}
        </ul>
      )}
    </FC>
  )
}
