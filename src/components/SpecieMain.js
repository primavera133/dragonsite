import React from 'react'
import styled from '@emotion/styled'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'
import License from './License'

const SpecieMainPlaceholder = styled.div`
  background-color: lightgrey;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SpecieMain = styled.figure`
  img {
    margin-bottom: 0;
  }
`
const SpecieMainFigCap = styled.figcaption`
  color: #999;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    background-image: none;
    padding: 0 0.4rem 0 0;
    vertical-align: middle;
  }
  img {
    margin: 0 4px 0 0;
  }
`

const getWidth = () => {
  return 680
  // if (window.matchMedia('(max-width: 375px)').matches) {
  //   return 375
  // } else if (window.matchMedia('(max-width: 425px)').matches) {
  //   return 425
  // } else return 680
}

export default ({ pageContext }) => {
  const { images } = pageContext
  const mainImage = images ? images.all[0] : null
  if (!mainImage) {
    return <SpecieMainPlaceholder />
  }

  return (
    <SpecieMain>
      <CloudinaryContext cloudName={images.cloudName}>
        <Image publicId={mainImage.publicId}>
          <Transformation
            crop='scale'
            width={getWidth()}
            dpr='auto'
            responsive_placeholder='blank'
          />
        </Image>
      </CloudinaryContext>
      <SpecieMainFigCap>
        {mainImage.url && (
          <>
            Photo:{' '}
            <a href={mainImage.url} target='_blank' rel='noreferrer noopener'>
              {mainImage.by}
            </a>
          </>
        )}
        {!mainImage.url && <span>{mainImage.by}</span>}
        <License license={mainImage.license} url={mainImage.lic_url} />
      </SpecieMainFigCap>
    </SpecieMain>
  )
}
