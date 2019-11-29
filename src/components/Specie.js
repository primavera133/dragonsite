import React from 'react'
import Layout from '../components/Layout'
import ListLink from '../components/ListLink'

export default ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.scientific_name}</h1>
      <h2>Popular names</h2>
      <ul>
        {pageContext.local_names.map((name, idx) => (
          <li key={`ln_${idx}`}>{name}</li>
        ))}
      </ul>
      <h2>Flight period</h2>
      {pageContext.flight_period}
      <h2>Description</h2>
      <p>{pageContext.description}</p>
      <h2>behaviour</h2>
      <p>{pageContext.behaviour}</p>
      <h2>Distribution</h2>
      <p>{pageContext.distribution}</p>
      <h2>Habitat</h2>
      <p>{pageContext.habitat}</p>
      <h2>Similar species</h2>
      <ul>
        {pageContext.similar_species.map((sp, idx) => (
          <ListLink to={`/species/${sp}`} key={`sp_${idx}`}>
            {sp}
          </ListLink>
        ))}
        <h2>Red list status</h2>
        <dl>
          <dt>EU27 Endemic</dt>
          <dd>{pageContext.red_list.EU27_endemic}</dd>
          <dt>Habitats directive</dt>
          <dd>{pageContext.red_list.habitats_directive}</dd>
          <dt>Red list EU27</dt>
          <dd>{pageContext.red_list.red_list_EU27}</dd>
          <dt>Red list Europe endemic</dt>
          <dd>{pageContext.red_list.red_list_europe_endemic}</dd>
          <dt>Red list Europe</dt>
          <dd>{pageContext.red_list.red_list_europe}</dd>
          <dt>Red list Mediterranean</dt>
          <dd>{pageContext.red_list.red_list_mediterranean}</dd>
          <dt>Tend Europe</dt>
          <dd>{pageContext.red_list.trend_europe}</dd>
        </dl>
      </ul>
    </Layout>
  )
}
