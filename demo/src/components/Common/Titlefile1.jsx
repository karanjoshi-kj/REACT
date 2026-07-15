import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Titlefile1 = ({ Titlecopy}) => {
  return (
      <Helmet>
        <title>{Titlecopy}</title>
      </Helmet>
  )
}

export default Titlefile1
