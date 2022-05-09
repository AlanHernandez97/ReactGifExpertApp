import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GrifGrid = ({category}) => {


    const {loading, data:images} = useFetchGifs(category);




  return (
      <>
        <h3 className='card animate__animated animate__fadeIn'>{category}</h3>

        {loading && <p className='card animate__animated animate__flash'>Cargando...</p>}
       
        <div className='card-grid'>
            {
                images.map(img =>(
                    <GifGridItem
                        key={img.id} 
                        {...img}
                    />
                ))
            }
        
        </div>
       
      </>
  )
}
