import React from 'react'
import { GalaxyCard } from '../GalaxyCard'
import { StyledGalaxiesLayout } from './styles'
import { type GalaxyItem } from '@/app/api/types'

export const GalaxiesLayout = () => {
  const galaxies: GalaxyItem[] = globalThis.__INITIAL_PROPS?.galaxies
  return (
    <StyledGalaxiesLayout>
      {
        galaxies?.map(galaxy => <GalaxyCard key={galaxy.data[0].nasa_id} galaxy={galaxy} />)
      }
    </StyledGalaxiesLayout>
  )
}
