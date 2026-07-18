import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = (data) => {
    const { description, title, keyword } = data;

    // Ekdum simple function: Click hote hi browser mein favicon ka link change kar dega
    const changeFavicon = () => {
        const faviconLink = document.getElementById("my-favicon");
        if (faviconLink) {
            // Click hone ke baad jo dusra favicon chahiye, uska link yahan daal de
            faviconLink.href = "https://cdn-icons-png.flaticon.com/512/1041/1041888.png"; // Rocket Icon
        }
    };

    return (
        <div onClick={changeFavicon} style={{ minHeight: '100vh' }}>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keyword} />
                <link id="my-favicon" rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/6062/6062646.png" />
            </Helmet>
            
            {data.children}
        </div>
    )
}

export default Meta