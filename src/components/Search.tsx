import React, { FormEvent, useState } from 'react'
import Autosuggest from 'react-autosuggest'
import './search.css'

type SearchProps = {
  names: string[]
}

export const Search: React.FC<SearchProps> = ({ names }) => {
  const [value, setValue] = useState('')
  const [scientificName, setScientificName] = useState('')
  const [suggestions, setSuggestions] = useState([])

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (inVal: string) => {
    const inputMatcher = new RegExp(inVal.trim().toLowerCase(), 'g')
    const inputLength = inVal.trim().length

    return inputLength === 0
      ? []
      : names.filter(([key]) => {
          return key.toLowerCase().match(inputMatcher)
        })
  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion: string) => {
    setScientificName(suggestion[1])
    return suggestion[0]
  }

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion: string) => {
    return <div>{suggestion[0]}</div>
  }

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Search',
    value,
    onChange,
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (scientificName) {
      window.location.href = `/species/${scientificName}`
    }
  }

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="search"
    >
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) =>
          setSuggestions(getSuggestions(value))
        }
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button type="submit" className="btn-search">
        <i className="fa fa-search" />
        <span className="sr-only">Navigate to page about searched result</span>
      </button>
    </form>
  )
}
