import React from "react";
import styled from "styled-components";

export default function AdSide() {
   return (
      <div>
         {/* <StyledAdSide>
         <div>
            <h1>Your ad here</h1>
            <p>contact us today</p>
         </div>
      </StyledAdSide> */}
      </div>
   );
}

const StyledAdSide = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    text-align: center;
    text-transform: uppercase;

    & > h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.05em;
      margin-bottom: 32px;
    }

    & > p {
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #fff;
    }
  }
`;
