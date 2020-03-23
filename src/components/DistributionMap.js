import styled from '@emotion/styled'
import React from 'react'
import TaxonMap from './TaxonMap'

const DistributionMapContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: pink;

  @media all and (min-width: 768px) {
    padding-bottom: 85%;
  }
  @media all and (min-width: 1024px) {
    padding-bottom: 55%;
  }
`

const Fig = styled.figure`
  margin: 0 0 0.5rem;
`
const Figcap = styled.figcaption`
  font-size: 0.7rem;
`

const getTaxonKey = meta => meta.find(m => m.label === 'gbifTaxonKey').value

const DistributionMap = ({ meta }) => {
  const taxonKey = getTaxonKey(meta)
  return (
    <Fig>
      <DistributionMapContainer>
        <TaxonMap taxonKey={taxonKey} />
      </DistributionMapContainer>
      <Figcap>
        Distribution map. Data from{' '}
        <a href='https://gbif.org' target='_blank' rel='noopener noreferer'>
          gbif.org
        </a>
      </Figcap>
    </Fig>
  )
}

export default DistributionMap
