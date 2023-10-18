import { useState } from 'react'

import img1 from './assets/img-1.jpg'
import img2 from './assets/img-2.jpg'
import img3 from './assets/img-3.jpg'
import img4 from './assets/img-4.jpg'
import img5 from './assets/img-5.jpg'

import ImageSlider from './components/ImageSlider'

function App() {  
  const images = [img1, img2, img3, img4, img5]
  

  const [imagesIndex, setImagesIndex] = useState(0)

  const changeImage = direction => {

    if(direction === 'right'){
      const newImageIndex = imagesIndex + 1
      if(newImageIndex > images.length - 1){
        setImagesIndex(0)
      }else{
        setImagesIndex(newImageIndex)
      }
  
    }

    else if(direction === 'left'){
      const newImageIndex = imagesIndex - 1
      if(newImageIndex < 0){
        setImagesIndex(images.length - 1)
      }else{
        setImagesIndex(newImageIndex)
      }
  
    }
  }

  return (
    <ImageSlider imageUrl={images[imagesIndex]} changeFunction={changeImage} />
  )
}

export default App
