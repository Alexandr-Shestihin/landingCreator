import React from "react";
import styled from "styled-components";

//
import {
   facebook,
   youtube,
   linkedin,
   twitter,
   instagramm,
} from "../../../assets/icon";

export default function Footer(props) {
   return (
      <>
         <StyledFooter>
            <div style={{ background: props.color || '#018549' }} className="container">
               <div className="footer__wrapper">
                  {/* <section>
                     <div className="logo__block">
                        <div>LOGO</div>
                        <p>text</p>
                     </div>
                     <div className="nav__list">
                        <h1>TEXT</h1>
                        <ul>
                           <li>text</li>
                           <li>text</li>
                           <li>text</li>
                        </ul>
                     </div>
                     <div className="nav__list">
                        <h1>TEXT</h1>
                        <ul>
                           <li>text</li>
                           <li>text</li>
                           <li>text</li>
                        </ul>
                     </div>
                     <div className="contact__block">
                        <h1>CONTACT</h1>
                        <ul>
                           <li>{facebook()}</li>
                           <li>{youtube()}</li>
                           <li>{linkedin()}</li>
                           <li>{twitter()}</li>
                           <li>{instagramm()}</li>
                        </ul>
                     </div>
                  </section> */}
                  <section>
                     <p className="company__info">© 2022 Powered by <a href="https://passport.gg/">Passport.GG</a></p>
                  </section>
                  <div className="infoBlock">
                     <div className="leftLinks">
                        <a target="_blank" href="https://app.passport.gg/terms-of-use">Terms Of Use</a>
                        <a target="_blank" href="https://app.passport.gg/privacy-policy">Privacy Policy</a>
                        <a target="_blank" href="https://app.passport.gg/cookie-policy">Cookie Policy</a>
                        <a target="_blank" href="https://app.passport.gg/rulebook-asia">Rulebook</a>
                     </div>
                     <div className="right">
                        <a href="mailto:support@passport.gg">Support</a>
                     </div>
                  </div>
               </div>
            </div>
         </StyledFooter>
      </>
   );
}

const StyledFooter = styled.footer`

  .footer__wrapper {
    padding: 32px 140px 16px;
    color: white;
    
    & > section {
      text-align: center;
      & > .company__info {
         & > a {
            color: white;
          }
       }
      /* 
      &:first-of-type {
        margin-bottom: 85px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 45px;

        & > .logo__block {
          & > div {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #c4c4c4;
            font-size: 17px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.05em;
            margin-bottom: 20px;
          }

          & > p {
            font-size: 17px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.05em;
          }
          
        }

        & > .nav__list {
          & > h1 {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0.1em;
            margin-bottom: 24px;
          }

          & > ul {
            list-style: none;
            padding: 0;
            margin: 0;

            & > li {
              padding: 8px 0;
              font-size: 17px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: 0.05em;
            }
          }
        }

        & > .contact__block {
          & > h1 {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0.1em;
            margin-bottom: 24px;
          }

          & > ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 28px;
          }
        }
      }
      & > .company__info {
         & > a {
            color: white;
          }
       }
      &:last-of-type {
        text-align: center;
      }
    } */
  }
  .infoBlock{
   display: flex;
   justify-content: space-between;
  }
  .leftLinks{
   display: flex;
   flex-direction: column;
   a{
      text-decoration: none;
      color: white;
   }
  }
  .right{
   display: flex;
   flex-direction: column;
   a{
      text-decoration: none;
      color: white;
   }
  }

  @media (max-width: 1200px) {
    .footer__wrapper {
      padding: 32px 24px 16px;
    }
  }
  @media (max-width: 992px) {
    .footer__wrapper {
      padding: 32px 18px 16px;
    }
  }
`;
