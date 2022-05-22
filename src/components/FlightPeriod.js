import React from 'react'
import styled from '@emotion/styled'

const Header = styled.h2`
  margin: 0;
`

export const FlightPeriod = ({ pageContext }) => (
  <div>
    <Header>Flight period</Header>
    {pageContext.flight_period}
  </div>
)
