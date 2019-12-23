import React from 'react'
import styled from '@emotion/styled'

export const Author = ({ isModal, ...props }) => {
  const Tag = props.href
    ? styled.a`
        color: ${isModal ? 'white' : 'inherit'};
        font-weight: 500;
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      `
    : styled.span`
        color: ${isModal ? 'white' : 'inherit'};
        font-weight: 500;
        :hover {
          text-decoration: underline;
        }
      `

  return (
    <>
      Photo: <Tag {...props} />
    </>
  )
}
