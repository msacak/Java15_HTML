import React from 'react'
import {dataProductList,dataProperties} from '../data'
import ProductCard from '../components/molecules/ProductCard'

function magaza() {
  
  return (
    <div className="container" >
      <div className="col">

        
         <div className="d-flex justify-content-between mb-3 mt-5 shadow align-items-center" style={{height:'7vh', width:'101%'}}>
          {
             dataProperties.map((data,index)=>{
              return  <div className="form-check" style={{display:'inline-block', margin:'5px'}}>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" >
                {data}
              </label>
            </div>
          
          })
           }
            
      </div>
      

    

      <div className="row shadow justify-content-center" >
          {
            dataProductList.map((data,index)=>{
              return (
                <div className="col-3 border m-3 shadow">
                <ProductCard key={index} productName={data.ad} productId={data.id} 
                 productImage={data.image} productPrice={data.fiyat} 
                 productType={data.tur} />
                   </div>
              )
            })
          }
       
        </div>
      </div>
       
    </div>
  )
}

export default magaza