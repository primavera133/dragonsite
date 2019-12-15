import React from 'react'
import styled from '@emotion/styled'
import getColor from './getColor'

const HexItem = styled.li`
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  transition: all 0.5s;
  backface-visibility: hidden;
  will-change: transform;
  transition: all 0.5s;
  margin: 0;

  ::after {
    content: '';
    display: block;
    padding-bottom: 86.602%; /* =  100 / tan(60) * 1.5 */
  }

  @media (min-width: 1201px) {
    /* <- 8-7  hexagons per row */
    width: 12.5%; /* = 100 / 8 */
    :nth-of-type(15n + 9) {
      /* first hexagon of even rows */
      margin-left: 6.25%; /* = width of HexItem / 2  to indent even rows */
    }
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    /* <- 7-6  hexagons per row */
    width: 14.2857142857142%; /* = 100 / 7 */
    :nth-of-type(13n + 8) {
      /* first hexagon of even rows */
      margin-left: 7.142857142857143%; /* = width of HexItem / 2  to indent even rows */
    }
  }

  @media (max-width: 900px) and (min-width: 751px) {
    /* <- 6-5  hexagons per row */
    width: 16.666666666666667%; /* = 100 / 7 */
    :nth-of-type(11n + 7) {
      /* first hexagon of even rows */
      margin-left: 8.333333333333333%; /* = width of HexItem / 2  to indent even rows */
    }
  }

  @media (max-width: 750px) and (min-width: 601px) {
    /* <- 5-4  hexagons per row */
    width: 20%; /* = 100 / 5 */
    :nth-of-type(9n + 6) {
      /* first hexagon of even rows */
      margin-left: 10%; /* = width of HexItem / 2  to indent even rows */
    }
  }

  @media (max-width: 600px) and (min-width: 376px) {
    /* <- 4-3  hexagons per row */
    width: 25%; /* = 100 / 5 */
    :nth-of-type(7n + 5) {
      /* first hexagon of even rows */
      margin-left: 12.5%; /* = width of HexItem / 2  to indent even rows */
    }
  }

  @media (max-width: 375px) {
    /* <- 3-2  hexagons per row */
    width: 33.333333333333333%; /* = 100 / 3 */
    :nth-of-type(5n + 4) {
      /* first hexagon of even rows */
      margin-left: 16.666666666666667%; /* = width of HexItem / 2  to indent even rows */
    }
  }
`

const HexInner = styled.div`
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transition: all 0.5s;

  * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  }

  :hover div {
    background-image: none !important;
  }
  :hover div:before,
  :hover div:after,
  :hover a {
    opacity: 1;
  }
`

const HexLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);

  :hover h3 {
    opacity: 1;
    transition: 0.8s;
  }
  :focus h3 {
    opacity: 1;
    transition: 0.8s;
  }
  :hover p {
    opacity: 1;
    transition: 0.8s;
  }
  :focus p {
    opacity: 1;
    transition: 0.8s;
  }
`

const HexImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center center;
  background-blend-mode: multiply;
  background-size: cover;
  overflow: hidden;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  :before,
  :after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    opacity: 0;
    transition: opacity 0.5s;
  }
  :before {
    // background: rgba(22, 103, 137, 0.3);
  }
  :after {
    // background: linear-gradient(
    //   to top,
    //   transparent,
    //   rgba(0, 0, 0, 0.25) 25%,
    //   rgba(0, 0, 0, 0.6) 50%,
    //   rgba(0, 0, 0, 0.25) 75%,
    //   transparent
    // );
  }
`

const HexHeader = styled.h3`
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  font-weight: 300;

  opacity: 1;
  color: #fff;
  text-shadow: 0.6px 0.6px 1.2px #000, 0 0 0.2em #2e6733;
  margin: 0;
  @media not all and (hover: none) {
    color: #000;
    text-shadow: none;
    opacity: 0;
  }

  text-align: center;
  bottom: 50%;
  padding-top: 50%;
  font-size: 0.7rem;
  line-height: 1.2;
  word-break: keep-all;
  word-wrap: break-word;
  hyphens: auto;
  z-index: 1;
`

const HexText = styled.p`
  margin: 0;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  font-size: 0.7rem;
  font-weight: 300;
  opacity: 0.8;
  text-shadow: 1px 1px 2px #000, 0 0 0.2em #2e6733;
  @media not all and (hover: none) {
    opacity: 0;
    text-shadow: none;
    color: #333;
  }

  color: #fff;
  text-align: center;
  bottom: 50%;
  padding-top: 60%;
  line-height: 1.2;
  z-index: 1;

  top: 0%;
  text-align: center;
`

const SpecieHex = ({ scientific_name, localNames, family, genera, images }) => {
  const img = images.all ? images.all[0] : null
  let imgUrl =
    'https://res.cloudinary.com/dragonflies/image/upload/c_fill,w_128,h_128/v1/dragonflies/libellula-bw_ozhigo.png'
  if (img) {
    imgUrl = `https://res.cloudinary.com/${
      images.cloud_name
    }/image/upload/c_fill,w_256,h_256/v1/${img.public_id}`
  }
  const color = getColor(family)
  // console.log(family, color)
  return (
    <HexItem color={color}>
      <HexInner color={color}>
        <HexLink href={`/species/${scientific_name}`} color={color} style={{}}>
          <HexImg
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundColor: color.bg
            }}
          >
            <HexHeader>{scientific_name}</HexHeader>
            <HexText>{localNames}</HexText>
          </HexImg>
        </HexLink>
      </HexInner>
    </HexItem>
  )
}

export default SpecieHex
