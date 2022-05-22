import React from 'react'
import MarkdownView from 'react-showdown'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { MediaLinks } from '../components/MediaLinks'
import { Search } from '../components/Search'
import { GenusSpecieList } from '../components/GenusSpecieList'
import { FooterContent } from '../components/FooterContent'
import { DistributionMap } from '../components/DistributionMap'

import './genusPage.css'

const markdownOptions = { tables: true }

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

const Family = styled(Link)`
  text-transform: capitalize;
`

const GenusPage = ({ pageContext }) => {
  return (
    <Layout
      head={
        <>
          <Search names={pageContext.names} />
        </>
      }
      left={
        <>
          <h2>Family</h2>
          <p>
            <Family to={`/families/${pageContext.family_name}`}>
              {pageContext.family_name}
            </Family>
          </p>
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
      wrapperNamespace="genus-page"
    >
      <H1>{pageContext.title}</H1>
      <AuthorCitation>{pageContext.author_citation}</AuthorCitation>
      <MarkdownView
        markdown={pageContext.description}
        options={markdownOptions}
      />
      <h3>Distribution</h3>
      <DistributionMap meta={pageContext.meta} />
    </Layout>
  )
}

export default GenusPage
