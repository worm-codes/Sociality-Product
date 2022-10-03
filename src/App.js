
import { useReducer } from 'react';
import './stylesheets/App.css';
import './stylesheets/sidebar.css'
import './stylesheets/Header.css'
import  './stylesheets/profilePic.css'

import Media from './components/mediaContent'


const reducer=(sidebarSelect,action)=>{
  switch (action.type) {
    case 'OPEN1CLOSEALL':
      return{
        display1:'block',display2:'none',display3:'none',display4:'none'
      }
      
    case "OPEN2CLOSEALL":
       return{display1:'none',display2:'block',display3:'none',display4:'none'}
    
    case "OPEN3CLOSEALL":
       return{display1:'none',display2:'none',display3:'block',display4:'none'}
    
    case "OPEN4CLOSEALL":
       return{display1:'none',display2:'none',display3:'none',display4:'block'}   
      
    default:
      return sidebarSelect
      
  }
}
const extraReducer=(extrasidebarSelect,action)=>{
  switch (action.type) {
    case 'OPEN1CLOSEALL':
      return{
        display1:'block',display2:'none',display3:'none',display4:'none'
      }
      
    case "OPEN2CLOSEALL":
       return{display1:'none',display2:'block',display3:'none',display4:'none'}
    
    case "OPEN3CLOSEALL":
       return{display1:'none',display2:'none',display3:'block',display4:'none'}
    
    case "OPEN4CLOSEALL":
       return{display1:'none',display2:'none',display3:'none',display4:'block'}   
      
    default:
      return extrasidebarSelect
      
  }
}



const activeReducer=(activeSelect,action)=>{
  switch (action.type) {
    case 'RED1WHITEALL':
      return{
        select1:'red',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white'
      }
      
    case "RED2WHITEALL":
       return{select1:'white',select2:'red',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white'}
    
    case "RED3WHITEALL":
       return{select1:'white',select2:'white',select3:'red',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white'}
    
    case "RED4WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'red'
  ,select5:'white',select6:'white',select7:'white',select8:'white'} 

    case "RED5WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'red',select6:'white',select7:'white',select8:'white'}  

    case "RED6WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'red',select7:'white',select8:'white'}  

     case "RED7WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'red',select8:'white'} 

     case "RED8WHITEALL":
       return{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'red'} 
      
    default:
      return activeSelect
      
  }
}

function App() {
   
   const [sidebarSelect,dispatch]=useReducer(reducer,{display1:'block',display2:'none',display3:'none',display4:'none'})
   const [extrasidebarSelect,extraDispatch]=useReducer(extraReducer,{display1:'block',display2:'none',display3:'none',display4:'none'})
   const [active,activeDispatch]=useReducer(activeReducer,{select1:'white',select2:'white',select3:'white',select4:'white'
  ,select5:'white',select6:'white',select7:'white',select8:'white'})





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
      <div className="sidebar-link">
      
        <div>xxxx</div>
      </div>
      <div className="sidebar-link">
       
        <div>xxxx</div>
      </div>
     
      
    </div>
     
     <div style={{display:sidebarSelect.display1}} className="extrasidebar">
    
        <div className="extrasidebar-link">
        <div 
        className={`extraLink ${ extrasidebarSelect.display1==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN1CLOSEALL"})}>
          <p>sdsdsdsd</p>
        </div>
        
        </div>

           <div style={{display:extrasidebarSelect.display1}}>
         <ul>
          <li style={{color:active.select1}} onClick={()=>activeDispatch({type:"RED1WHITEALL"})}>23223</li>
          <li style={{color:active.select2}} onClick={()=>activeDispatch({type:"RED2WHITEALL"})}>23223</li>
        </ul>

        </div>
           
         <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display2==='block'? 'extrasidebarRed':''}`}
         onClick={()=>extraDispatch({type:"OPEN2CLOSEALL"})}>
         <p>sdsdsdsd12</p>
         </div>
        
        </div>

         <div style={{display:extrasidebarSelect.display2}}>
         <ul>
          <li style={{color:active.select3}} onClick={()=>activeDispatch({type:"RED3WHITEALL"})}>23223</li>
          <li style={{color:active.select4}} onClick={()=>activeDispatch({type:"RED4WHITEALL"})}>23223</li>
        </ul>

        </div>
        
        <div className="extrasidebar-link">
        <div className={`extraLink ${ extrasidebarSelect.display3==='block'? 'extrasidebarRed':''}`}
        onClick={()=>extraDispatch({type:"OPEN3CLOSEALL"})}>
        <p>sdsdsdsd434</p>
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
        <p>sdsdsdsd566</p>
        </div>
        </div>

        <div style={{display:extrasidebarSelect.display4}}>
        <ul>
          <li style={{color:active.select7}} onClick={()=>activeDispatch({type:"RED7WHITEALL"})}>23223</li>
          <li style={{color:active.select8}} onClick={()=>activeDispatch({type:"RED8WHITEALL"})}>23223</li>
        </ul>
     
       

        </div>
          
        
      
      </div>
      <div style={{display:sidebarSelect.display2}} className="extrasidebar">
        <div>2222</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
      </div>
      <div style={{display:sidebarSelect.display3}} className="extrasidebar">
        <div>333333</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
      </div>
      <div style={{display:sidebarSelect.display4}} className="extrasidebar">
        <div>444444</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
        <div>sdsds</div>
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
