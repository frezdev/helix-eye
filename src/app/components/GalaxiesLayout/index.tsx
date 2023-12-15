import React from 'react'
import { GalaxyCard } from '../GalaxyCard'
import { StyledGalaxiesLayout } from './styles'
import { type GalaxyItem } from '@/app/api/types'

export const GalaxiesLayout = ({ galaxies }: { galaxies: GalaxyItem[] }) => {
  return (
    <StyledGalaxiesLayout>
      {
        galaxies?.map(galaxy => <GalaxyCard key={galaxy.data[0].nasa_id} galaxy={galaxy} />)
      }
    </StyledGalaxiesLayout>
  )
}
