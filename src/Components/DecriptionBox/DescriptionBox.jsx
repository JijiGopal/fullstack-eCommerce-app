import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p> An e-commerce website is a platform that facilitates buying and selling of products of services over the internet. It serves as a virtual marketplace where 
                businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. 
                E-Commerce websites have gained immensepopularity due to their convenience, accessibility, and the global access they offer.
            </p>
            <p>
                E-Commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g sizes,colors).
                Each product usually has its own dedicated page with relevant informations.
            </p>
        </div>
    </div>
  )
}
