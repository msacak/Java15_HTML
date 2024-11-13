import React, { useState } from 'react'
import UserComponent from '../component/molecules/UserComponent';

function UserListComponents() {
    /**
     * useState, bir değişkeni sarmalayarak react tarafından yönetilmesini sağlar, böylece bu değişkenin stateinde olacak bir değişiklik
     * bilinir ve ilgili component tekrardan render edilir. Böylece değişkende olan değişiklik sayfaya yansıtılmış olur. 
     * useState(DEFAULT_VALUE) eğer bir değişkene ilk başlangıç değeri atayacak iseniz parantezleri içerisinde değer vermeniz yeterlidir.
     * Bir değişkenin değiştiğinin react tarafından anlaşılması için set methodunun mutlaka tetiklenmesi gerekli, bu nedenle değişkenin
     * değerini = atama operatorü kullanarak yapmak sayfada değişikliğe neden olmaz.
     */

    const [userList,setUserList] = useState([{   "userName": "rbumpas0",   "name": "Rani Bumpas",   "isActive": false }, {   "userName": "ewindridge1",   "name": "Esra Windridge",   "isActive": true }, {   "userName": "lverne2",   "name": "La verne Andress",   "isActive": false }, {   "userName": "gburnham3",   "name": "Gardy Burnham",   "isActive": true }, {   "userName": "tabrashkin4",   "name": "Talia Abrashkin",   "isActive": false }, {   "userName": "gchittock5",   "name": "Georgie Chittock",   "isActive": true }, {   "userName": "rgreenmon6",   "name": "Reube Greenmon",   "isActive": true }, {   "userName": "mcundey7",   "name": "Megan Cundey",   "isActive": true }, {   "userName": "dwilsone8",   "name": "Dyane Wilsone",   "isActive": true }, {   "userName": "snorwood9",   "name": "Scotty Norwood",   "isActive": false }, {   "userName": "jaspolea",   "name": "Jeniffer Aspole",   "isActive": false }, {   "userName": "mparissb",   "name": "Malissa Pariss",   "isActive": true }, {   "userName": "spynerc",   "name": "Sax Pyner",   "isActive": false }, {   "userName": "neynaudd",   "name": "Nicola Eynaud",   "isActive": false }, {   "userName": "cdichee",   "name": "Claudius Diche",   "isActive": true }]);
 
    
    /**
     * DİKKAT!!!
     * bir arrow fonksiyon eğer ek parametre almayacak ise ilgili methodların gövdelerine direkt sarılarak kullanılabilir. Mesela:
     * 1.Adım:
     * const checkedEvent = (evt: any){}
     * 2.Adım: 
     * onChange = {checkedEvent}
     * buradaki kullanım onChange propsunun içinde zaten evt parametresi olduğu için ek bir kullanıma gerek kalmadan checkedEvent
     * eklenebiliyor.
     * Ancak bir arrow method içinde özel olarak ek parametreler istiyor ise ilgili handle method ayrı bir gövdeye sahip olacak 
     * şekilde kodlanmalıdır. Mesela:
     * 1:Adım: const checkedEvent = (isActive: boolean, index: number)=>{}
     * 2.Adım: onChange = {evt=>{checkedEvent(DEĞER,DEĞER)}}
     */
    const checkedEvent = (isActive: boolean,index: number) =>{
       
        let list = userList.map((data,Uindex)=>{
            if(Uindex==index) data.isActive = isActive;
            return data;
        })
        setUserList(list); 
        //bunu bir sunucuya ilgili kullanıcının değerini değiştirmek için gönderdiğinizi düşünün.
    }   
     
    console.log('render');
  return (
    <div className="container">
        <div className="row mt-5 mb-3">
            <input type="text" className='form-control' />
        </div>
        <div className="row mb-3 justify-content-center">
              {
                userList.map((user,index)=>{
                    return(
                        <UserComponent key={index} userName={user.userName} name={user.name} isActive={user.isActive} />
                    )
                })
              }  
           
        </div>
    </div>
  )
}

export default UserListComponents