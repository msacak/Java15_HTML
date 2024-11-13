import React, { useState } from 'react'

function Odev2() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [age,setAge] = useState('');

    const[isMatch,setIsMatch] = useState(true);
    const [isDisplay,setIsDisplay] = useState(false);

    const register = () =>{
        if(!setIsMatch) return;
        setIsDisplay(true);
        setIsMatch(password===repassword);
        
    }


  return (
    <div className="container justify-content-center">
        <div className="col-6 justify-content-center" style={{marginTop:50}}>
            <div className="mb-3">
                <input onChange={evt=>setUsername(evt.target.value)} type="text" className="form-control" placeholder='username'/>
            </div>
            <div className="mb-3">
            <input  onChange={evt=>setPassword(evt.target.value)} type="password" className="form-control" placeholder='password'/>
            </div>
            <div className="mb-3">
            <input onChange={evt=>{
                setRepassword(evt.target.value);
                setIsMatch(password===evt.target.value);
            }} type="password" className="form-control" placeholder='re-password'/>
          
            </div>

            {
                isMatch ?
                null:
                <p style={{color:'red'}}>Passwords don't match!</p>
            }

            <div className="mb-3">
                <select onChange={evt=>setAge(evt.target.value)} className="form-select">
                    <option selected>select age</option>
                    <option value="21">21</option>
                    <option value="24">24</option>
                    <option value="27">27</option>
                    <option value="30">30</option>
                </select>
            </div>
                <div className="mb-3 d-flex justify-content-end">
                    <button type='submit' onClick={register}  className="btn btn-success">register</button>
                </div>

                {
                    isDisplay 
                    ?
                    <div className="mb-3">
                        <label  className="form-label">Username: {username}</label><br />
                        <label  className="form-label">Password: {password}</label><br />
                        <label  className="form-label">Age: {age}</label><br />
                        
                        
                    </div>

                    :
                    null
                    
                }
        </div>
    </div>
  )
}

export default Odev2