
import './stylesheets/App.css';
import './stylesheets/extrasidebar.css'
import './stylesheets/Header.css'
import  './stylesheets/profilePic.css'
import {datanew} from './helper/datanew'
import Media from './components/Media'
import SideBar from './components/SideBar';




function App() {

  let postData= JSON.parse(JSON.stringify(datanew)).posts_by_date;
  let postwithDate=[]
  Object.keys(postData)?.forEach((key,index)=>{
    postwithDate.push(postData[key])
    
  })

  let months=['January','February','March','April','May','June','July','August','September','October','November','December']

  return (
    <div className="App">
     <div className="header">
      <div className="left-section">
        <a className="main-page" href="#">
        <img className="logo" src="https://announcekit.app/blog/wp-content/uploads/2021/10/Sociality_Logo_MainV_positive.png"/></a>
      </div>
      
      
    </div>
   
    <SideBar/>
      
      <div className="content">
      <img className='profilePic' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
         
      <div className="statusSection">
      <div className='status'> <span className="dot status-publish">&#x2022;</span><span>Published</span> </div>
      <div className='status' > <span className="dot status-schedule">&#x2022;</span> Scheduled</div>
      <div className='status'><span className="dot status-approve">&#x2022;</span>  Need Approval</div>
      <div className='status'><span  className="dot status-error">&#x2022; </span> Error</div>
      <div className='status'><span className="dot status-notes">&#x2022;</span>  Notes</div>
    </div> 


     {postwithDate.map((element,idx)=>{
      let date=Object.keys(postData)[idx].split('-')
      let day=date[2];
      let year=date[0];
      let monthTemp= date[1].includes('0')?date[1].split('0'):date[1];
      let month=months[parseInt(monthTemp[1])]
      let dateToSend=`${day} ${month} ${year}`

      return<div  className='contentWithDate'>
        <div className='datePosts'>{dateToSend}</div> 
           <div className="items">
         { 
            postwithDate[idx].map((insideElement)=>{
            return <Media data={insideElement} date={dateToSend}
          />
           })}
    </div>
    </div>

    })}
   
      </div>
     
    </div>
  );
}

export default App;
