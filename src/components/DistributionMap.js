import styled from '@emotion/styled'
import React from 'react'
import TaxonMap from './TaxonMap'

const DistributionMapContainer = styled.div`
  width: 100%;
  padding-bottom: 75%;
  position: relative;
  background-color: pink;
`

const getTaxonKey = meta => meta.find(m => m.label === 'gbifTaxonKey').value

const DistributionMap = ({ meta }) => {
  const taxonKey = getTaxonKey(meta)
  return (
    <DistributionMapContainer>
      <TaxonMap taxonKey={taxonKey} />
    </DistributionMapContainer>
  )
}

export default DistributionMap
