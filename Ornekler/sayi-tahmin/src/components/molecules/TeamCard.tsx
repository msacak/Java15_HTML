import React from 'react'

interface ITeamCard{
    teamNumber: number,
    teamName: string,
    tahmin: any,
    setTahmin: any
    tikla: () => void
}

 
function TeamCard(props: ITeamCard) {
    
 const getTeamColor = ()=>{
    if(props.teamNumber ===1) return "row text-bg-primary rounded-top-4"
        return "row text-bg-warning rounded-top-4"
    }
  return (
    <div className="shadow m-1">
        <div className={getTeamColor()}>
            <h1 className='text-center'>{props.teamName}</h1>
        </div>
        <div className="row mt-5">
            <h4 className='text-center'>Sayıyı tahmin et</h4>
        </div>
        <div className="row w-50 m-auto mt-4" >
            <input onChange={e=>props.setTahmin(e.target.value)} value={props.tahmin} type="text" className='form-control' />
        </div>
        <div className="row mt-4 justify-content-center pb-5">
            <input onClick={()=>props.tikla()} type="button" value="Tahmin et" className='btn btn-success' 
            style={{width:'100px', height:'100px', borderRadius:'100px'}} />
        </div>
    </div>
  )
}

export default TeamCard