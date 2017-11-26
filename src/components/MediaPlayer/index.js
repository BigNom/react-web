import React from 'react'
//import homeScreen from '../../assets/homescreen.mp4'

class MediaPlayer extends React.Component {
  render() {
    return(
      <div className="embed-responsive embed-responsive-16by9 video-styles">
      <iframe className="embeded-responsive-item" src={homeScreen}></iframe>
      </div>
    )
  }

}

export default MediaPlayer
