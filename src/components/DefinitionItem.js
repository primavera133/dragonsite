import React from 'react'
import styled from '@emotion/styled'

const DefinitionItem = styled.div`
  display: flex;
  margin: 0.5rem 0;
  border-bottom: 1px dotted #333;

  :after {
    content: '';
    flex: 1 1 auto;
    margin: 0 0.5rem 0.4rem;
    order: 2;
  }
`

export default ({ children }) => <DefinitionItem>{children}</DefinitionItem>
