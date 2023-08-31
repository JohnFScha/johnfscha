import React from 'react'
import CV from '../../assets/cv.pdf'
import { BiDownload } from 'react-icons/bi'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV <BiDownload /></a>
    </div>
  )
}

export default CTA