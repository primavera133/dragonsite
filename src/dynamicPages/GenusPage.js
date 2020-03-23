import React from 'react'
import { Converter } from 'react-showdown'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import MediaLinks from '../components/MediaLinks'
import Search from '../components/Search'
import GenusSpecieList from '../components/GenusSpecieList'
import FooterContent from '../components/FooterContent'
import DistributionMap from '../components/DistributionMap'

import './genusPage.css'

const converter = new Converter({ tables: true })

const H1 = styled.h1`
  margin: 0;
  font-style: italic;
`

const H2 = styled.h2`
  margin: 0 0 1rem;
`

const AuthorCitation = styled.div`
  margin: 0 0 1rem;
`

const GenusName = styled.span`
  text-transform: capitalize;
`

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
          <H2>
            Species of
            <GenusName> {pageContext.genus_name}</GenusName>
          </H2>
          <GenusSpecieList species={pageContext.species} />
        </>
      }
      right={
        <>
          <MediaLinks pageContext={pageContext} />
        </>
      }
      footer={
        <>
          <FooterContent pageContext={pageContext} />
        </>
      }
      wrapperNamespace='genus-page'
    >
      <H1>{pageContext.title}</H1>
      <AuthorCitation>{pageContext.author_citation}</AuthorCitation>
      {converter.convert(pageContext.description)}
      <h3>Distribution</h3>
      <DistributionMap meta={pageContext.meta} />
    </Layout>
  )
}
