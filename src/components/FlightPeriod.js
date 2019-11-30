import React from 'react'
import styled from '@emotion/styled'

const FlightPeriod = styled.div``

const Header = styled.h2`
  margin: 0;
`

export default ({ pageContext }) => (
  <FlightPeriod>
    <Header>Flight period</Header>
    {pageContext.flight_period}
  </FlightPeriod>
)
