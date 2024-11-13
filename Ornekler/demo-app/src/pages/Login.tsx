import React, { useState } from 'react'
import swal from 'sweetalert'

function Login() { //rfce komutu ile ana şablonu direk yükleyebilirsin
   
    
 
    const[username,setUsername] = useState('');
    const[password, setPassword] = useState('');
   
    const [isEmpty,setIsEmpty] = useState(false);
    const[isUserEmpty,setIsUserEmpty] = useState(false);
    const[isPasswordEmpty,setIsPasswordEmpty] = useState(false);

    const doLogin = ()=>{
        setIsUserEmpty(username==='');
        setIsPasswordEmpty(password==='');
        if(username==='' || password===''){
            setIsEmpty(true);
            
            return;
        } else
            setIsEmpty(false);
        
        //get işleminde sadece url yeterli iken, sunucuya veri iletilecek işlemlerde put,delete,post işlemlerinde 
        //fetch için diğer parametreler eklenmelidir.
        fetch('http://localhost:9090/v1/dev/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        }).then(data=>data.json()).then(res=>{
            if(res.code===200){
                swal('Giriş başarılı');
            }
            else{
                swal(res.message)
            }
        });
       
    }
    
 
  return (
    
   
    <div className='container'>
        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-6">
                {
                    isEmpty 
                    ?
                    <div className='alert alert-warning' role='alert'>
                    <h4>Uyarı</h4>
                    <hr />
                    <p>Kullanıcı adı ve şifre boş geçilemez.</p>
                </div> : null
                }   
                {
                    isUserEmpty ?
                    <div className="mb-3">
                    <label style={{color:'red'}} className='form-label'>Kullanıcı adı</label>
                    <input style={{borderColor:'red'}} onChange={evt=>{setUsername(evt.target.value)}} type="text" className='form-control' />
                    </div> :
                    <div className="mb-3">
                    <label className='form-label'>Kullanıcı adı</label>
                    <input onChange={evt=>{setUsername(evt.target.value)}} type="text" className='form-control' />
                    </div>
                }
          

                {
                    isPasswordEmpty ?
                
                    
                    <div className="mb-3">
                    <label style={{color:'red'}} className="form-label">Şifre</label>
                    <input style={{borderColor:'red'}} onChange={evt=>setPassword(evt.target.value)} type="password" className="form-control" />
                </div> :
                    <div className="mb-3">
                    <label  className="form-label">Şifre</label>
                    <input onChange={evt=>setPassword(evt.target.value)} type="password" className="form-control" />
                </div>

                }

                
                <div className="mb-3">
                    <button onClick={doLogin} className='btn btn-success'>Giriş</button>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
     
  )
}

export default Login