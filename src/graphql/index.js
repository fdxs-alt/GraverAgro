export const MACHINES_QUERY = `query {
    allMachines {
      id
      opis
      nazwa
      zdjecie {
        alt
        responsiveImage(imgixParams: {fit: crop, w: 500, h: 400, auto: format}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          bgColor
          base64
        }
      }
    }
  }
`

export const GALLERY_QUERY = `query {
  gallery {
    zdjecie {
      alt
      id
      responsiveImage(imgixParams: {fit: crop, w: 400, h: 225, auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        bgColor
        base64
      }
    }
  }
}
`

export const AGRO_MACHINES_QUERY = `query {
  allAgromachines {
    id
    opis
    nazwa
    zdjecie {
      alt
      responsiveImage(imgixParams: {fit: crop, w: 500, h: 400, auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        bgColor
        base64
      }
    }
  }
}
`
export const GALLERY_AGRO_QUERY = `query {
  galleryagro {
    zdjecie {
      alt
      id
      responsiveImage(imgixParams: {fit: crop, w: 400, h: 225, auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        bgColor
        base64
      }
    }
  }
}
`
