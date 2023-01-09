import React from "react";
import styled from "styled-components";

//
import { like, disLike, share, dotMenu } from "../../../assets/icon";

export default function Statistics() {
   return (
      <StyledStatistics>
         <div className="left">
            <div>
               <div className="live__card">Live</div>
               <h1>Clash Royale Stream</h1>
            </div>
            <p>63K Live viewers</p>
         </div>
         <div className="right">
            <div className="icon__text">
               <div className="icon__wrapper">{like()}</div>
               <p>695</p>
            </div>
            <div className="icon__text">
               <div className="icon__wrapper">{disLike()}</div>
               <p>695</p>
            </div>
            <div className="icon__text share">
               <div className="icon__wrapper">{share()}</div>
               <p>Share</p>
            </div>
            <div className="dot__menu">{dotMenu()}</div>
         </div>
      </StyledStatistics>
   );
}

const StyledStatistics = styled.div`
  padding: 20px 0;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;

  & > .left {
     
    & > div {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;

      & > .live__card {
        background: #018549;
        border-radius: 8px;
        padding: 4px 10px 4px 20px;
        font-size: 17px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #fff;
      }

      & > h1 {
        font-size: 26px;
        font-weight: 500;
        line-height: 31px;
        letter-spacing: 0.05em;
        color: #000000;
      }
    }

    & > p {
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #C6C6C6;
    }
  }

  & > .right {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    & > .share{
      background: #018549;
      color: white;
   }
    & > div {
      background: rgba(255, 255, 255, 0.17);
      border: 1px solid #018549;
      border-radius: 20px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: #018549;
      
      & > p {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.05em;
      }
      
      & > .icon__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
          width: 24px;
          height: 24px;
        }
      }
     
    }
  }

  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 992px) {
    flex-direction: row;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
