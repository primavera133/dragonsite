import React from 'react'
import styled from '@emotion/styled'
import getColor from './getColor'

const HexItem = styled.li`
  position: relative;
  width: 140px;
  height: 80.83px;
  background-color: #9fa0a2;
  margin: 44px 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  :before,
  :after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
  }
  :before {
    bottom: 100%;
    border-bottom: 40.41px solid #9fa0a2;
  }
  :after {
    top: 100%;
    width: 0;
    border-top: 40.41px solid #9fa0a2;
  }

  > *:last-child {
    margin-bottom: 39.26px;
  }

  @media (min-width: 1920px) {
    :nth-of-type(21n + 12) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1919px) and (min-width: 1280px) {
    :nth-of-type(14n + 8) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1279px) and (min-width: 1024px) {
    :nth-of-type(12n + 7) {
      margin-left: 74px;
    }
  }
  @media (max-width: 1023px) and (min-width: 781px) {
    :nth-of-type(9n + 6) {
      margin-left: 74px;
    }
  }
  @media (max-width: 780px) and (min-width: 640px) {
    :nth-of-type(7n + 5) {
      margin-left: 74px;
    }
  }
  @media (max-width: 639px) and (min-width: 425px) {
    :nth-of-type(4n + 3) {
      margin-left: 74px;
    }
  }
  @media (max-width: 424px) {
    :nth-of-type(3n + 3) {
      margin-left: 74px;
    }
  }

  /* Hexagon Color Coding */
  background-color: ${props => props.color.border};
  :before {
    border-bottom-color: ${props => props.color.border};
  }
  :after {
    border-top-color: ${props => props.color.border};
  }
`

const HexInner = styled.div`
  position: relative;
  width: 136px;
  height: 78.52px;
  background-color: #c9c9c9;
  margin: 39.26px 0;
  display: flex;
  justify-content: center;
  :before,
  :after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 68px solid transparent;
    border-right: 68px solid transparent;
    z-index: 1;
  }
  :before {
    bottom: 100%;
    border-bottom: 39.26px solid #c9c9c9;
  }
  :after {
    top: 100%;
    width: 0;
    border-top: 39.26px solid #c9c9c9;
  }

  /* Color */
  background-color: ${props => props.color.color};
  :before {
    border-bottom-color: ${props => props.color.color};
  }
  :after {
    border-top-color: ${props => props.color.color};
  }
`
const HexAvatarLink = styled.a`
  position: absolute;
  top: -24px;
  z-index: 1;
  background-image: none;
`

const HexAvatar = styled.img`
  width: 48px;
  border-radius: 48px;
  border: 2px solid #fff;
  z-index: 1;
  :hover {
    width: 56px;
    border-radius: 56px;
    border: 3px solid #fff;
  }
`

const HexLabel = styled.a`
  position: absolute;
  top: 32px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47px;
  flex-direction: column;
  color: ${props => props.color.text};
  background-image: none;
`

const HexName = styled.div`
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  z-index: 1;
  :hover {
    font-size: 16px;
    line-height: 1;
  }
`

const HexMetric = styled.div`
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 1.6;
  z-index: 1;
`

const SpecieHex = ({ scientific_name, localNames, family, genera, images }) => {
  const img = images.all ? images.all[0] : null
  let imgUrl =
    'https://res.cloudinary.com/dragonflies/image/upload/c_pad,w_128,h_128/v1/dragonflies/libellula-bw_ozhigo.png'
  if (img) {
    imgUrl = `https://res.cloudinary.com/${
      images.cloud_name
    }/image/upload/c_pad,w_128,h_128/v1/${img.public_id}`
  }
  const color = getColor(family)
  console.log(family, color)
  return (
    <HexItem color={color}>
      <HexInner color={color}>
        <HexAvatarLink href={`/species/${scientific_name}`} color={color}>
          <HexAvatar src={imgUrl} alt='' />
        </HexAvatarLink>
        <HexLabel href={`/species/${scientific_name}`} color={color}>
          <HexName>{scientific_name}</HexName>
          <HexMetric className='hexagon-metric-label'>{localNames}</HexMetric>
        </HexLabel>
      </HexInner>
    </HexItem>
  )
}

export default SpecieHex
