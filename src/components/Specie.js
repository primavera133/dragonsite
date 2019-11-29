import React from 'react'
import Layout from '../components/Layout'

export default (props, { pageContext }) => {
  return (
    <Layout>
      <h1>{props.pageContext.scientific_name}</h1>
      <p>{props.pageContext.description}</p>
    </Layout>
  )
}
