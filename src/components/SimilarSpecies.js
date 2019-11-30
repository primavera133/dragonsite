import React from 'react'
import List from './List'
import ListLink from './ListLink'

export default ({ pageContext }) => {
  return (
    <>
      <h2>Similar species</h2>
      <List>
        {pageContext.similar_species.map((sp, idx) => (
          <ListLink to={`/species/${sp}`} key={`sp_${idx}`}>
            {sp}
          </ListLink>
        ))}
      </List>
    </>
  )
}
