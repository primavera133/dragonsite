import React from 'react'
import styled from '@emotion/styled'

type TopicProps = {
  children: string
}

const DT = styled.dt`
  flex: 0 1 auto;
  margin: 0;
  order: 1;
  display: flex;
  align-items: center;
`

export const Topic: React.FC<TopicProps> = ({ children }) => <DT>{children}</DT>
