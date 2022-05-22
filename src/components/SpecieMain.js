import React from 'react'
import styled from '@emotion/styled'
import cloudinary from 'cloudinary-core'
import { License } from './License'

const SpecieMainFigure = styled.figure`
  img {
    margin-bottom: 0;
  }
`
const SpecieMainFigCap = styled.figcaption`
  font-size: 0.842105263157895rem;
`

const NameLink = styled.a`
  text-decoration: none;
  background-image: none;
`

const Caption = styled.div`
  color: hsla(0, 0%, 0%, 0.73);
`
const SubCaption = styled.div``

export const SpecieMain = ({ pageContext }) => {
  const { images } = pageContext
  const mainImage = images ? images.all[0] : null
  if (!mainImage) {
    return null
  }

  const cl = new cloudinary.Cloudinary({
    cloud_name: images.cloud_name,
    secure: true,
  })

  const srcSets = [
    375, 509, 622, 717, 812, 899, 980, 1061, 1139, 1216, 1293, 1360,
  ]
  const srcSet = srcSets
    .map(
      (s) => `${cl.url(mainImage.public_id, { width: s, crop: 'scale' })} ${s}w`
    )
    .join(',')

  return (
    <SpecieMainFigure>
      <img
        sizes="(max-width: 1360px) 100vw, 1360px"
        srcSet={srcSet}
        src={`${cl.url(mainImage.public_id, { width: 1360, crop: 'scale' })}`}
        alt={pageContext.scientific_name}
      />
      <SpecieMainFigCap>
        <Caption>{mainImage.caption}</Caption>
        <SubCaption>
          {mainImage.url && (
            <>
              Photo:{' '}
              <NameLink
                href={mainImage.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {mainImage.by}
              </NameLink>
            </>
          )}
          {!mainImage.url && <span>{mainImage.by}</span>}
          <License license={mainImage.license} url={mainImage.lic_url} />
        </SubCaption>
      </SpecieMainFigCap>
    </SpecieMainFigure>
  )
}
