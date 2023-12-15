export interface GalaxiesResponse {
  collection: Collection
}

export interface Collection {
  version: string
  href: string
  items: GalaxyItem[]
  metadata: Metadata
  links: CollectionLink[]
}

export interface GalaxyItem {
  href: string
  data: Datum[]
  links: ItemLink[]
}

export interface Datum {
  center: Center
  title: string
  nasa_id: string
  date_created: Date
  keywords: string[]
  media_type: MediaType
  description_508?: string
  secondary_creator?: string
  description: string
  album?: Album[]
  location?: Location
  photographer?: string
}

export enum Album {
  Test = 'Test',
}

export enum Center {
  Gsfc = 'GSFC',
  Jpl = 'JPL',
}

export enum Location {
  GreenbeltMD = 'Greenbelt, MD',
  NASASGoddardSpaceFlightCenter = "NASA's Goddard Space Flight Center",
}

export enum MediaType {
  Image = 'image',
  Video = 'video',
}

export interface ItemLink {
  href: string
  rel: Rel
  render?: MediaType
}

export enum Rel {
  Captions = 'captions',
  Preview = 'preview',
}

export interface CollectionLink {
  rel: string
  prompt: string
  href: string
}

export interface Metadata {
  total_hits: number
}
