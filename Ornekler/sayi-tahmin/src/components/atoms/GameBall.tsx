import React from 'react'

interface IGameBallProps {
    isFill: boolean, //toplar dolu mu boş mu olsun
    teamNumber: number // 1. yada 2.takım
}

function GameBall(props: IGameBallProps) {

    const borderColor = ()=>{
        if(props.teamNumber === 1){
            return '1px solid rgb(15,99,253)'
        }return '1px solid rgb(255,185,11)'
    }

    const backgroundColor = ()=>{
        if(props.teamNumber === 1){
            return 'rgb(15,99,253)'
        }return 'rgb(255,185,11)'
    }
  
  return (
    <>
    {
        props.isFill ?   <div style={{display:'inline-block', width:'35px', height:'35px', margin:'3px',
            borderRadius:'50%', border:borderColor(), backgroundColor:backgroundColor()
            }}>
               </div> :
                 <div style={{display:'inline-block', width:'35px', height:'35px', margin:'3px',
                    borderRadius:'50%', border:borderColor()
                    }}>
                       </div>
    }


    </>
  )
}

export default GameBall