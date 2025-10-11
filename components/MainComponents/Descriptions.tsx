import React from 'react'

type Props = {
    descriptionText : string
}

const Descriptions = ({ descriptionText } : Props) => {
  
    return (
        <p className='text-p'>
           {descriptionText} 
        </p>
  )
}

export default Descriptions