import React from 'react'
import dataList from '../utils/userList.json'
import UserAvatarComponent from '../component/molecules/UserAvatarComponent';

function UserAvatarList() {

    const list = dataList;
    console.log(dataList);
    

  return (
   <div className="container">
    <div className="row mt-5">
        {
           list.map((data,index)=>{
                return(
                   <UserAvatarComponent key={index} isActive={data.isActive} avatar={data.avatar} id={data.id} /> 
                )
           })
        }

        
    </div>
   </div>
  )
}

export default UserAvatarList