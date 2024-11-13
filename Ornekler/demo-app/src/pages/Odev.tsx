import React, { useState } from 'react'

function Odev() {

    const [sayi1, setSayi1] = useState('');
    const [sayi2, setSayi2] = useState('');
    const [sonuc, setSonuc] = useState(0);
    const [isResult, setIsResult] = useState(false);

    const topla = () => {
        const toplam = parseInt(sayi1) + parseInt(sayi2);
       
        setSonuc(toplam);
        setIsResult(true);
        
    };

   
   
  return (
    <div className="container">
   
         <div className="col-6" style={{marginTop:50}}>
            <div className="mb-3">
                <input onChange={evt=>{setSayi1(evt.target.value)}} type="number" className="form-control" placeholder='1.Sayı'/>
             </div>
             <div className="mb-3">
                <input onChange={evt=>{setSayi2(evt.target.value)}} type="number" className="form-control" placeholder='2.Sayı'/>
             </div>
             <div className="mb-3">
             <button onClick={topla}  className='btn btn-success'>Topla</button>
              </div>
              
              {
                isResult ?
                <div className="mb-3">
                <p>Sonuç = {sonuc}</p>
                 </div> :
                 null
              }
        </div>
   

    </div>
  )
  
}

export default Odev