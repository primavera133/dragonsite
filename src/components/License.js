import React from 'react'
import styled from '@emotion/styled'

const License = styled.a`
  margin: 0 0 0 0.25rem;
  background-image: none;
  // vertical-align: baseline;
`

const LicImg = styled.img`
  margin: 0 1px;
`

export default ({ license, url }) => {
  let hasCC = license.toLowerCase().includes('cc')
  let hasBY = license.toLowerCase().includes('by')
  let hasSA = license.toLowerCase().includes('sa')

  return (
    <License href={url} target='_blank' rel='noreferrer noopener'>
      {hasCC && <LicImg src='/cc.png' alt='Creative Commons' />}
      {hasBY && <LicImg src='/by.png' alt='' />}
      {hasSA && <LicImg src='/sa.png' alt='' />}
    </License>
  )
}
