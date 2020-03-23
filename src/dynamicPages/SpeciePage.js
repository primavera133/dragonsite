import React from 'react'
import { Markdown } from 'react-showdown'

import Layout from '../components/Layout'
import SpecieNames from '../components/SpecieNames'
import SpecieMain from '../components/SpecieMain'
import Distribution from '../components/Distribution'
import DistributionMap from '../components/DistributionMap'
import SimilarSpecies from '../components/SimilarSpecies'
import RedListStatus from '../components/RedListStatus'
import FlightPeriod from '../components/FlightPeriod'
import MediaLinks from '../components/MediaLinks'
// import ReportLinks from '../components/ReportLinks'
import Search from '../components/Search'
import { ImageCarousel } from '../components/carousel/ImageCarousel'
import FooterContent from '../components/FooterContent'

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
          {/* <ReportLinks pageContext={pageContext} /> */}
        </>
      }
      footer={
        <>
          <FooterContent pageContext={pageContext} />
        </>
      }
    >
      <SpecieNames pageContext={pageContext} />
      <SpecieMain pageContext={pageContext} />
      <ImageCarousel pageContext={pageContext} />
      <h2>Description</h2>
      <Markdown markup={pageContext.description} />
      <h2>Behaviour</h2>
      <Markdown markup={pageContext.behaviour} />
      <h2>Distribution</h2>
      <DistributionMap meta={pageContext.meta} />
      <Distribution pageContext={pageContext} />
      <h2>Habitat</h2>
      <Markdown markup={pageContext.habitat} />
    </Layout>
  )
}
