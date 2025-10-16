import { MetadataRoute } from 'next'

export default function favicon(): MetadataRoute.ReturnType['favicon'] {
  return {
    url: '/mouse-empire-logo.png',
    type: 'image/png'
  }
}