 import React from 'react'
 import videoImg from '../images/user.jpg'
import {BiDotsVerticalRounded} from 'react-icons/bi'

 export default function VideoList({item}) {
     return (
         <div className='video-list'>
             <img src={item.snippet.thumbnails.high.url} alt="cover" />
             <dir className='video-right'>
             <h5>{item.snippet.title}</h5>
            
             <p>{item.snippet.dscription}</p> 
             <p>{item.snippet.channelTitle}</p>
             </dir>
            <span>
                <BiDotsVerticalRounded/>
            </span>
         </div>
     )
 }
  