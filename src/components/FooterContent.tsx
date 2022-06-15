import React from 'react'
import styled from '@emotion/styled'
import { Markdown } from 'react-showdown'
import { Maybe, Scalars } from '../types/gql-types'

type FooterContentProps = {
  pageContext: {
    sources: Maybe<Array<Maybe<Scalars['String']>>>
  }
}

const FC = styled.footer`
  font-size: 0.8rem;

  padding: 2rem 1rem;

  li {
    list-style: circle;
  }
`

export const FooterContent: React.FC<FooterContentProps> = ({
  pageContext,
}) => {
  return (
    <FC>
      <h4>Sources</h4>
      {pageContext.sources && (
        <ul>
          {pageContext.sources.map((source, idx) => (
            <li key={`footer_${idx}`}>
              <Markdown markdown={source} />
            </li>
          ))}
        </ul>
      )}
    </FC>
  )
}
