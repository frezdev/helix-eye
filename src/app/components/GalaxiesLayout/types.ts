export interface GalaxyData {
  data: Array<{
    title: string
    nasa_id: string
    keywords: string[]
    media_type?: 'audio' | 'image' | 'video'
    description: string
  }>
  links: Array<{
    href: string
    rel: string
    render: string
  }>
}

export interface GalaxiesProps {
  galaxies?: GalaxyData[]
}
