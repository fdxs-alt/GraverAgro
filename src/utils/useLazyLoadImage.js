import { useState, useEffect } from 'react'

const useLazyLoadImage = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc)

  useEffect(() => {
    const image = new Image()

    const handleLoadEvent = () => {
      setSrc(highQualitySrc)
    }
    image.src = highQualitySrc

    image.addEventListener('load', handleLoadEvent)

    return () => {
      image.removeEventListener('load', handleLoadEvent)
    }
  }, [lowQualitySrc, highQualitySrc])

  return { src, blur: src === lowQualitySrc }
}

export default useLazyLoadImage
