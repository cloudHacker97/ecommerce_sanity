import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


function FooterBanner({FooterBanner}) {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{FooterBanner.discount}</p>
          <h3>{FooterBanner.largeText1}</h3>
          <h3>{FooterBanner.LargeText2}</h3>
          <h1>{FooterBanner.saleTime}</h1>
        </div>
        <div>
          <p>{FooterBanner.smallText}</p>
          <h3>{FooterBanner.midText}</h3>
          <p>{FooterBanner.desc}</p>
          <Link href={`/product/${FooterBanner.product}`}>
            <button type='button'>{FooterBanner.buttonText}</button>
          </Link>
        </div>
        <img 
          src={urlFor(FooterBanner.image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner