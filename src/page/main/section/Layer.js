import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

const Hello = (props) => {
   const [targetID, setTargetID] = useState('twitch-embed');
   const [width, setWidth] = useState('100%');
   const [height, setHeight] = useState('480');
   const [channel, setChannel] = useState('');//monstercat
   const [parent, setParent] = useState(["embed.example.com", "othersite.example.com"]);

   useEffect(() => {
      let embed;
      const script = document.createElement('script');
      script.setAttribute(
         'src',
         EMBED_URL
      );
      script.addEventListener('load', () => {
         embed = new window.Twitch.Embed(targetID, { width, height, channel, parent });
      });
      document.body.appendChild(script);
   }, []);

   setTimeout(() => {
      setChannel(props.embedStream);
   }, 1000);

   return (
      <div>
         <div id={targetID}></div>
      </div>
   )
}

export default function Layer(props) {

   return (
      <StyledLayer>
         <div className="img__wrapper">
            <Hello
               embedStream={(props.embedStream.replace("https://www.twitch.tv/", "")).split('?')[0]}
            />
         </div>
      </StyledLayer>
   );
}

const StyledLayer = styled.div`

& > .twitch-embed {
   width: 100%;
 }

  @media (max-width: 500px) {
    & > .img__wrapper {
      border-radius: 32px;
      overflow: hidden;
      width: calc(100vw - 42px);

      & > img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;
