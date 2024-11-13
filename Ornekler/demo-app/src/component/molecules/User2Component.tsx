import React, { useState } from 'react'
import { IUser2 } from '../../models/IUser2'

function User2Component(user: IUser2) {
    const[isActive,setIsActive] = useState(user.isActive); 
    const checkedEvent = ((evt: any)=>{
        setIsActive(evt.target.checked);
    })
    const getBodyClass = (state: boolean)=>{
        return state ? "col-3 border m-2 rounded-3 shadow text-bg-info" : "col-3 border m-2 rounded-3 shadow text-bg-warning "
    }
    console.log('user component render'+user.id);
  return (
    <div  className={getBodyClass(isActive)}>
                        <div className='mb-3'>
                            <label className="form-label"><b>User ID: {user.id}</b></label>
                        </div>
                        <div className='mb-3'>
                            <img src={user.avatar} style={{width:'75px', height:'75px', borderRadius:'75px', border:'solid', backgroundColor:'red'}} alt="" />
                          
                        </div>
                        <div className="mb-3 form-check form-switch">
                            <input onChange={checkedEvent} type="checkbox" className="form-check-input" role='switch' defaultChecked={isActive} />
                        </div>
                    </div>
  )
}

export default User2Component