import React from 'react'
import GameBall from '../atoms/GameBall'

interface IGameLineProps{
    teamNumber: number, //takım numarası 1 ya da 2 
    pointList: boolean[] // bildikleri soru adedi, true true true false
}

function GameLine(props: IGameLineProps) {
  return (
    <div className='col-12 p-2 shadow rounded-4'>
        {
            props.pointList.map((data,index)=>{ // aynı elemendan 1den fazla yaratıcaksan key vermen lazım mutlaka...
                return <GameBall key={index} isFill ={data} teamNumber={props.teamNumber}/>
            })
        }
       
    </div>
  )
}

export default GameLine