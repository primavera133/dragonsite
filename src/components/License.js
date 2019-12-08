import React from 'react'

export default ({ license, url }) => {
  let hasCC = license.toLowerCase().includes('cc')
  let hasBY = license.toLowerCase().includes('by')
  let hasSA = license.toLowerCase().includes('sa')

  return (
    <a href={url} target='_blank' rel='noreferrer noopener'>
      {hasCC && <img src='/cc.png' alt='Creative Commons' />}
      {hasBY && <img src='/by.png' alt='' />}
      {hasSA && <img src='/sa.png' alt='' />}
    </a>
  )
}
