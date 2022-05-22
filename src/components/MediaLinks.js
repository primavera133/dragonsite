import React from 'react'

export const MediaLinks = ({ pageContext }) => {
  return (
    (pageContext.links && (
      <div>
        <h4>Links</h4>
        <ul>
          {pageContext.links.map((link, idx) => (
            <li key={`link${idx}`}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )) ||
    null
  )
}
