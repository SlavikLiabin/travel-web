import React from 'react';
import './SelectsImgStyles.css'
import BoraBora from '../../assets/borabora.jpg'

function SelectsImg() {
  return (
    <div className='selects-img'>
      <img src={BoraBora} alt="/" />
      <div className="overlay">
        <p>BoraBora</p>
      </div>
    </div>
  )
}

export default SelectsImg
