import React from 'react'
import styled from '@emotion/styled'
import StartPageMessage from './StartPageMessage'

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

  /* <- 3-2  hexagons per row */
  width: 33.333333333333333%; /* = 100 / 3 */
  :nth-of-type(5n + 4) {
    /* first hexagon of even rows */
    margin-left: 16.666666666666667%; /* = width of HexItem / 2  to indent even rows */
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
    // background-image: none !important;
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
`

const SpecieHex = ({ images, link, message }) => {
  const imgUrl = images.large

  return (
    <HexItem>
      <HexInner>
        <HexLink href={link}>
          <HexImg
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          ></HexImg>
          <StartPageMessage>{message}</StartPageMessage>
        </HexLink>
      </HexInner>
    </HexItem>
  )
}

export default SpecieHex
