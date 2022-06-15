import React from 'react'
import styled from '@emotion/styled'
import { Maybe, Scalars } from '../types/gql-types'

type LicenseProps = {
  license: Scalars['String']
  url: Maybe<Scalars['String']>
}

const LicenseLink = styled.a`
  margin: 0 0 0 0.25rem;
  background-image: none;
`

const LicImg = styled.img`
  margin: 0 1px;
`

export const License: React.FC<LicenseProps> = ({ license, url }) => {
  let hasCC = license.toLowerCase().includes('cc')
  let hasBY = license.toLowerCase().includes('by')
  let hasSA = license.toLowerCase().includes('sa')

  return (
    <LicenseLink href={url} target="_blank" rel="noreferrer noopener">
      {hasCC && <LicImg src="/cc.png" alt="Creative Commons CC" />}
      {hasBY && <LicImg src="/by.png" alt="Creative Commons BY" />}
      {hasSA && <LicImg src="/sa.png" alt="Creative Commons SA" />}
    </LicenseLink>
  )
}
