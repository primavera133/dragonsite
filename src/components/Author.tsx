import React from 'react'
import styled from '@emotion/styled'

type AuthorProps = {
  href: string
  target: string | null
  rel: string
  isModal: boolean
}

export const Author: React.FC<AuthorProps> = ({ isModal, ...props }) => {
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
