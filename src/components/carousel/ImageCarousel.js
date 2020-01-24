import React, { useState } from "react"
import styled from "@emotion/styled"
import Carousel, { Modal, ModalGateway } from "react-images"
import { FooterCaption } from "./FooterCaption"
import { getAltText } from "./getAltText"
import { formatImageData } from "./formatImageData"
import "./carousel.css"

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ImageButton = styled.button`
  box-sizing: border-box;
  border: none;
  padding: 0 4px 0 0;
  max-width: 33%;
  background: transparent;

  :nth-of-type(3) {
    padding: 0;
  }

  :hover {
    opacity: 0.75;
  }
`

const Thumbnail = styled.img`
  width: 100%;
  height: calc(33.333vw - 19px - 4px - 4px);
  object-fit: cover;
  margin: 0;

  @media all and (min-width: 500px) {
    height: calc(20vw - 1em);
  }

  @media all and (min-width: 1024px) {
    height: calc(16.667vw - 1em);
  }
`

export const ImageCarousel = ({ pageContext }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const caption = pageContext.scientific_name
  const images = formatImageData({ images: pageContext.images, caption })

  const toggleLightbox = selectedIndex => {
    setLightboxOpen(!isLightboxOpen)
    setSelectedIndex(selectedIndex)
  }

  return (
    <>
      <Gallery>
        {images.map(({ thumbnail, ...data }, index) => (
          <ImageButton onClick={() => toggleLightbox(index)} key={thumbnail}>
            <Thumbnail alt={getAltText({ data, index })} src={thumbnail} />
          </ImageButton>
        ))}
      </Gallery>

      <ModalGateway>
        {isLightboxOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              components={{ FooterCaption }}
              currentIndex={selectedIndex}
              formatters={{ getAltText }}
              frameProps={{ autoSize: "height" }}
              views={images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}
