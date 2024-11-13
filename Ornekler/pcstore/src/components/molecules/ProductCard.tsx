import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import Ikonlar from './Ikonlar'

interface IProductCard{
    productId: number
    productName: string,
    productType: string,
    productImage: string,
    productPrice: number



}

function ProductCard(props: IProductCard) {
  return (
    <>
        <div className="row">
            <img src={props.productImage}  />
        </div>
        <div className="row mt-5" style={{ }}>
        <label className='form-label' ><strong>{props.productType}</strong></label>
        </div>
        <div className="row">
            <label className='form-label ' >{props.productName}</label>
        </div>
        <div className="row">
            <label className='form-label mt-2 '>{props.productPrice} ₺</label>
        </div>
        <div style={{marginBottom:'10px'}}>
            <Ikonlar url='fa-regular fa-heart'/>
            <Ikonlar url='fa-regular fa-bookmark'/>
            <Ikonlar url='fa-regular fa-comment'/>
            
           
        </div>

    </>
  )
}

export default ProductCard