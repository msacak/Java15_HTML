import React, { useState } from 'react'
import { IUser } from '../../models/IUser'
/**
 * TypeScript,
 * JS tip güvenliği olmayan bir dil, bu nedenle daha öngörülebilir bir yapı kurmak için TS geliştirilmiş. Burada değişkenler önceden
 * belirlenebiliyor ve ayrıca kendi tiplerimizi yaratabiliyoruz. Java classa da denk geliyor.
 */

function UserComponent(user: IUser) {
    const[isActive,setIsActive] = useState(user.isActive); //Burası önemli, ???
    const checkedEvent = ((evt: any)=>{
        setIsActive(evt.target.checked);
    })
    const getBodyClass = (state: boolean)=>{
        return state ? "col-3 border m-2 rounded-3 shadow text-bg-success" : "col-3 border m-2 rounded-3 shadow text-bg-secondary"
    }
    console.log('user component render'+user.userName);
  return (
    <div  className={getBodyClass(isActive)}>
                        <div className='mb-3'>
                            <label  className="form-label">Username: {user.userName}</label>
                        </div>
                        <div className='mb-3'>
                            <label  className="form-label">Name: {user.name}</label>
                        </div>
                        <div className="mb-3 form-check form-switch">
                            <input onChange={checkedEvent} type="checkbox" className="form-check-input" role='switch' defaultChecked={isActive} />
                        </div>
                    </div>
  )
}

export default UserComponent