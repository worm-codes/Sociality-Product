
import { useReducer } from 'react';
import './stylesheets/App.css';
import './stylesheets/sidebar.css'
import './stylesheets/Header.css'
import  './stylesheets/profilePic.css'
import {data} from './helper/data'
import {datanew} from './helper/datanew'
import Media from './components/mediaContent'


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

function App() {
   
   const [sidebarSelect,dispatch]=useReducer(reducer,{display1:'block',display2:'none',display3:'none',display4:'none',display5:'none',display6:'none'})
   const [extrasidebarSelect,extraDispatch]=useReducer(extraReducer,{display1:'block',display2:'none',display3:'none',display4:'none',display5:'none',display6:'none'})
   const [active,activeDispatch]=useReducer(activeReducer,{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white',select9:'white',select10:'white',select11:'white',select12:'white'})
  
  let postData= JSON.parse(JSON.stringify(datanew)).posts_by_date;
  let postwithDate=[]
  Object.keys(postData)?.forEach((key,index)=>{
    postwithDate.push(postData[key])
    
  })
  console.log(postwithDate);


  return (
    <div className="App">
     <div className="header">
      <div className="left-section">
        <a className="main-page" href="#">
        <img className="logo" src="https://announcekit.app/blog/wp-content/uploads/2021/10/Sociality_Logo_MainV_positive.png"/></a>
      </div>
      
      
    </div>
   
    
     <div className="sidebar">
     
        {sidebarSelect.display1 ==='block'?<div className='sidebarSelector'></div>:''}
      <div   style={sidebarSelect.display1 ==='block'?{opacity:'1',color:'black'}:{}} onClick={()=>dispatch({type:"OPEN1CLOSEALL"})} className="sidebar-link">
        
        <div>1</div>
      </div>
      {sidebarSelect.display2 ==='block'?<div className='sidebarSelector'></div>:''}
      <div style={sidebarSelect.display2==='block'?{opacity:'1',color:'black'}:{}} onClick={()=>dispatch({type:"OPEN2CLOSEALL"})} className="sidebar-link">
       
        <div>2</div>
      </div>
      {sidebarSelect.display3 ==='block'?<div className='sidebarSelector'></div>:''}
      <div style={sidebarSelect.display3==='block'?{opacity:'1',color:'black'}:{}} onClick={()=>dispatch({type:"OPEN3CLOSEALL"})} className="sidebar-link">
        
        <div>3</div>
      </div>
      {sidebarSelect.display4 ==='block'?<div className='sidebarSelector'></div>:''}
      <div  style={sidebarSelect.display4==='block'?{opacity:'1',color:'black'}:{}} onClick={()=>dispatch({type:"OPEN4CLOSEALL"})} className="sidebar-link">
      
        <div>4</div>
      </div>
      
     {sidebarSelect.display4 ==='block'?<div className='sidebarSelector'></div>:''}
      <div style={sidebarSelect.display5==='block'?{opacity:'1',color:'black'}:{}} onClick={()=>dispatch({type:"OPEN5CLOSEALL"})} className="sidebar-link">
        
        <div>5</div>
      </div>

       {sidebarSelect.display6 ==='block'?<div className='sidebarSelector'></div>:''}
      <div style={sidebarSelect.display6==='block'?{opacity:'1',color:'black'}:{}} onClick={()=>dispatch({type:"OPEN6CLOSEALL"})} className="sidebar-link">
        
        <div>6</div>
      </div>
     
      
    </div>
     
     <div style={{display:sidebarSelect.display1}} className="extrasidebar">
    
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i class="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>29</span>
          {/* {extrasidebarSelect.display1==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus"></i>} */}
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
          <i class="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i class="fa-solid fa-minus sign"></i> :<i class="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>23223</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i class="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>23223</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>23223</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i class="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>23223</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>23223</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i class="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>23223</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>23223</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} class="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>23223</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>23223</li>
        </ul>
     
        </div>
          
        
      
      </div>


      
      <div style={{display:sidebarSelect.display2}} className="extrasidebar">
       

        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i class="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>33</span>
          {/* {extrasidebarSelect.display1==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus"></i>} */}
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}><span className='moreMenu'>Facebook 13</span></li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}><span className='moreMenu'>Twitter 20</span></li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
          <i class="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i class="fa-solid fa-minus sign"></i> :<i class="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>23223</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i class="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>23223</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>23223</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i class="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>23223</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>23223</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i class="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>23223</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>23223</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} class="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>23223</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>23223</li>
        </ul>
     
        </div>
      </div>


      <div style={{display:sidebarSelect.display3}} className="extrasidebar">
         <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i class="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>11</span>
          {/* {extrasidebarSelect.display1==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus"></i>} */}
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
          <i class="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i class="fa-solid fa-minus sign"></i> :<i class="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>23223</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i class="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>23223</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>23223</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i class="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>23223</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>23223</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i class="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>23223</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>23223</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} class="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>23223</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>23223</li>
        </ul>
     
        </div>
      </div>


      <div style={{display:sidebarSelect.display4}} className="extrasidebar">
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i class="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>21</span>
          {/* {extrasidebarSelect.display1==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus"></i>} */}
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
          <i class="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i class="fa-solid fa-minus sign"></i> :<i class="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>23223</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i class="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>23223</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>23223</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i class="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>23223</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>23223</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i class="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>23223</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>23223</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} class="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>23223</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>23223</li>
        </ul>
     
        </div>
      </div>





<div style={{display:sidebarSelect.display5}} className="extrasidebar">
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i class="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>17</span>
          {/* {extrasidebarSelect.display1==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus"></i>} */}
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
          <i class="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i class="fa-solid fa-minus sign"></i> :<i class="fa-solid fa-plus sign"></i>}
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
        <i class="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span> 
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
          <i class="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
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
          <i class="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
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
          <i style={{marginRight:'10px'}} class="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>Daily Report</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>Monthly Report</li>
        </ul>
     
        </div>
      </div>


      
<div style={{display:sidebarSelect.display6}} className="extrasidebar">
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
        
          <i class="fa-solid fa-bell me-2"></i><p className='notificationText'>NOTIFICATIONS </p><span className='notificationNumber'>8</span>
          {/* {extrasidebarSelect.display1==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus"></i>} */}
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
          <i class="fa-solid fa-arrow-trend-up me-2"></i><p>SUMMARY </p>{extrasidebarSelect.display2==='block'?<i class="fa-solid fa-minus sign"></i> :<i class="fa-solid fa-plus sign"></i>}
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>Graph Summary</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>23223</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <i class="fa-regular fa-pen-to-square me-2"></i><p style={{marginRight:'10px'}}>PUBLISH </p><span className='sign'>{extrasidebarSelect.display3==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span> 
        </div>
        </div>

         <div style={{display:extrasidebarSelect.display3}}>
         <ul>
          <li style={{color:active.select5}} onClick={()=>activeDispatch({type:"RED5WHITEALL"})}>23223</li>
          <li style={{color:active.select6}} onClick={()=>activeDispatch({type:"RED6WHITEALL"})}>23223</li>
        </ul>

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display4 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN4CLOSEALL"})}>
          <i class="fa-regular fa-comment me-2"></i><p style={{marginRight:'11px'}}>ENGAGE </p><span className='sign'>{extrasidebarSelect.display4==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>23223</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>23223</li>
        </ul>
     
       

        </div>


        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display5 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN5CLOSEALL"})}>
          <i class="fa-solid fa-wave-square me-2"></i><p style={{marginRight:'18px'}}>LISTEN </p><span className='sign'>{extrasidebarSelect.display5==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display5}}>
        <ul>
          <li style={{color:active.select9}} onClick={()=>activeDispatch({type:"RED9WHITEALL"})}>23223</li>
          <li style={{color:active.select10}} onClick={()=>activeDispatch({type:"RED10WHITEALL"})}>23223</li>
        </ul>
     
        </div>



         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display6 ==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN6CLOSEALL"})}>
          <i style={{marginRight:'10px'}} class="fa-regular fa-file "></i><p style={{marginRight:'11px'}}>REPORT </p><span className='sign'>{extrasidebarSelect.display6==='block'?<i class="fa-solid fa-minus "></i> :<i class="fa-solid fa-plus "></i>}</span>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display6}}>
        <ul>
          <li style={{color:active.select11}} onClick={()=>activeDispatch({type:"RED11WHITEALL"})}>23223</li>
          <li style={{color:active.select12}} onClick={()=>activeDispatch({type:"RED12WHITEALL"})}>23223</li>
        </ul>
     
        </div>
      </div>



      
      
      
      <div className="content">
      <img className='profilePic' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
         
      <div className="statusSection">
      <div className='status'> <span className="dot status-publish">&#x2022;</span><span>Published</span> </div>
      <div className='status' > <span className="dot status-schedule">&#x2022;</span> Scheduled</div>
      <div className='status'><span className="dot status-approve">&#x2022;</span>  Need Approval</div>
      <div className='status'><span  className="dot status-error">&#x2022; </span> Error</div>
      <div className='status'><span className="dot status-notes">&#x2022;</span>  Notes</div>
    </div> 

    
   {/* bu kisim for dongusunde olucak her tarih icindekini media compinentinde basicaz */}
   {/* 0. index ise kosulu yaz id='firstContent'  */}
    <div  className='contentWithDate'>
 <div className='datePosts'>14 January 2016</div> 
    <div className="items">

    <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='twitter' link='#'
     />
     <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />
     <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />
     <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />


      

   

    


   

    </div>

    </div>


     <div  className='contentWithDate'>
 <div style={{marginLeft:'30px'}}>date</div> 
    <div className="items">

    <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />
     <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />
     <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />
     <Media published_at='11 January 2016'
 upadted_at='15 January 2017'
  image='https://www.w3schools.com/howto/img_avatar.png'
   message="Some quick example text to build on the card title and make up the bulk of the card's content" approved={true} is_published={true}
   socialMedia='facebook' link='#'
     />


      

   

    


   

    </div>

    </div>

  
      </div>
    
     
    </div>
  );
}

export default App;
