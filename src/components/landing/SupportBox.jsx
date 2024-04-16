import React from 'react'
import InputBox2 from './InputBox2'
import SupportOpt from './SupportOpt'

export default function SupportBox() {
  return (
    <div className='support-box'>
        <InputBox2 />
        <hr className='division'/>
        <SupportOpt />
    </div>
  )
}
