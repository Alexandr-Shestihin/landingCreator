import React from "react";
import styled from "styled-components";

export default function Registration() {
   return (
      <StyledRegistration>
         <h1>Registration</h1>
         <main>
            <form noValidate autoComplete="off">
               <input type="email" placeholder="Email" />
               <div className="btn__wrapper">
                  <button type="">Register</button>
               </div>
            </form>
         </main>
      </StyledRegistration>
   );
}

const StyledRegistration = styled.div`
  margin-top: 20px;

  & > h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 32px;
    color: #fff;
  }

  & > main {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 50px;
    width: calc(100% - 450px);
    min-height: 250px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & > form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 60%;
      min-width: 450px;

      & > input {
        width: 100%;
        border: none;
        padding: 13px 1rem;
        border-radius: 8px;
        font-size: 18px;

        &:focus {
          outline: none;
          box-shadow: 0 0 7px 2px #00000075;
        }
      }

      & > .btn__wrapper {
        width: max-content;
        margin: 0 auto;

        & > button {
          border: none;
          border-radius: 8px;
          cursor: pointer;
          padding: 13px 25px;
          background-color: #fff;
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    & > main {
      width: 90%;
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 30px;
    & > main {
      width: 100%;
    }
  }

  @media (max-width: 567px) {
    & > main {
      min-height: auto;
      padding: 2rem 2rem 1.5rem;
      border-radius: 25px;

      & > form {
        width: 100%;
        min-width: auto;
        gap: 2rem;
      }
    }
  }
`;
