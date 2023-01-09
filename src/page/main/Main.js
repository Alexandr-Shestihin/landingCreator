import React from "react";
import styled from "styled-components";
//
import Top from "./section/Top/Top";
import Footer from "./section/Footer";
import AdTop from "../../components/ad-top";
import { useWindowDimensions } from "../../hooks/useWindowDimesions";

export default function Main(props) {
   const { width } = useWindowDimensions();

   return (
      <StyledMain>
         <main>
            <div className="selectContainer">
               <select style={{ background: props.color || 'green' }} name="language" onChange={(e) => props.setLanguage(e.target.value)}>
                  {props.selectLanguages.map(el => <option selected={localStorage.getItem('language') == el} value={el}>{el}</option>)}
               </select>
            </div>
            <div className="container">
               <div className="wrapper">
                  <Top
                     textBlockContent1={props.textBlockContent1}
                     textBlockContent2={props.textBlockContent2}

                     textBlockAbout1={props.textBlockAbout1}
                     textBlockAbout2={props.textBlockAbout2}
                     textBlockAbout3={props.textBlockAbout3}

                     landingBanner={props.landingBanner}
                     landingFlag={props.landingFlag}
                     landingGameLogo={props.landingGameLogo}
                     landingLogo={props.landingLogo}
                     organizeLogo={props.organizeLogo}
                     sponsorLogo={props.sponsorLogo}
                     partnersLogo={props.partnersLogo}

                     textBlockButtons1={props.textBlockButtons1}
                     textBlockButtons2={props.textBlockButtons2}
                     textBlockButtons3={props.textBlockButtons3}
                     textBlockButtons4={props.textBlockButtons4}

                     textBlockOrganizer1={props.textBlockOrganizer1}
                     textBlockOrganizer2={props.textBlockOrganizer2}
                     textBlockOrganizer3={props.textBlockOrganizer3}

                     color={props.color}
                     embedStream={props.embedStream}

                     lng={props.lng}

                     popUp={props.popUp}
                     setPopUp={props.setPopUp}
                  />
                  {width < 992 && <AdTop />}
               </div>
            </div>
         </main>
         <Footer color={props.color} />
      </StyledMain>
   );
}

const StyledMain = styled.div`
  & > main {
    /* background-color: #7b61ff; */

    & > div > div.wrapper {
      /* background-color: #5b4d9e; */
      min-height: 100vh;
      padding: 0 24px 72px;
    }
  }
  .selectContainer{
   margin-top: 10px;
   width: 100%;
   display: flex;
   justify-content: flex-end;
   select{
      margin-right: 20px;
   }
  }

  @media (max-width: 992px) {
    & > main {
      & > div > div.wrapper {
        padding: 0 18px 40px;
      }
    }
  }
  @media (max-width: 768px) {
    & > main {
      & > div > div.wrapper {
        padding: 0 12px 40px;
      }
    }
  }
`;
