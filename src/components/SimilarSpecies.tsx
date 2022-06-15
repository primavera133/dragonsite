import React from 'react'
import { ListLink } from './ListLink'

type SimilarSpeciesProps = {
  pageContext: {
    similar_species: string[]
  }
}

export const SimilarSpecies: React.FC<SimilarSpeciesProps> = ({
  pageContext,
}) => {
  return (
    <>
      <h2>Similar species</h2>
      <ul>
        {pageContext.similar_species.map((sp, idx) => (
          <ListLink to={`/species/${sp}`} key={`sp_${idx}`}>
            {sp}
          </ListLink>
        ))}
      </ul>
    </>
  )
}
