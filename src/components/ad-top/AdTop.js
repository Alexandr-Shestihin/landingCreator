import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import banner from "../../assets/img/Banner_1-2.jpg";
import flag from "../../assets/img/flag.jpg";
import s from './adTop.module.css';
import { showResult } from '../../comon/showResult';

export default function AdTop(props) {
   const [text1, setText1] = useState('');
   const [text2, setText2] = useState('');

   setTimeout(() => {
      showResult(props?.textBlockContent1, props.lng, setText1);
      showResult(props?.textBlockContent2, props.lng, setText2);
   }, 500)

   return (
      <StyledAdTop>
         <div className={s.imgContainer}>
            <div className={s.flagContainer}>
               {props.landingLogo ? <img className={s.flag} src={props.landingLogo} alt="" /> : false}
               {props.landingFlag ? <img className={s.flag} src={props.landingFlag} alt="" /> : false}
            </div>

            <div className={s.text}>{text1 || 'Loading...'}</div>
            <div className={`${s.text} ${s.text2}`}>{text2 || 'Loading...'}</div>

            <img className={s.img} src={props.landingBanner || banner} alt="" />
         </div>
      </StyledAdTop>
   );
}

const StyledAdTop = styled.div`
  padding: 40px 0;
  & > div {
    width: 1390px;
    height: 347px;
    overflow: hidden;
    color: black;
    & > img{
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 992px) {
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;

    & > div {

    }
  }

  @media (max-width: 475px) {
    & > div {

    }
  }
`;
