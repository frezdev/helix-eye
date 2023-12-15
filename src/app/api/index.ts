import { type GalaxiesResponse } from './types'

export const getGalaxiesJSON = async () => {
  try {
    const response = await fetch('https://images-api.nasa.gov/search?q=galaxies')
    const data = await response.json() as GalaxiesResponse
    return data?.collection?.items
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
