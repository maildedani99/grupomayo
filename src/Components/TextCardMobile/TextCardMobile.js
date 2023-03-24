import React from 'react'
import PropTypes from 'prop-types'
import { IMAGES_TEXT } from '../../Routes/routes'

const TextCardMobile = ({text}) => {
  return (
    <div className='flex flex-col mt-8 mx-auto p-4 w-10/12 shadow-[0px_0px_9px_rgba(0,0,0,0.25)]'>
          <img src={IMAGES_TEXT + text.url} alt="" width='325px'/>
          <span className='text-primary font-medium	text-3xl mt-2'>{text.title}</span>
          <span className='font-medium text-sm mt-4'>{text.doctor}</span>
          <span className='font-light text-sm	'>{text.location}</span>
          <span className='font-normal text-lg	mt-6'>{text.text}</span>
    </div>
  )
}

TextCardMobile.propTypes = {
    text: PropTypes.object
}

export default TextCardMobile