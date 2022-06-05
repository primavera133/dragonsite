import React from 'react'
import { Markdown } from 'react-showdown'

export const Distribution = ({ pageContext }) => (
  <div>
    <Markdown markup={pageContext.distribution} />
  </div>
)
