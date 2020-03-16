import React from 'react'
import { Markdown } from 'react-showdown'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import MediaLinks from '../components/MediaLinks'
import Search from '../components/Search'
import GenusSpecieList from '../components/GenusSpecieList'
import FooterContent from '../components/FooterContent'

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
    >
      <H1>{pageContext.title}</H1>
      <AuthorCitation>{pageContext.author_citation}</AuthorCitation>
      <Markdown markup={pageContext.description} />
    </Layout>
  )
}
