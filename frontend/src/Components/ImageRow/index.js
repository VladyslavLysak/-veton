import React from 'react'

import './ImageRow.scss'

const ImageRow = ({ Icon, description }) => {
  return (
    <div className='image-row-container'>
      <Icon className='row-icon' />
      <h5>{description}</h5>
    </div>
  )
}

export default ImageRow
