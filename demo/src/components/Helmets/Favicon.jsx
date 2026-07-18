import React from 'react'
import { Helmet } from 'react-helmet-async'

const Favicon = (data) => {
    const { description, title, keyword, favicon } = data;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keyword} />
            <link rel="icon" type="image/x-icon" href={favicon} />
        </Helmet>
    )
}

export default Favicon