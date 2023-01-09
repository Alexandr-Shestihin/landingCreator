import GlobalStyles from "./assets/style/global";
import Auth from "./components/real-aurh-component";
import Main from "./page/main/Main";
import React, { useState, useEffect } from "react";

import s from './app.module.css'

function App() {
   const [popUp, setPopUp] = useState(false);

   const [language, setLanguage] = useState(localStorage.getItem('language') || "EN");
   const [selectLanguages, setSelectLanguages] = useState([]);

   //текстовые данные с бэка
   const [textBlockContent1, setTextBlockContent1] = useState([]);
   const [textBlockContent2, setTextBlockContent2] = useState([]);
   const [textBlockAbout1, setTextBlockAbout1] = useState([]);
   const [textBlockAbout2, setTextBlockAbout2] = useState([]);
   const [textBlockAbout3, setTextBlockAbout3] = useState([]);
   const [textBlockButtons1, setTextBlockButtons1] = useState([]);//Register
   const [textBlockButtons2, setTextBlockButtons2] = useState([]);//Prize Pool
   const [textBlockButtons3, setTextBlockButtons3] = useState([]);//Rules
   const [textBlockButtons4, setTextBlockButtons4] = useState([]);//Schedule
   const [textBlockOrganizer1, setTextBlockOrganizer1] = useState([]);
   const [textBlockOrganizer2, setTextBlockOrganizer2] = useState([]);
   const [textBlockOrganizer3, setTextBlockOrganizer3] = useState([]);

   const [textBlockRegistration1, setTextBlockRegistration1] = useState([]);
   const [textBlockRegistration3, setTextBlockRegistration3] = useState([]);
   const [textBlockRegistration4, setTextBlockRegistration4] = useState([]);
   const [textBlockRegistration5, setTextBlockRegistration5] = useState([]);
   const [textBlockRegistration6, setTextBlockRegistration6] = useState([]);
   const [textBlockRegistration7, setTextBlockRegistration7] = useState([]);
   const [textBlockRegistration8, setTextBlockRegistration8] = useState([]);
   const [textBlockRegistration9, setTextBlockRegistration9] = useState([]);
   const [textBlockRegistration10, setTextBlockRegistration10] = useState([]);
   const [textBlockRegistration11, setTextBlockRegistration11] = useState([]);
   const [textBlockRegistration12, setTextBlockRegistration12] = useState([]);
   const [textBlockRegistration13, setTextBlockRegistration13] = useState([]);

   //media
   const [landingBanner, setLandingBanner] = useState('');
   const [landingFlag, setLandingFlag] = useState('');
   const [landingGameLogo, setLandingGameLogo] = useState('');
   const [landingLogo, setLandingLogo] = useState('');
   const [organizeLogo, setOrganizeLogo] = useState([]);
   const [sponsorLogo, setSponsorLogo] = useState([]);
   const [partnersLogo, setPartnerLogo] = useState([]);

   //color
   const [color, setColor] = useState('')

   const [embedStream, setEmbedStream] = useState('')

   localStorage.setItem('language', language);

   const colorChange = (value, fn) => {
      value ? fn("rgb(" + value) : fn(value)
   }

   const showDomain = () => {
      if (window.location.href == 'http://localhost:3000/') {
         return "landingtest";
      } else {
         let res = window.location.href;
         return res.replace('https://passport.gg/', '');
      }
   }

   const checkLanguage = () => {
      let result = selectLanguages.filter(el => el.toUpperCase() == localStorage.getItem('language'));
      console.log(result)
      result.length > 0 && setLanguage("EN");
   }

   const getLandingData = () => {
      //fetch('https://newapi.passport.gg/public/v1/landing/01GCFHQVVA4AHJ04P8ZYV1B8WT')
      const domain = showDomain();

      fetch(`https://newapi.passport.gg/public/v1/landingUrl/${domain}`)
         .then(response => response.json())
         .then(result => {
            console.log(result);

            //media
            setLandingFlag(result.landingFlag);
            setLandingGameLogo(result.landingGameLogo);
            setLandingBanner(result.landingBanner);
            setLandingLogo(result.landingLogo);
            setOrganizeLogo(result.landingOrganizePartnerLogo);
            setSponsorLogo(result.landingSponsorLogo);
            setPartnerLogo(result.landingPartnerLogo);

            //text
            setSelectLanguages(result.languages);

            setTextBlockContent1(result.textBlockContent1);
            setTextBlockContent2(result.textBlockContent2);
            setTextBlockAbout1(result.textBlockAbout1);
            setTextBlockAbout2(result.textBlockAbout2);
            setTextBlockAbout3(result.textBlockAbout3);
            setTextBlockOrganizer1(result.textBlockOrganizer1);
            setTextBlockOrganizer2(result.textBlockOrganizer2);
            setTextBlockOrganizer3(result.textBlockOrganizer3);

            setTextBlockRegistration1(result.textBlockRegistration1);
            setTextBlockRegistration3(result.textBlockRegistration3);
            setTextBlockRegistration4(result.textBlockRegistration4);
            setTextBlockRegistration5(result.textBlockRegistration5);
            setTextBlockRegistration6(result.textBlockRegistration6);
            setTextBlockRegistration7(result.textBlockRegistration7);
            setTextBlockRegistration8(result.textBlockRegistration8);
            setTextBlockRegistration9(result.textBlockRegistration9);
            setTextBlockRegistration10(result.textBlockRegistration10);
            setTextBlockRegistration11(result.textBlockRegistration11);
            setTextBlockRegistration12(result.textBlockRegistration12);
            setTextBlockRegistration13(result.textBlockRegistration13);

            //color
            //colorChange('192,21,17', setColor);
            colorChange(result.mainColor, setColor);

            setEmbedStream(result.embedStream);

            setTextBlockButtons1(result.textBlockButtons1);//Register
            setTextBlockButtons2(result.textBlockButtons2);//Prize Pool
            setTextBlockButtons3(result.textBlockButtons3);//Rules
            setTextBlockButtons4(result.textBlockButtons4);//Schedule

            checkLanguage();
         });
   }

   useEffect(() => {
      getLandingData();
   }, [])

   return (
      <div className={s.mainContainer}>
         <GlobalStyles />
         <Main
            textBlockContent1={textBlockContent1}
            textBlockContent2={textBlockContent2}

            textBlockAbout1={textBlockAbout1}
            textBlockAbout2={textBlockAbout2}
            textBlockAbout3={textBlockAbout3}

            landingBanner={landingBanner}
            landingFlag={landingFlag}
            landingGameLogo={landingGameLogo}
            landingLogo={landingLogo}
            organizeLogo={organizeLogo}
            sponsorLogo={sponsorLogo}
            partnersLogo={partnersLogo}

            textBlockButtons1={textBlockButtons1}
            textBlockButtons2={textBlockButtons2}
            textBlockButtons3={textBlockButtons3}
            textBlockButtons4={textBlockButtons4}

            textBlockOrganizer1={textBlockOrganizer1}
            textBlockOrganizer2={textBlockOrganizer2}
            textBlockOrganizer3={textBlockOrganizer3}

            color={color}
            embedStream={embedStream}

            lng={language}
            setLanguage={setLanguage}
            selectLanguages={selectLanguages}

            popUp={popUp}
            setPopUp={setPopUp}
         />

         {popUp ? <div className={s.popUp}>
            <div
               style={{ background: color || 'green' }}
               className={s.container}
            >
               <div onClick={() => setPopUp(!popUp)} className={s.close}></div>
               <Auth
                  color={color}
                  lng={language}
                  textBlockRegistration1={textBlockRegistration1}
                  textBlockRegistration3={textBlockRegistration3}
                  textBlockRegistration4={textBlockRegistration4}
                  textBlockRegistration5={textBlockRegistration5}
                  textBlockRegistration6={textBlockRegistration6}
                  textBlockRegistration7={textBlockRegistration7}
                  textBlockRegistration8={textBlockRegistration8}
                  textBlockRegistration9={textBlockRegistration9}
                  textBlockRegistration10={textBlockRegistration10}
                  textBlockRegistration11={textBlockRegistration11}
                  textBlockRegistration12={textBlockRegistration12}
                  textBlockRegistration13={textBlockRegistration13}
               />
            </div>
         </div> : false}
      </div>
   );
}

export default App;
