//!  IT IS A RE-USABLE COMPONENT WHICH IS USED TO UPDATE THE TITLE OF THE PAGE DYNAMICALLY. IT USES REACT-HELMET LIBRARY TO UPDATE THE <head> SECTION OF THE PAGE. IT TAKES A PROP "Title" WHICH IS USED TO SET THE TITLE OF THE PAGE. IF NO TITLE IS PASSED, IT WILL DEFAULT TO "REACT-HELMET".


import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Titlefile = ({ Titlecopy }) => {
  return (
      <Helmet>
        <title>{Titlecopy}</title>
      </Helmet>
    
  )
}

export default Titlefile

