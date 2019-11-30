import React from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import ListItem from '../components/ListItem'
import ListLink from '../components/ListLink'
import DefinitionList from '../components/DefinitionList'
import DefinitionItem from '../components/DefinitionItem'
import Topic from '../components/Topic'
import Definition from '../components/Definition'

export default ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.scientific_name}</h1>
      <h2>Popular names</h2>
      <List>
        {pageContext.local_names.map((name, idx) => (
          <ListItem key={`ln_${idx}`}>{name}</ListItem>
        ))}
      </List>
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
      <List>
        {pageContext.similar_species.map((sp, idx) => (
          <ListLink to={`/species/${sp}`} key={`sp_${idx}`}>
            {sp}
          </ListLink>
        ))}
      </List>
      <h2>Red list status</h2>
      <DefinitionList>
        <DefinitionItem>
          <Topic>EU27 Endemic</Topic>
          <Definition>{pageContext.red_list.EU27_endemic}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Habitats directive</Topic>
          <Definition>{pageContext.red_list.habitats_directive}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list EU27</Topic>
          <Definition>{pageContext.red_list.red_list_EU27}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list Europe endemic</Topic>
          <Definition>
            {pageContext.red_list.red_list_europe_endemic}
          </Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list Europe</Topic>
          <Definition>{pageContext.red_list.red_list_europe}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list Mediterranean</Topic>
          <Definition>{pageContext.red_list.red_list_mediterranean}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Tend Europe</Topic>
          <Definition>{pageContext.red_list.trend_europe}</Definition>
        </DefinitionItem>
      </DefinitionList>
    </Layout>
  )
}
