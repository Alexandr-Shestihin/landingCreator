import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

//
import bali2022 from "../../assets/img/bali2022.png";
import gla from "../../assets/img/gla.png";
import IESF from "../../assets/img/IESF.png";
import aztechLogo from "../../assets/img/aztech_logo.png";
import teknofest from "../../assets/img/TEKNOFEST.png";
import Passport from "../../assets/img/Passport.png";

export default function Partners(props) {
   const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      customPaging: function (i) {
         return <></>;
      },
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 5,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 450,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <StyledCarousel>
         <h1>Partners</h1>
         <Slider {...settings}>
            {props.partnersLogo.map(el => <div className="carosel__item">
               <img src={el} alt="bali2022" />
            </div>)}
         </Slider>
      </StyledCarousel>
   );
}

const StyledCarousel = styled.div`
  padding: 20px 0 98px;
  margin: 72px auto 20px;
  width: calc(100% - 450px);

  & > h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    margin-bottom: 35px;
  }

  .carosel__item {
   width: 150px;
   height: 150px;
     
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .slick-dots {
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transform: translateY(20px);

    & > li {
      width: 50px !important;
      height: 7px !important;
      background: red;
      background-color: grey;
      border-radius: 16px;

      &.slick-active {
         background-color: black;
      }
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin: 0 auto;
    padding: 20px 0 80px;

    .carosel__item {
      & > img {
        margin: 0 auto;
      }
    }

    .slick-dots {
      gap: 8px;

      & > li {
        width: 40px !important;
        height: 6px !important;
        border-radius: 14px;
      }
    }
  }
  @media (max-width: 576px) {
    .slick-dots {
      gap: 3px;

      & > li {
        width: 25px !important;
        height: 6px !important;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 450px) {
    .slick-dots {
      gap: 0px;

      & > li {
        width: 8px !important;
        height: 8px !important;
        border-radius: 50%;
      }
    }
  }
`;
