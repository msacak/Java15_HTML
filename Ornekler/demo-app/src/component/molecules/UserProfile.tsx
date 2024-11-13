import React from 'react'
import { IUserProfile } from '../../models/IUserProfile'

interface IUserProfileProps{
    userProfile: IUserProfile;
    isAdmin: boolean
}

function UserProfile(props: IUserProfileProps) {
  return (
    <>
        <div className="row justify-content-center">
                    <img src={props.userProfile.photo} style={{width:'200px', borderRadius:'100%'}} />
                </div>
                <div className="row m-3">
                    <input type="text"  className='form-control' placeholder='Kullanıcı adı' value={props.userProfile.username}/>
                </div>
                <div className="row m-3">
                    <input type="password"  className='form-control' placeholder='Şire' value={props.userProfile.sifre}/>
                </div>
                <div className="row m-3">
                    <input type="tel"  className='form-control' placeholder='Telefon' value={props.userProfile.telefon}/>
                </div>
                <div className="row d-grid m-3" >
                    <button className='btn btn-success'>Bilgilerimi güncelle</button>
                </div>
    </>
  )
}

export default UserProfile