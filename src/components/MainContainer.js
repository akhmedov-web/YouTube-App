import React from 'react'
import Video from './Video'

export default function MainContainer({videos}) {
    console.log(videos)
    return (
        <div className='main-container'>
            <Video videos={videos}/>
        </div>
    )
}
