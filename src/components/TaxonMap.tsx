import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { isDomAvailable } from '../utils/isDomAvailable'

type TaxonMapProps = {
  taxonKey: string | null
}

type Lats = [number, number]
type Bounds = [Lats, Lats]

export const TaxonMap: React.FC<TaxonMapProps> = ({ taxonKey }) => {
  const [bounds, setBounds] = useState<Bounds>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBoundingBox = async () => {
      try {
        fetch(
          `https://api.gbif.org/v2/map/occurrence/density/capabilities.json?taxonKey=${taxonKey}&bin=hex&squareSize=128`
        ).then(async (res) => {
          const data = await res.json()
          setBounds([
            [data.minLat, data.minLng],
            [data.maxLat, data.maxLng],
          ])
          setIsLoading(false)
        })
      } catch (error) {
        console.log(error)
      }
    }
    fetchBoundingBox()
  }, [taxonKey])

  if (!isDomAvailable()) {
    return (
      <div>
        <p>Loading map...</p>
      </div>
    )
  }

  const MapContainerStyled = styled(MapContainer)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `

  const joinParams = (params): string =>
    Object.keys(params)
      .map((param) => `${param}=${params[param]}`)
      .join('&')

  return (
    <MapContainerStyled bounds={bounds}>
      {!isLoading && (
        <>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            url="https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?{params}"
            params={joinParams({
              taxonKey,
              bin: 'hex',
              squareSize: 128,
              style: 'green.poly',
            })}
          />
        </>
      )}
    </MapContainerStyled>
  )
}
