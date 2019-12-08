import React from 'react'
import Layout from '../components/Layout'
import SpecieNames from '../components/SpecieNames'
import SpecieMain from './SpecieMain'
import Distribution from './Distribution'
import SimilarSpecies from './SimilarSpecies'
import RedListStatus from './RedListStatus'
import FlightPeriod from './FlightPeriod'
import MediaLinks from './MediaLinks'
import ReportLinks from './ReportLinks'
import Search from './Search'

export default ({ pageContext }) => {
  return (
    <Layout
      head={
        <>
          <Search names={pageContext.names} />
        </>
      }
      left={
        <>
          <FlightPeriod pageContext={pageContext} />
          <SimilarSpecies pageContext={pageContext} />
          <RedListStatus pageContext={pageContext} />
        </>
      }
      right={
        <>
          <MediaLinks pageContext={pageContext} />
          <ReportLinks pageContext={pageContext} />
        </>
      }
    >
      <SpecieNames pageContext={pageContext} />
      <SpecieMain pageContext={pageContext} />
      <h2>Description</h2>
      <p>{pageContext.description}</p>
      <h2>Behaviour</h2>
      <p>{pageContext.behaviour}</p>
      <h2>Habitat</h2>
      <p>{pageContext.habitat}</p>
      <Distribution pageContext={pageContext} />
    </Layout>
  )
}
