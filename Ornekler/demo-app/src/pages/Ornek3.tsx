import React, { useState } from 'react'
import User2Component from '../component/molecules/User2Component'

function Ornek3() {

    const[userList,setUserList] = useState([{
        "id": 1,
        "avatar": "https://robohash.org/molestiaeetaccusamus.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 2,
        "avatar": "https://robohash.org/atqueveritatiset.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 3,
        "avatar": "https://robohash.org/errormolestiasconsequuntur.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 4,
        "avatar": "https://robohash.org/voluptassuscipitporro.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 5,
        "avatar": "https://robohash.org/ametevenietsunt.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 6,
        "avatar": "https://robohash.org/molestiaevoluptatumlibero.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 7,
        "avatar": "https://robohash.org/inciduntdelenitirepellat.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 8,
        "avatar": "https://robohash.org/rerumomnisdelectus.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 9,
        "avatar": "https://robohash.org/fugaetnatus.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 10,
        "avatar": "https://robohash.org/quiassumendaeveniet.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 11,
        "avatar": "https://robohash.org/laborumnamreprehenderit.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 12,
        "avatar": "https://robohash.org/ullamvoluptatumratione.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 13,
        "avatar": "https://robohash.org/doloremautaccusantium.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 14,
        "avatar": "https://robohash.org/evenietnequedolorum.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 15,
        "avatar": "https://robohash.org/mollitiafacereeum.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 16,
        "avatar": "https://robohash.org/autiniste.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 17,
        "avatar": "https://robohash.org/quiquidemqui.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 18,
        "avatar": "https://robohash.org/doloremquesedconsequatur.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 19,
        "avatar": "https://robohash.org/enimnisifugit.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 20,
        "avatar": "https://robohash.org/laboriosamnihillaudantium.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 21,
        "avatar": "https://robohash.org/repellendustemporeid.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 22,
        "avatar": "https://robohash.org/dolordelectusmagnam.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 23,
        "avatar": "https://robohash.org/laborepossimusdolores.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 24,
        "avatar": "https://robohash.org/quianonqui.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 25,
        "avatar": "https://robohash.org/similiquevelitnatus.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 26,
        "avatar": "https://robohash.org/etconsequaturqui.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 27,
        "avatar": "https://robohash.org/exercitationemsuntaut.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 28,
        "avatar": "https://robohash.org/inciduntsuntest.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 29,
        "avatar": "https://robohash.org/sequiiustoeos.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 30,
        "avatar": "https://robohash.org/errordistinctioquaerat.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 31,
        "avatar": "https://robohash.org/quasicorporisdelectus.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 32,
        "avatar": "https://robohash.org/eumnihilet.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 33,
        "avatar": "https://robohash.org/quianesciuntautem.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 34,
        "avatar": "https://robohash.org/voluptatibusdoloremquemolestiae.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 35,
        "avatar": "https://robohash.org/ducimusdebitisdistinctio.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 36,
        "avatar": "https://robohash.org/suntmaximeut.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 37,
        "avatar": "https://robohash.org/ipsaetimpedit.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 38,
        "avatar": "https://robohash.org/expeditasuntnam.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 39,
        "avatar": "https://robohash.org/esseeosquae.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 40,
        "avatar": "https://robohash.org/ducimusquisreiciendis.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 41,
        "avatar": "https://robohash.org/autistequod.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 42,
        "avatar": "https://robohash.org/dolormagnitotam.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 43,
        "avatar": "https://robohash.org/quasicupiditateet.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 44,
        "avatar": "https://robohash.org/sintatquevoluptas.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 45,
        "avatar": "https://robohash.org/quidemvelid.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 46,
        "avatar": "https://robohash.org/suntsaepeconsequuntur.png?size=50x50&set=set1",
        "isActive": false
      }, {
        "id": 47,
        "avatar": "https://robohash.org/deseruntvelitautem.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 48,
        "avatar": "https://robohash.org/autvoluptatemdoloribus.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 49,
        "avatar": "https://robohash.org/maioresetmagnam.png?size=50x50&set=set1",
        "isActive": true
      }, {
        "id": 50,
        "avatar": "https://robohash.org/eaametrepudiandae.png?size=50x50&set=set1",
        "isActive": false
      }])


  return (
    <div className="container">
        <div className="row mt-5 mb-3">
            <input type="text" className='form-control' />
        </div>
        <div className="row mb-3 justify-content-center">
              {
                userList.map((user,index)=>{
                    return(
                        <User2Component key={index} id={user.id} avatar={user.avatar} isActive={user.isActive} />
                    )
                })
              }  
           
        </div>
    </div>
  )
  
}

export default Ornek3