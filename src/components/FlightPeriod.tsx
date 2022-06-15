import React from 'react'
import styled from '@emotion/styled'
import { Maybe, Scalars } from '../types/gql-types'

type FlightPeriodProps = {
  pageContext: {
    flight_period: Maybe<Scalars['String']>
  }
}

const Header = styled.h2`
  margin: 0;
`

export const FlightPeriod: React.FC<FlightPeriodProps> = ({ pageContext }) => (
  <div>
    <Header>Flight period</Header>
    {pageContext.flight_period}
  </div>
)
