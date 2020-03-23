import React from 'react'
import { Markdown } from 'react-showdown'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import MediaLinks from '../components/MediaLinks'
import Search from '../components/Search'
import FamilySpecieList from '../components/FamilySpecieList'
import FooterContent from '../components/FooterContent'
import DistributionMap from '../components/DistributionMap'

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

const FamilyName = styled.span`
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
            Species of <FamilyName>{pageContext.family_name}</FamilyName>
          </H2>
          <FamilySpecieList species={pageContext.species} />
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
    >
      <H1>{pageContext.title}</H1>
      <AuthorCitation>{pageContext.author_citation}</AuthorCitation>

      <Markdown markup={pageContext.description} />

      <h3>Distribution</h3>
      <DistributionMap meta={pageContext.meta} />
    </Layout>
  )
}
