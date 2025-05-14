import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomended from '../../Components/Recommended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {

const {videoId,categoryId} = useParams();

  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video
