import React from 'react'
import '../stylesheets/App.css';

 

const mediaContent = ({published_at,image,message,approved,is_published,socialMedia,link,updated_at}) => {
  let conditionColor=['rgb(172,172,172)','rgb(58,193,131)','rgb(247,191,56)','rgb(251,100,80)','rgb(103,177,242)']
            // published,schedule,approve,error,notes colors
  return (
    
      <div className="card">
   <a href="#"><button style={{backgroundColor:conditionColor[0]}} className='socialMediaButton'>  <i class="fa-brands fa-twitter fa-lg"/></button></a>
   
   <div style={{display: "flex",flexDirection: "column"}}>
 <div className="card-body">

  <div className="dateAndButtons">
     <p className="card-text inside-date">{is_published? published_at:updated_at}</p> 
    <div className="buttonsNextToDate">
     <a href='#' className='banButton' ><i class="fa-solid fa-ban"></i></a>
     <a href='#' className='trashButton' ><i class="fa-solid fa-trash-can"></i></a>
     <a href='#' className='extraButton' > <i class="fa-solid fa-ellipsis"></i> </a>
     </div>
    </div>
    
    <p className="card-text main-text">{message}</p>
 </div>
    
  <img className='contentPhoto text-center card-img-top' 
  src={image}
   alt="..."/>

 
  <div className="card-body">
  <div className='interactions'>

    <a href="#" className="card-link"><i class="fa-regular fa-thumbs-up fa-lg"></i> <span className='interactNumber'>0</span></a>
    <a href="#" className="card-link">{socialMedia!=='twitter'?<i class="fa-regular fa-message"></i>:<i class="fa-solid fa-retweet"></i>}  <span className='interactNumber'>3</span></a>
  <a href="#" className="card-link">{socialMedia==='twitter'?<i class="fa-regular fa-message"></i>:<i class="fa-solid fa-share-nodes"></i>}  <span className='interactNumber'>5</span></a>
    <a href="#" className="card-link"><i class="fa-solid fa-eye"></i>  <span className='interactNumber'>11</span></a>
  </div>
  
  </div>
</div>
   </div>
  )
}

export default mediaContent
