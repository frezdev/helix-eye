import React, { Suspense } from 'react'
import styled from 'styled-components'
import { GalaxiesLayout } from '../components/GalaxiesLayout'

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export const Galaxies = () => {
  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <GalaxiesLayout />
      </Suspense>
    </GalaxiesPageWrapper>
  )
}
