import cloudinary from 'cloudinary-core'

const widthThumb = 250
// const widthCarousel = 1024

export const formatImageData = ({ images, caption }) => {
  const cl = new cloudinary.Cloudinary({
    cloud_name: images.cloud_name,
    secure: true
  })

  if (!images) return []
  if (!images.all) return []

  return images.all.map(img => {
    return {
      caption: img.caption,
      author: {
        url: img.url,
        by: img.by
      },
      thumbnail: `${cl.url(img.public_id, {
        width: widthThumb,
        crop: 'scale'
      })}`,
      src: `${cl.url(img.public_id, {
        crop: 'scale'
      })}`,
      license: {
        license: img.license,
        licUrl: img.lic_url
      }
    }
  })
}
