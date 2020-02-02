import React from 'react'
import LayoutOne from '../components/LayoutOne'
import Search from '../components/Search'
import FamilySpecieList from '../components/FamilySpecieList'

export default ({ pageContext }) => {
  return (
    <LayoutOne
      head={
        <>
          <Search names={pageContext.names} />
        </>
      }
    >
      <h2>{pageContext.family_name}</h2>
      <p>These are the species of family {pageContext.family_name}.</p>
      <FamilySpecieList species={pageContext.species} />
    </LayoutOne>
  )
}
