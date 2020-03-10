import React from 'react'
import LayoutOne from '../components/LayoutOne'
import Search from '../components/Search'
import GenusSpecieList from '../components/GenusSpecieList'

export default ({ pageContext }) => {
  return (
    <LayoutOne
      head={
        <>
          <Search names={pageContext.names} />
        </>
      }
    >
      <h2>{pageContext.title}</h2>
      {pageContext.species.length === 1 && (
        <p>This is the specie of genus {pageContext.genus_name}.</p>
      )}
      {pageContext.species.length > 1 && (
        <p>These are the species of genus {pageContext.genus_name}.</p>
      )}
      <GenusSpecieList species={pageContext.species} />
    </LayoutOne>
  )
}
