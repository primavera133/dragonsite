import React from 'react'
import styled from '@emotion/styled'

const HexItem = styled.div`
display: block;
grid-area: left;
max-width: 68px;
max-height: 56px;
margin: 14px 0 0;

  position: relative;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  transition: all 0.5s;
  
  @media all and (min-width: 768px) {
    display: block;
    width: auto;
    grid-area: left;
    max-width: 105px;
    max-height: 113px;
    margin: 0;
  }

s`

const HexInner = styled.div`
  position: absolute;
  width: 96%;
  height: 100%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  overflow: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transition: all 0.5s;

  * {
    position: absolute;
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  }
`

const HexLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
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
`

const SpecieHex = () => {
  const imgUrl =
    'https://res.cloudinary.com/dragonflies/image/upload/c_crop,h_1556,w_1556/c_scale,h_300,w_300/v1578334562/dragonflies/onychogomphus_cecilia_o_bei16b.jpg'

  return (
    <HexItem>
      <HexInner>
        <HexLink href={'/'}>
          <HexImg
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          ></HexImg>
        </HexLink>
      </HexInner>
    </HexItem>
  )
}

export default SpecieHex
