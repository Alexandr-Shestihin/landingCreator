import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

//
/* import azkif from "../../assets/img/azkif.png";
import ESports_europe from "../../assets/img/ESports_europe.png";
import gla from "../../assets/img/gla.png"; */

export default function Organizers(props) {
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
               slidesToScroll: 3,
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
         <h1>Organizers</h1>
         <Slider {...settings}>
            {props.organizeLogo.map(el => <div className="carosel__item">
               <img src={el} alt="ESports_europe" />
            </div>)}
            {/* 
            <div className="carosel__item">
               <img src={azkif} alt="azkif" />
            </div>
            <div className="carosel__item">
               <img src={ESports_europe} alt="ESports_europe" />
            </div>
            <div className="carosel__item">
               <img src={azkif} alt="azkif" />
            </div> */}
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
