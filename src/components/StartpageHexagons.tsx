import React from 'react'
import styled from '@emotion/styled'
import { StartpageHexagon } from './StartpageHexagon'

export type HexagonImage = {
  items_id: number
  images: {
    large: string
  }
  message: string
  link?: string
}

const species: HexagonImage[] = [
  {
    items_id: 1,
    images: {
      large:
        'https://res.cloudinary.com/dragonflies/image/upload/c_crop,h_3456,w_3456/c_scale,h_600,w_600/v1578334562/dragonflies/onychogomphus_cecilia_o_bei16b.jpg',
    },
    message: 'Species',
    link: '/species',
  },
  {
    items_id: 2,
    images: {
      large:
        'https://res.cloudinary.com/dragonflies/image/upload/c_crop,h_2412,w_2412/c_scale,h_600,w_600/v1578660285/dragonflies/aeshna_juncea_o_czpwpm.jpg',
    },
    message: 'Families',
    link: '/families',
  },
  {
    items_id: 3,
    images: {
      large:
        'https://res.cloudinary.com/dragonflies/image/upload/c_crop,h_3456,w_3456/c_scale,h_600,w_600/v1578659778/dragonflies/onychogomphus_forcipatus_o_cmqyyg.jpg',
    },
    message: 'Genera',
    link: '/genera',
  },
  {
    items_id: 4,
    images: {
      large:
        'https://res.cloudinary.com/dragonflies/image/upload/c_crop,h_3456,w_3456/c_scale,h_600,w_600/v1578667090/dragonflies/sympetrum_flaveolum_o_eusrul.jpg',
    },
    message: 'About',
    link: '/about',
  },
  {
    items_id: 5,
    images: {
      large:
        'https://res.cloudinary.com/dragonflies/image/upload/c_crop,g_east,h_2954,w_2954/c_scale,h_600,w_600/v1580763189/dragonflies/calopteryx_virgo_o_ncw0wb.jpg',
    },
    message: '',
  },
]

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: sans-serif;
  list-style-type: none;

  @media all and (min-width: 768px) {
    width: 75%;
  }

  /* <- 3-2  hexagons per row */
  padding-bottom: 7.4%;
  font-size: 14px;
`

export const StartpageHexagons = () => {
  return (
    <Grid>
      {species.map((sp) => (
        <StartpageHexagon
          images={sp.images}
          key={`hex_${sp.items_id}`}
          message={sp.message}
          link={sp.link}
        />
      ))}
    </Grid>
  )
}
