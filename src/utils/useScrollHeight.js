import { useEffect, useState } from 'react'

const useScrollHeight = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return height
}

export default useScrollHeight
