import React from 'react'
import swal from 'sweetalert';

function Login() {

    const kaydet = ()=>{
        swal('Kayıt işlemi başarılı')
        
    };

  return (
    <div>
        <label >Kullanıcı adı</label><br /><br />
        <input type="text"  /> <br/><br/>

        <label >Şifre</label><br /><br />
        <input type="password"  /> <br/><br/>

        <button onClick={kaydet}>Kaydet</button>
    </div>
  )
}

export default Login