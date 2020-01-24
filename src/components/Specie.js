import React from "react"
import Layout from "../components/Layout"
import SpecieNames from "../components/SpecieNames"
import SpecieMain from "./SpecieMain"
import Distribution from "./Distribution"
import SimilarSpecies from "./SimilarSpecies"
import RedListStatus from "./RedListStatus"
import FlightPeriod from "./FlightPeriod"
import MediaLinks from "./MediaLinks"
import ReportLinks from "./ReportLinks"
import Search from "./Search"
import { ImageCarousel } from "./carousel/ImageCarousel"
import { Markdown } from "react-showdown"

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
      <ImageCarousel pageContext={pageContext} />
      <h2>Description</h2>
      <Markdown markup={pageContext.description} />
      <h2>Behaviour</h2>
      <Markdown markup={pageContext.behaviour} />
      <h2>Habitat</h2>
      <Markdown markup={pageContext.habitat} />
      <Distribution pageContext={pageContext} />
    </Layout>
  )
}
