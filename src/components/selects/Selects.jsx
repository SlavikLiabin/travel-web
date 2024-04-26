import React from 'react';
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'
import SelectsImg from '../SelectsImg/SelectsImg';

function Selects() {
  return (
    <div className='selects'>
      <SelectsImg bgImg={BoraBora} text='Bora Bora'/>
    </div>
  )
}

export default Selects
