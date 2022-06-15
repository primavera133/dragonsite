import React from 'react'
import { Maybe, Scalars } from '../types/gql-types'
import { Markdown } from 'react-showdown'

type DistributionProps = {
  pageContext: {
    distribution: Maybe<Scalars['String']>
  }
}

export const Distribution: React.FC<DistributionProps> = ({ pageContext }) => (
  <div>
    <Markdown markdown={pageContext.distribution} />
  </div>
)
