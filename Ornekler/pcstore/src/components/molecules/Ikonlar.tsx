import React, { useState } from 'react'

interface IIcon{
    url: string
   
}
function Ikonlar(props: IIcon) {

    const[tikla,setTikla] = useState(false)

   
  return (
    <>
    {
        tikla ?     <i onClick={()=>setTikla(!tikla)} className={props.url} 
        style={{color:'white', border:'1px solid #518cec', padding:'6px', borderRadius:'5px', margin:'2px', backgroundColor:'#0d950d'}}></i>
        :
        <i onClick={()=>setTikla(!tikla)} className={props.url} 
        style={{color:'#518cec', border:'1px solid #518cec', padding:'6px', borderRadius:'5px', margin:'2px' }}></i>
    }

    </>
  )
}

export default Ikonlar