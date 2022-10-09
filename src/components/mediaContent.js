import React from 'react'
import { useState } from 'react';
import '../stylesheets/App.css';


 

const MediaContent = ({date,data}) => {
  let conditionColor=['rgb(58,193,131)','rgb(247,191,56)','rgb(251,100,80)','rgb(172,172,172)','rgb(103,177,242)']
            // schedule,approve,published,error

   let temp=data.published_at.split(' ')
   let time=temp[1].substr(0,5);

  const [image,setImage]=useState(data.entry.image)
   
   
  
  return (
    
      <div className="card">
   <a target='_blank' href={data.link?data.link:'#'} rel="noreferrer"><button style={{backgroundColor:data.is_published? conditionColor[3]:conditionColor[data.status]}} className='socialMediaButton'>
   <i className={`fa-brands fa-${data.account.channel==='instagrambusiness'?'instagram':data.account.channel} fa-lg`}/>
   </button></a>
   
   <div style={{display: "flex",flexDirection: "column"}}>
 <div className="card-body">

  <div className="dateAndButtons">
     <p className="card-text inside-date">{`${date} ${time}`}</p> 
    <div className="buttonsNextToDate">
     {!data.is_published ?<a href='#' ><i className={`fa-solid fa-${data.status===1?'check':'ban'}`}></i></a>:''}
     <a href='#' className='trashButton' ><i className="fa-solid fa-trash-can"></i></a>
     <a href='#' className='extraButton' > <i className="fa-solid fa-ellipsis"></i> </a>
     </div>
    </div>
    
    <p className="card-text main-text">{data.entry.message}</p>
 </div>
    
      <img width='273px' className='contentPhoto'
  src={image}
   alt="..."
   onError={()=>{
   setImage('https://i.ibb.co/wRBnsXs/no-post-image.png')
   }}
   
   />


 
  <div className="card-body">
  <div className='interactions'>

    <a href="#" className="card-link"><i className="fa-regular fa-thumbs-up fa-lg"></i> <span className='interactNumber'>{data.is_published?'3':'0'}</span></a>
    <a href="#" className="card-link">{data.account.channel!=='twitter'?<i className="fa-regular fa-message"></i>:<i className="fa-solid fa-retweet"></i>}  <span className='interactNumber'>{data.is_published?'7':'0'}</span></a>
  <a href="#" className="card-link">{data.account.channel==='twitter'?<i className="fa-regular fa-message"></i>:<i className="fa-solid fa-share-nodes"></i>}  <span className='interactNumber'>{data.is_published?'9':'0'}</span></a>
    <a href="#" className="card-link"><i className="fa-solid fa-eye"></i>  <span className='interactNumber'>{data.is_published?'9':'0'}</span></a>
  </div>
  
  </div>
</div>
   </div>
  )
}

export default MediaContent
