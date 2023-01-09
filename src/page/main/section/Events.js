import React from "react";
import styled from "styled-components";

//
import AdTop from "../../../components/ad-top";
import Baku2022EC from "../../../assets/img/Baku2022EC.png";
import Tekken from "../../../assets/img/Tekken-7.png";
import Rocket_League from "../../../assets/img/Rocket_League.png";
import { useWindowDimensions } from "../../../hooks/useWindowDimesions";

import { showResult } from '../../../comon/showResult';
import { useState } from "react";

export default function Events(props) {
   const { width } = useWindowDimensions();
   const [title, setTitle] = useState('');
   const [text, setText] = useState('');
   const [mainText, setMainText] = useState('');

   const [landingLogo, setLanding] = useState('');
   const [landingGameLogo, setLandingGameLogo] = useState('');

   setTimeout(() => {
      showResult(props?.textBlockAbout1, props.lng, setTitle);
      showResult(props?.textBlockAbout2, props.lng, setText);
      showResult(props?.textBlockAbout3, props.lng, setMainText);
      setLanding(props.landingLogo);
      setLandingGameLogo(props.landingGameLogo);
   }, 500)

   return (
      <>
         <StyledEvents>
            <div style={{ background: props.color || "#018549" }} className="top">
               <section className="left">
                  {landingLogo ? <img src={landingLogo} alt="Logo Landing" className="logo" /> : false}
               </section>
               <section className="right">
                  <div className="top">
                     <h1>{title || 'Loading...'}</h1>
                     {/* <div className="lang__wrapper">ENG</div> */}
                  </div>
                  <p>{text || 'Loading...'}</p>

                  <div className="main">
                     <p>
                        {mainText || 'Loading...'}
                     </p>
                  </div>
               </section>

               <div className="footer">
                  <div className="game__card">
                     <img src={landingGameLogo} alt="Tekken" />
                  </div>
                  {/* <div className="game__card">
                     <img src={Rocket_League} alt="Rocket_League" />
                  </div> */}
               </div>

            </div>
            <a
               onClick={() => props.setPopUp(!props.popUp)}
               style={{ background: props.color || "#018549" }}
               className='btn'
            >{props.register || 'Loading...'}</a>
         </StyledEvents>
         {/* {width < 992 && <AdTop />} */}
      </>
   );
}

const StyledEvents = styled.div`
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 50px;
  color: white; 
  & > .top {
   border-radius: 18px;
    display: flex;
    justify-content: space-around;
    padding: 60px;
    background: #018549;
    & > .left {
       width: 160px;
       height: 160px;
       object-fit: contain;
      & > .logo{
         width: 100%;
         height: 100%

     }
    }

    & > .right {
      width: 644px; 
      margin-left: 50px;
       & > p{
          margin: -20px 0 20px 0;
       }
      
      & > .top {
        display: flex;
        align-items: center;
        margin-bottom: 18px;

        & > h1 {
          font-size: 24px;
          font-weight: 600;
          line-height: 28px;
          letter-spacing: 0.05em;
        }

        & > .lang__wrapper {
           margin-left: 10px;
           background: #017842;
          border-radius: 12px;
          padding: 8px 12px;
          font-size: 17px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
        }
      }

      & > .main {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        
        & > p {
          &:first-of-type {
            margin-bottom: 10px;
          }
        }
      }
      
    }
    & > .footer {
  
      & > .game__card {
        //border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 150px;
        margin-bottom: 15px;
        //background: #017842;
  
        & > img {
           width: 100%;
           height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .btn{
   margin: 10px auto;
   display: flex;
   align-items: center;
   text-align: center;
   height: 50px;
   width: 115px;
   color: white;
   border-radius: 12px;
   padding: 5px 10px;
   cursor: pointer;
   text-decoration: none;
}

  @media (max-width: 768px) {
    padding: 30px;
    margin-bottom: 25px;

    & > .top {
      grid-template-columns: 1fr;
      gap: 30px;

      & > .right {
        & > .top {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
      }

      & > .left {
        display: flex;
        justify-content: center;
      }
    }

    & > .footer {
      gap: 30px;
    }
  }

  @media (max-width: 450px) {
    padding: 20px;

    & > .footer {
      gap: 20px;
    }
  }
`;
