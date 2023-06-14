import React from 'react';
import styled from 'styled-components';
import MainVideo from'../assets/mains.mp4';


const VideoContainer = styled.section`
width:100%;
height: 100vh;
position: relative;
`




const CoverVideo = () => {
  return (
    <VideoContainer>

        <video src = {MainVideo} type="video/mp4" autoPlay={true} muted loop playsinline     />
    </VideoContainer>
  )
}

export default CoverVideo