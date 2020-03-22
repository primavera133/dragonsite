import React from 'react'
import styled from '@emotion/styled'

const MediaLinks = styled.div``

export default ({ pageContext }) => {
  return (
    (pageContext.links && (
      <MediaLinks>
        <h4>Links</h4>
        <ul>
          {pageContext.links.map((link, idx) => (
            <li key={`link${idx}`}>
              <a href={link.link} target='_blank' rel='noopener noreferrer'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </MediaLinks>
    )) ||
    null
  )
}
