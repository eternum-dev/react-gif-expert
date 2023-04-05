import React from 'react'


export const GifItem = ({ id, url,title }) => {

    return (
        <div className='card'>
        <img src={url} alt={title} />
            
            <h2>{title}</h2>
        </div>
    )
   
}
