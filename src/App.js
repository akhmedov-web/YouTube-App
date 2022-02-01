import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './Style.css';
import {useState} from 'react';
import URL from './api/URL';
import {FcMenu} from 'react-icons/fc'; 
import MainContainer from './components/MainContainer';
import VideoList from './components/VideoList';


function App() {
  const [showToogle,setShowToogle] =useState(false);
  const handleShow =()=>{setShowToogle((m)=>!m)}
  // console.log(showToogle)
  // requests
  const[videos,setVideos]=useState([]);
  const[selectVideo,setSelectVideo]=useState({id:{}, snippet:{}});

 async function videoSubmit (searchTerm){
    const{data:{items:videos}}=await URL.get('search',{

      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyB9DeRet2mjIvQAyByi4VtLC1YBR-Mr_Bg',
        q: searchTerm,
      }
    });
    console.log(videos)
    setVideos(videos);
    setSelectVideo(videos[0]);

  }

  return (
    <>
    <Navbar onSubmit={videoSubmit}>
      <FcMenu onClick={handleShow} className='toogle-sidebar'/>
    </Navbar>
   <div className="main">
   <Sidebar showToogle={showToogle}/>
   <MainContainer videos={selectVideo}/>

   <div className="video-lists">
   {videos.map(videoItem => <VideoList item={videoItem} key={videoItem.etag}/>)}
   </div>

   </div>
    </>
  );
}

export default App;