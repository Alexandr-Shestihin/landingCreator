import React from "react";
import styled from "styled-components";

//
import Layer from "../Layer";
import Events from "../Events";
import Statistics from "../Statistics";
import Registration from "../Registration";
import AdTop from "../../../../components/ad-top";
import AdSide from "../../../../components/ad-side";
import Sponsors from "../../../../components/sponsors";
import Organizers from "../../../../components/organizers";
import Partners from "../../../../components/partners";
import { useWindowDimensions } from "../../../../hooks/useWindowDimesions";

import s from "./top.module.css";

import { showResult } from '../../../../comon/showResult';
import { useState } from "react";

export default function Top(props) {
   const { width } = useWindowDimensions();

   const [register, setRegister] = useState('');
   const [prizePool, setPrizePool] = useState('');
   const [rulesBtn, setRulesBtn] = useState('');
   const [schedule, setSchedule] = useState('');
   const [organizersTitle, setOrganizersTitle] = useState('');
   const [textAboutOrganizer, setTextAboutOrganizer] = useState('');
   const [textAboutOrganizerBold, setTextAboutOrganizerBold] = useState('');

   const [color, setColor] = useState('');

   setTimeout(() => {
      showResult(props?.textBlockButtons1, props.lng, setRegister);
      showResult(props?.textBlockButtons2, props.lng, setPrizePool);
      showResult(props?.textBlockButtons3, props.lng, setRulesBtn);
      showResult(props?.textBlockButtons4, props.lng, setSchedule);
      showResult(props?.textBlockOrganizer1, props.lng, setOrganizersTitle);
      showResult(props?.textBlockOrganizer2, props.lng, setTextAboutOrganizer);
      showResult(props?.textBlockOrganizer3, props.lng, setTextAboutOrganizerBold);
      setColor(props.color);
   }, 500)

   return (
      <StyledTop>
         <AdTop
            textBlockContent1={props.textBlockContent1}
            textBlockContent2={props.textBlockContent2}
            landingBanner={props.landingBanner}
            landingFlag={props.landingFlag}
            landingLogo={props.landingLogo}
            lng={props.lng}
         />

         <div className={s.btnContainer}>
            <a
               onClick={() => props.setPopUp(!props.popUp)}
               style={{ background: color || "#018549", height: "80px" }}
               className='btn'
            >{register || 'Loading...'}</a>

            <a
               style={{ background: color || "#018549" }}
               className='btn'
               href="https://asia.passport.gg/prize_pool_AOCH2022"
            >{prizePool || 'Loading...'}</a>

            <a
               style={{ background: color || "#018549" }}
               className='btn'
               href="https://asia.passport.gg/rules_AOCH2022"
            >{rulesBtn || 'Loading...'}</a>

            <a
               style={{ background: color || "#018549" }}
               className='btn'
               href="https://asia.passport.gg/schedule_AOCH2022"
            >{schedule || 'Loading...'}</a>
         </div>

         <section className="live__stream">
            {/* {width > 992 && <AdSide />} */}
            <div className="main">
               {props.embedStream ? <Layer
                  embedStream={props.embedStream}
               /> : false}
               {/* <Statistics /> */}
               <Events
                  textBlockAbout1={props.textBlockAbout1}
                  textBlockAbout2={props.textBlockAbout2}
                  textBlockAbout3={props.textBlockAbout3}
                  register={register}

                  landingGameLogo={props.landingGameLogo}
                  landingLogo={props.landingLogo}

                  lng={props.lng}
                  color={color}

                  popUp={props.popUp}
                  setPopUp={props.setPopUp}
               />
            </div>
            {/* {width > 992 && <AdSide />} */}
         </section>


         <div className="aboutOrganizer">
            <div className="title">{organizersTitle || 'Loading...'}</div>
            <div className="text">{textAboutOrganizer || 'Loading...'}</div>
            <div className="textBold">{textAboutOrganizerBold || 'Loading...'}</div>
         </div>

         <Organizers color={color} organizeLogo={props.organizeLogo} />
         <Sponsors color={color} sponsorLogo={props.sponsorLogo} />
         <Partners color={color} partnersLogo={props.partnersLogo} />
         <a
            onClick={() => props.setPopUp(!props.popUp)}
            style={{ background: color || "#018549", width: "115px", margin: "0 auto" }}
            className='btn'
         >{register || 'Loading...'}</a>
         {/* <Registration /> */}
      </StyledTop>
   );
}

const StyledTop = styled.div`
  & > section {
    &.live__stream {
      margin-top: 30px;
    }
  }
  .btn{
   display: flex;
   align-items: center;
   height: 50px;
   color: white;
   border-radius: 12px;
   padding: 5px 10px;
   cursor: pointer;
   text-decoration: none;
}

.button__registration{
   display: block;
   text-align: center;
   line-height: 46px;
   text-decoration: none;
   margin: 0 auto;
   display: block;
   width: 155px;
   height: 46px;
   background: #018549;
   border-radius: 8px;
   color: #fff;
   border: none;
   cursor: pointer;
   font-size: 20px;
}
.aboutOrganizer{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
.title{
   font-size: 30px;
   font-weight: bold;
}
.text{
   margin-top: 10px;
}
.textBold{
   margin-top: 10px;
   font-weight: bold;
}
  @media (max-width: 992px) {
    & > section {
      &.live__stream {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
  }
`;
