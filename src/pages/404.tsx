import * as React from 'react'
import { PageProps } from 'gatsby'
import { SiteDataProps } from '../types/siteDataProps'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const NotFoundPage: React.FC<PageProps<SiteDataProps>> = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness...</p>
  </Layout>
)

export default NotFoundPage
