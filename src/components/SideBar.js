import React,{useReducer} from 'react'
import { Sidebar } from './styles/Sidebar/Sidebar.styled'
import { SidebarSelector } from './styles/Sidebar/SidebarSelector.styled'
import { SidebarLink } from './styles/Sidebar/SidebarLink.styled'
import { NotificationRoundedNumber } from './styles/Sidebar/NotificationRoundedNumber.styled'
import { ExtraSidebar } from './styles/ExtraSidebar/ExtraSidebar.styled'


const reducer=(sidebarSelect,action)=>{
  switch (action.type) {
    case 'OPEN1CLOSEALL':
      return{
        display1:'block',display2:'none',display3:'none',display4:'none',display5:'none',display6:'none'
      }
      
    case "OPEN2CLOSEALL":
       return{display1:'none',display2:'block',display3:'none',display4:'none',display5:'none',display6:'none'}
    
    case "OPEN3CLOSEALL":
       return{display1:'none',display2:'none',display3:'block',display4:'none',display5:'none',display6:'none'}
    
    case "OPEN4CLOSEALL":
       return{display1:'none',display2:'none',display3:'none',display4:'block',display5:'none',display6:'none'}   
  
      case "OPEN5CLOSEALL":
    return{display1:'none',display2:'none',display3:'none',display4:'none',display5:'block',display6:'none'}   
   
    case "OPEN6CLOSEALL":
    return{display1:'none',display2:'none',display3:'none',display4:'none',display5:'none',display6:'block'}     
       
       
      
    default:
      return sidebarSelect
      
  }
}
const extraReducer=(extrasidebarSelect,action)=>{
  switch (action.type) {
    case 'OPEN1CLOSEALL':
      return{
        display1:'block',display2:'none',display3:'none',display4:'none',display5:'none',display6:'none'
      }
      
    case "OPEN2CLOSEALL":
       return{display1:'none',display2:'block',display3:'none',display4:'none',display5:'none',display6:'none'}
    
    case "OPEN3CLOSEALL":
       return{display1:'none',display2:'none',display3:'block',display4:'none',display5:'none',display6:'none'}
    
    case "OPEN4CLOSEALL":
    return{display1:'none',display2:'none',display3:'none',display4:'block',display5:'none',display6:'none'} 
    
    case "OPEN5CLOSEALL":
    return{display1:'none',display2:'none',display3:'none',display4:'none',display5:'block',display6:'none'}   
    
    case "OPEN6CLOSEALL":
    return{display1:'none',display2:'none',display3:'none',display4:'none',display5:'none',display6:'block'}     
      
    default:
      return extrasidebarSelect
      
  }
}



const activeReducer=(activeSelect,action)=>{
  switch (action.type) {
    case 'RED1WHITEALL':
      return{
        select1:'rgb(245,86,97)',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'
      }
      
    case "RED2WHITEALL":
       return{select1:'white',select2:'rgb(245,86,97)',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'}
    
    case "RED3WHITEALL":
       return{select1:'white',select2:'white',select3:'rgb(245,86,97)',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'}
    
    case "RED4WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'rgb(245,86,97)'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'} 

    case "RED5WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'rgb(245,86,97)',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'}  

    case "RED6WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'rgb(245,86,97)',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'}  

     case "RED7WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'rgb(245,86,97)',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'white'} 

     case "RED8WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'rgb(245,86,97)',
  select9:'white',select10:'white',select11:'white',select12:'white'} 

  case "RED9WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'rgb(245,86,97)',select10:'white'
,select11:'white',select12:'white'} 

  case "RED10WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'rgb(245,86,97)',select11:'white',select12:'white'} 

   case "RED11WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'rgb(245,86,97)',select12:'white'} 

   case "RED12WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',
  select9:'white',select10:'white',select11:'white',select12:'rgb(245,86,97)'} 
      
    default:
      return activeSelect
      
  }
}

const SideBar = () => {
   const [sidebarSelect,dispatch]=useReducer(reducer,{display1:'block',display2:'none',display3:'none',display4:'none',display5:'none',display6:'none'})
   const [extrasidebarSelect,extraDispatch]=useReducer(extraReducer,{display1:'block',display2:'none',display3:'none',display4:'none',display5:'none',display6:'none'})
   const [active,activeDispatch]=useReducer(activeReducer,{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',select9:'white',select10:'white',select11:'white',select12:'white'})

  return (

    
    <div> 

    <Sidebar>
     {sidebarSelect.display1 ==='block'?<SidebarSelector/>:''}
     <SidebarLink display={sidebarSelect.display1==='block'} onClick={()=>dispatch({type:"OPEN1CLOSEALL"})}>
        <div className='company'>
        <NotificationRoundedNumber>29</NotificationRoundedNumber>
        <img src="https://pbs.twimg.com/profile_images/921330742478753794/coeGcsnq_400x400.jpg" alt="account image" />
        </div>
     </SidebarLink>

     {sidebarSelect.display2 ==='block'?<SidebarSelector/>:''}
     <SidebarLink display={sidebarSelect.display2==='block'} onClick={()=>dispatch({type:"OPEN2CLOSEALL"})}>
        <div className='company'>
        <img src="https://cdn-icons-png.flaticon.com/512/49/49482.png" alt="account image" />
        </div>
     </SidebarLink>


     {sidebarSelect.display3 ==='block'?<SidebarSelector/>:''}
     <SidebarLink display={sidebarSelect.display3==='block'} onClick={()=>dispatch({type:"OPEN3CLOSEALL"})}>
        <div className='company'>
        <NotificationRoundedNumber>11</NotificationRoundedNumber>
        <img src="https://cdn-icons-png.flaticon.com/512/49/49416.png" alt="account image" />
        </div>
     </SidebarLink>


      {sidebarSelect.display4 ==='block'?<SidebarSelector/>:''}
     <SidebarLink display={sidebarSelect.display4==='block'} onClick={()=>dispatch({type:"OPEN4CLOSEALL"})}>
        <div className='company'>
        <NotificationRoundedNumber>21</NotificationRoundedNumber>
        <img src="https://cdn-icons-png.flaticon.com/512/5448/5448104.png" alt="account image" />
        </div>
     </SidebarLink>

     
  {sidebarSelect.display5 ==='block'?<SidebarSelector/>:''}
     <SidebarLink display={sidebarSelect.display5==='block'} onClick={()=>dispatch({type:"OPEN5CLOSEALL"})}>
        <div className='company'>
        <NotificationRoundedNumber>17</NotificationRoundedNumber>
        <img src="https://cdn-icons-png.flaticon.com/512/731/731983.png" alt="account image" />
        </div>
     </SidebarLink>
     

     {sidebarSelect.display6 ==='block'?<SidebarSelector/>:''}
     <SidebarLink display={sidebarSelect.display6==='block'} onClick={()=>dispatch({type:"OPEN6CLOSEALL"})}>
        <div className='company'>
        <NotificationRoundedNumber>8</NotificationRoundedNumber>
        <img src="https://cdn-icons-png.flaticon.com/512/512/512211.png" alt="account image" />
        </div>
     </SidebarLink>
      
    

    </Sidebar>

    
  
     <ExtraSidebar  display={sidebarSelect.display1}>
      <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i className="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>29</span>
         
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 13</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 16</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
         <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
         
          <i className="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i className="fa-solid fa-minus sign"></i> :<i className="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>Daily Summary</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i className="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>Compose</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>Feed</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i className="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>Bind</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>Social</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i className="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>Data</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>User</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} className="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
          

     </ExtraSidebar>
     




      
      <ExtraSidebar display={sidebarSelect.display2}>
       

        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i className="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span style={{border:'none'}} className='notificationNumber'></span> 
   
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 0</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 0</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
          <i className="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i className="fa-solid fa-minus sign"></i> :<i className="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>Daily Summary</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i className="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>Compose</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>Feed</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i className="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>Bind</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>Social</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i className="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>Data</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>User</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} className="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
      </ExtraSidebar>




      <ExtraSidebar display={sidebarSelect.display3}>
         <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i className="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>11</span>
         
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 5</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 6</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
          <i className="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i className="fa-solid fa-minus sign"></i> :<i className="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>Daily Summary</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i className="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>Compose</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>Feed</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i className="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>Bind</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>Social</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i className="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>Data</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>User</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} className="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
      </ExtraSidebar>


      <ExtraSidebar display={sidebarSelect.display4} >
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i className="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>21</span>
        
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 11</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 10</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
          <i className="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i className="fa-solid fa-minus sign"></i> :<i className="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>Daily Summary</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i className="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>Compose</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>Feed</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i className="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>Bind</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>Social</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i className="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>Data</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>User</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} className="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
      </ExtraSidebar>





<ExtraSidebar display={sidebarSelect.display5}>
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i className="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>17</span>
         
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 10</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 7</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
          <i className="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i className="fa-solid fa-minus sign"></i> :<i className="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>Daily Summary</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i className="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>Compose</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>Feed</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i className="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>Bind</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>Social</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i className="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>Data</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>User</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} className="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
      </ExtraSidebar>


      
<ExtraSidebar display={sidebarSelect.display6}>
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i className="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p> <span className='notificationNumber'>8</span>
        
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 5</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 3</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
          <i className="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i className="fa-solid fa-minus sign"></i> :<i className="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>Daily Summary</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i className="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>Compose</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>Feed</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i className="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>Bind</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>Social</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i className="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>Data</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>User</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} className="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i className="fa-solid fa-minus "></i> :<i className="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
      </ExtraSidebar>
</div>
  )
}

export default SideBar