import React, { useState, useEffect } from 'react';
//import { API, API_ROUTER } from "../../../api";
//import { FormattedMessage, injectIntl } from "react-intl";
//import { defaultCountrie } from "../../../total/const";
//import { useLocation } from 'react-router-dom';
import { showResult } from '../../comon/showResult';

import s from './auth.module.css';
//import SuccessfulMessage from '../successful-message';

const Auth = (props) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [countrie, setCountrie] = useState('UZ');
   const [pass, setPass] = useState('');
   const [statusMessage, setStatusMessage] = useState(false);
   const [textMessage, setTextMessage] = useState();
   const [checkbox1Status, setCheckbox1Status] = useState(false);
   const [checkbox2Status, setCheckbox2Status] = useState(false);

   const [emailDirty, setEmailDirty] = useState(false);
   const [nameDirty, setNameDirty] = useState(false);
   const [passDirty, setPassDirty] = useState(false);

   //error
   const [err, setErr] = useState(false);
   const [emailErr, setEmailErr] = useState(`<FormattedMessage id="authModal.err.title" tagName="label" />`);
   const [nameErr, setNameErr] = useState(`<FormattedMessage id="authModal.err.title" tagName="label" />`);
   const [passErr, setPassErr] = useState(`<FormattedMessage id="authModal.err.title" tagName="label" />`);
   const [checkboxErr, setCheckboxErr] = useState(`<FormattedMessage id="authModal.err.title" tagName="label" />`);

   const [countries, setCountries] = useState([]);
   const [formValidation, setFormValidation] = useState(false);

   useEffect(() => {
      fetch(`https://newapi.passport.gg/public/labels/countries`)
         .then(response => response.json())
         .then(res => setCountries(res))
         .catch(err => console.log(err))
      if (emailErr || nameErr || passErr) {
         setFormValidation(false);
      } else {
         setFormValidation(true);
      }
   }, [emailErr, nameErr, passErr])

   const blurHandler = (e) => {
      switch (e.target.name) {
         case 'email':
            setEmailDirty(true);
            break;

         case 'name':
            setNameDirty(true);
            break;

         case 'pass':
            setPassDirty(true);
            break;

         default:
            break;
      }
   }

   const emailHandler = (value) => {
      setEmail(value);
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(value).toLowerCase())) {
         setEmailErr(`<FormattedMessage id="authModal.err.email" tagName="label" />`);
      } else {
         setEmailErr('');
         setEmailDirty(false);
      }
   }

   const nameHandler = (value) => {
      setName(value);
      if (value.length < 1) {
         setNameErr(`<FormattedMessage id="authModal.err.title" tagName="label" />`);
      } else {
         setNameErr('');
      }
   }

   const passHandler = (value) => {
      setPass(value);
      if (value.length < 5) {
         setPassErr(`<FormattedMessage id="authModal.err.pass" tagName="label" />`);
         return false;
      } else {
         setPassErr('');
         return true;
      }
   }
   const onSubmit = () => {
      if (email && countrie && name && pass && checkbox1Status) {

         let data = {
            referral: "",
            username: email,
            country: countrie,
            firstName: name,
            password: pass,
            psnId: "584d56434p5f",
            gdpr: true,
            marketing: true,
            sourceUrl: window.location.href,
         }

         fetch('https://newapi.passport.gg/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
         })
            .then(response => response.json())
            .then(result => {
               console.log(result);
               setStatusMessage(true);
               setTextMessage(`<SuccessfulMessage />`);
            })
            .catch(err => {
               let info = JSON.stringify(err.data.errors)
                  .replace(/{"/, '')
                  .replace(/"}/, '')
                  .replace(/"/, '')
                  .replace(/"/, ' ')
                  .replace(/","/, ' ')
                  .replace(/":"/, ': ');
               setStatusMessage(true);
               setTextMessage(`${err.data.message} ${info}`);
               setTimeout(() => {
                  setStatusMessage(false);
               }, 3000)
            })

      } else setErr(true);
   }
   const showCountries = (value) => {

      let optionArray = [];
      for (let key in value) {
         optionArray.push(<option /* selected={value[key] == defaultCountrie} */ value={key}>{value[key]}</option>)
      }
      return optionArray;
   }

   const onChangeValue = (value, fn) => {
      fn(value.target.value);
      setErr(false);
   }
   const onChangeCheckboxValue = (fn, value) => {
      fn(value);
      setErr(false);
   }

   const [title, setTitle] = useState('');
   const [nameTitle, setNameTitle] = useState('');
   const [mailTitle, setMailTitle] = useState('');
   const [countryTitle, setCountryTitle] = useState('');
   const [passTitle, setPassTitle] = useState('');
   const [consentTitle, setConsentTitle] = useState('');
   const [termsUseTitle, setTermsUseTitle] = useState('');
   const [privacyPolicyTitle, setPrivacyPolicy] = useState('');
   const [cookiePolicyTitle, setCookiePolicyTitle] = useState('');
   const [rulebookTitle, setRulebookTitle] = useState('');
   const [marketingTitle, setMarketingTitle] = useState('');
   const [registerBtnTitle, setRegisterBtnTitle] = useState('');

   setTimeout(() => {
      showResult(props?.textBlockRegistration1, props.lng, setTitle);
      showResult(props?.textBlockRegistration3, props.lng, setNameTitle);
      showResult(props?.textBlockRegistration4, props.lng, setMailTitle);
      showResult(props?.textBlockRegistration5, props.lng, setCountryTitle);
      showResult(props?.textBlockRegistration6, props.lng, setPassTitle);
      showResult(props?.textBlockRegistration7, props.lng, setConsentTitle);
      showResult(props?.textBlockRegistration8, props.lng, setTermsUseTitle);
      showResult(props?.textBlockRegistration9, props.lng, setPrivacyPolicy);
      showResult(props?.textBlockRegistration10, props.lng, setCookiePolicyTitle);
      showResult(props?.textBlockRegistration11, props.lng, setRulebookTitle);
      showResult(props?.textBlockRegistration12, props.lng, setMarketingTitle);
      showResult(props?.textBlockRegistration13, props.lng, setRegisterBtnTitle);
   }, 500)

   return (
      <div>
         {statusMessage ? <div className={s.message}>{textMessage}</div> :
            <div>

               <div className={s.title}>
                  <span>{title || 'Loading...'}</span>
               </div>
               <div className={s.subtitle}>
                  {/* <FormattedMessage id="authModal.signUp.subtitle" tagName="label" /> */}
               </div>

               <div className={s.inputContainer}>
                  <span>{nameTitle || 'Loading...'}</span>
                  <span className={(nameDirty && nameErr) ? `${s.err}` : false} ><input
                     style={{ background: props.color || "green" }}
                     onBlur={e => blurHandler(e)}
                     name="name"
                     type="name"
                     value={name}
                     onChange={(e) => nameHandler(e.target.value)}
                  /></span>
                  {(nameDirty && nameErr) && <span style={{ color: 'red' }}>
                     {nameErr}
                  </span>}
               </div>

               <div className={s.inputContainer}>
                  {mailTitle || 'Loading...'}
                  <span className={(emailDirty && emailErr) ? `${s.err}` : false} ><input
                     style={{ background: props.color || "green" }}
                     onBlur={e => blurHandler(e)}
                     name="email"
                     type="text"
                     value={email}
                     onChange={(e) => emailHandler(e.target.value)}
                  /></span>
                  {(emailDirty && emailErr) && <span style={{ color: 'red' }}>
                     {emailErr}
                  </span>}
               </div>

               <div className={s.inputContainer}>
                  <span>{countryTitle || 'Loading...'}</span>

                  <select style={{ background: props.color || 'green' }} onChange={(e) => onChangeValue(e, setCountrie)}>
                     {showCountries(countries)}
                  </select>

                  {/* <div className={s.text}>
                     <FormattedMessage id="global.forms.labels.countryName" tagName="label" />
                  </div> */}
               </div>

               {/* <div className={s.inputContainer}>
                  <FormattedMessage id="global.forms.labels.password" tagName="label" />
                  <span className={err ? `${s.err}` : false} ><input
                  style={{ background: props.color || "green"}} type="password" value={pass} onChange={(e) => onChangeValue(e, setPass)} /></span>
               </div> */}

               <div className={s.inputContainer}>
                  <span>{passTitle || 'Loading...'}</span>
                  <span className={(passDirty && passErr) ? `${s.err}` : false} ><input
                     style={{ background: props.color || "green" }}
                     onBlur={e => blurHandler(e)}
                     name="pass"
                     type="password"
                     value={pass}
                     onChange={(e) => passHandler(e.target.value)}
                  /></span>
                  {(passDirty && passErr) && <span style={{ color: 'red' }}>
                     {passErr}
                  </span>}
               </div>

               <div className={s.chexBoxContainer}>
                  <input
                     style={{ background: props.color || "green" }}
                     className={s.checkbox}
                     type="checkbox" checked={checkbox1Status}
                     onClick={() => onChangeCheckboxValue(setCheckbox1Status, !checkbox1Status)}
                  />
                  <span className={s.textContainer}
                     onClick={() => onChangeCheckboxValue(setCheckbox1Status, !checkbox1Status)}
                  >
                     <span>{consentTitle + " " || 'Loading...'}</span>
                     {/* <FormattedMessage
                        id="authModal.signUp.check1.full"
                        tagName="label"
                     /> */}
                  </span>
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/terms-of-use'>
                     <span>{termsUseTitle + " " || 'Loading...'}</span>
                  </a>{', '}
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/privacy-policy'>
                     <span>{privacyPolicyTitle || 'Loading...'}</span>
                  </a>{', '}
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/cookie-policy'>
                     <span>{cookiePolicyTitle + " " || 'Loading...'}</span>
                  </a>{', '}
                  {/* <FormattedMessage
                     id="authModal.signUp.check1.and"
                     tagName="label"
                  /> */}
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/rulebook-asia'>
                     <span>{rulebookTitle || 'Loading...'}</span>
                  </a>.
               </div>
               {err ? <div className={s.errText}>
                  {/* <FormattedMessage
                     id="authModal.err.title"
                     tagName="label"
                  /> */}
               </div> : false}

               <div className={s.chexBoxContainer}>
                  <input
                     style={{ background: props.color || "green" }}
                     className={s.checkbox}
                     type="checkbox" checked={checkbox2Status}
                     onClick={() => onChangeCheckboxValue(setCheckbox2Status, !checkbox2Status)}
                  />
                  <span className={s.textContainer}
                     onClick={() => onChangeCheckboxValue(setCheckbox2Status, !checkbox2Status)}
                  >
                     <span>{marketingTitle || 'Loading...'}</span>
                  </span>
               </div>
               {/* {err ? <div className={s.errText}>
                  <FormattedMessage
                     id="authModal.err.title"
                     tagName="label"
                  />
               </div> : false} */}

               <div className={s.btnContainer}>
                  <button
                     className={formValidation ? `${s.btnRegister}` : `${s.disabledBTN}`}
                     onClick={() => onSubmit()}
                     disabled={!formValidation}
                  ><span>{registerBtnTitle || 'Loading...'}</span></button>
               </div>
            </div>
         }

      </div >
   )
}
export default Auth;