import React from 'react';
import CO_INFO from '../../company-info';

export default function Company() {
  return (
    <>
        {CO_INFO.map((info) => (
            <div className='company-logo-box'>
                <div className='img-box'>
                    <img className="company-logo" src={info.url} alt={info.alt} />
                </div>
                <h3 className='company-name'>{info.name}</h3>
            </div>
        ))}
    </>
  )
}
