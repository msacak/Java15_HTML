import React, { useState } from 'react'
import GameBall from '../components/atoms/GameBall'
import GameLine from '../components/molecules/GameLine'
import TeamCard from '../components/molecules/TeamCard';
import swal from 'sweetalert';


function Yarisma() {

  
  const [aTeamList,setATeamList] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  const [bTeamList,setBTeamList] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  const[aTahmin,setATahmin] = useState(0);
  const[bTahmin,setBTahmin] = useState(0);

  const rastgele = Math.floor(Math.random()*100)+1;




  function deneme(){
      const aTeamDiff = Math.abs(aTahmin-rastgele);
      const bTeamDiff = Math.abs(bTahmin-rastgele);
      if(aTeamDiff===bTeamDiff){
        swal('İki cevapta eşit ya da eşit miktarda doğru cevaba yakın!')
      }
      else if(aTeamDiff<bTeamDiff){
        const newAList = [...aTeamList]
        const trueIndex = newAList.indexOf(false);
        if(trueIndex===aTeamList.length-1){
          swal('KAZANAN A TAKIMI...TEBRİKLER!!!')
          return
        }
        newAList[trueIndex] = true;
        setATeamList(newAList);
        swal('Bu roundun kazananı A takımı. Doğru cevap = '+rastgele)
      }
      else if(bTeamDiff<aTeamDiff){
        const newBlist = [...bTeamList]
        const trueIndex = newBlist.indexOf(false);
        if(trueIndex===bTeamList.length-1){
          swal('KAZANAN B TAKIMI...TEBRİKLER!!!')
          return
        }
        newBlist[trueIndex] = true;
        setBTeamList(newBlist);
        swal('Bu roundun kazananı B takımı. Doğru cevap = '+rastgele)
      }

     
  }


  

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
            <TeamCard teamName='A takımı' teamNumber={1} tahmin={aTahmin} setTahmin={setATahmin} tikla={()=>null}/>
        </div>
        <div className="col-6 d-flex flex-wrap align-content-around" style={{minHeight:'400px'}}>
          
          <GameLine pointList={aTeamList} teamNumber={1}/>
          <GameLine pointList={[...bTeamList].reverse()} teamNumber={2}/>
          

          

        
        </div>
        <div className="col-3">
            <TeamCard teamName='B Takımı' teamNumber={2}  tahmin={bTahmin} setTahmin={setBTahmin} tikla={()=>deneme()}/>
        </div>
        </div>
    </div>
  )
}

export default Yarisma