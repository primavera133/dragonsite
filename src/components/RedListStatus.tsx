import React from 'react'
import { DefinitionList } from './DefinitionList'
import { DefinitionItem } from './DefinitionItem'
import { Topic } from './Topic'
import { Definition } from './Definition'
import { RedList } from '../types/gql-types'

type RedListStatusProps = {
  pageContext: {
    red_list: RedList
  }
}

export const RedListStatus: React.FC<RedListStatusProps> = ({
  pageContext,
}) => {
  return (
    <>
      <h2>Red list status</h2>
      <DefinitionList>
        <DefinitionItem>
          <Topic>EU27 Endemic</Topic>
          <Definition>{pageContext.red_list.EU27_endemic}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Habitats directive</Topic>
          <Definition>{pageContext.red_list.habitats_directive}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list EU27</Topic>
          <Definition>{pageContext.red_list.red_list_EU27}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list Europe endemic</Topic>
          <Definition>
            {pageContext.red_list.red_list_europe_endemic}
          </Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list Europe</Topic>
          <Definition>{pageContext.red_list.red_list_europe}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Red list Mediterranean</Topic>
          <Definition>{pageContext.red_list.red_list_mediterranean}</Definition>
        </DefinitionItem>
        <DefinitionItem>
          <Topic>Tend Europe</Topic>
          <Definition>{pageContext.red_list.trend_europe}</Definition>
        </DefinitionItem>
      </DefinitionList>
    </>
  )
}
