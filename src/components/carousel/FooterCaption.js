import React from 'react'
import { Author } from '../Author'
import { License } from '../License'
import styled from '@emotion/styled'

const Span = styled.span`
  color: #000;
  background-color: #fff;
  opacity: 0.8;
  padding: 0.3rem 1rem;
  font-size: 0.842105263157895rem;
  a {
    color: #333;
  }
`

export const FooterCaption = ({ currentView, isModal }) => {
  const { caption, author, license } = currentView

  return (
    <Span>
      {caption}
      {author && caption ? ' - ' : null}
      {author ? (
        <Author
          href={author.url}
          target={author.url ? '_blank' : null}
          rel="noreferrer noopener"
          isModal={isModal}
        >
          {author.by}
        </Author>
      ) : null}
      <License license={license.license} url={license.licUrl} />
    </Span>
  )
}
