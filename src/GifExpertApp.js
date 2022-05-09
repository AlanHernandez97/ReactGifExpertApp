import React, { Fragment, useState } from 'react'
import AddCategories from './Components/AddCategories';
import { GrifGrid } from './Components/GrifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);
  /*const handleAdd =() =>{
    //setCategories([...categories, 'Attack On Titans']);
    setCategories(cats => [...cats, 'Attack On Titans']);
  }*/

  return (
    <>
        <h2>GifExpertApp</h2>

        <AddCategories setCategories={setCategories}/>

        <hr/>

        <ol>
          {
            categories.map(category =>(
              <GrifGrid 
              key= {category}
              category={category}/>
            ))
          }
        </ol>

    </>
  )
}

export default GifExpertApp