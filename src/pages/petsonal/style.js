import styled from "styled-components";
import {
  flexCenterRowSpaceBetween,
  flexColumnCenter,
  flexRowCenter,
  h1Bold,
  h1Medium,
  h2Bold,
  h4Bold,
  h5Medium,
  h6Medium,
  h7Bold,
} from "../../global/common";
import theme from "../../global/theme";

const S = {};

// 메인 페이지

S.PetsonalContainer = styled.div`
  ${flexColumnCenter};

  & .go-to-start {
    width: 464px;
    height: 55px;
    border-radius: 20px;
    border: solid 3px #000;
    color: white;
    background-color: #2298ff;
    position: absolute;
    bottom: 240px;
    ${h4Bold}
    cursor: pointer;
    ${flexRowCenter}
  }
`;
S.FirstImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 962px;
  position: relative;
`

S.StartImage = styled.div`
  width: 100%;
  height: 100%;
`;

S.MainFirst = styled.img`
  width: 100%;
  height: 100%;
`;

S.MainText = styled.p`
  position: absolute;
  font-size: 70px;
  font-weight: bold;
      top: 150px;
`;

S.SecondImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;
  background: #fff5d0;
  position: relative;
`;

S.SecondTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  position: absolute;
  top: 91px;
    & img{
      margin-top: 150px;
    }
`;

S.SecondText = styled.p`
  ${h1Bold}
`;

S.SecondSubText = styled.p`
  font-size: ${theme.FONT_SIZE.h7};
`;

S.BookWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  width: 1070px;
  margin-top: 123px;
`;

S.Big = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

S.Small = styled.span`
  ${h1Medium}
`;

S.Medium = styled.p`
  font-size: 50px;
  font-weight: medium;
`;

S.TextButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

S.GoCommunityButton = styled.button`
  width: 395px;
  height: 80px;
  color: white;
  background-color: #9747ff;
  border: solid 3px black;
  border-radius: 20px;
  ${h4Bold}
  ${flexRowCenter}
  cursor: pointer;
`;

S.FinalImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 68px;
  width: 1920px;

  & img {
    margin-bottom: 250px;
  }
`;

S.FinalText = styled.div`
  margin-top: 160px;
  font-size: 40px;
  font-weight: bold;
`;

S.ThirdImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;
  background: white;
  position: relative;
`;


// test페이지 1

S.Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

S.PetTestContainer = styled.div`
  ${flexColumnCenter}
  gap: 175px;
  margin: 200px 0;
`;

S.Questions = styled.div`
  ${flexColumnCenter};
`;

S.Question = styled.p`
  ${h2Bold}
`;

S.CirclesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 84px;
  width: 1200px;

  & span {
    ${h5Medium}
  }
`;

S.Circles = styled.div`
  ${flexCenterRowSpaceBetween}
  width: 708px;
`;

S.BigCircle = styled.input`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: solid 3px #828282;
  cursor: pointer;
`;

S.MiddleCircle = styled.input`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: solid 3px #828282;
  cursor: pointer;
`;

S.SmallCircle = styled.input`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: solid 3px #828282;
  cursor: pointer;
`;

S.NextButton = styled.button`
  width: 464px;
  height: 55px;
  background-color: #ffc303;
  ${h7Bold};
  border-style: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 30px;
  ${flexRowCenter};
`;
// 결과 페이지
S.ResultContainer = styled.div`
  width: 1440px;
  ${flexColumnCenter};
  margin-top: 150px;
`;

S.ColorWrap = styled.div`
  ${flexColumnCenter};
`;


S.OrangeResult = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  gap: 13px;

  & li {
    list-style-type: disc !important;
    display: list-item;
  }
`;

S.ResultBox = styled.div`
  margin-top: 144px;
  margin-bottom: 200px;
  width: 1440px;
  height: 885px;
  background: ${({color}) => color};
  gap: 180px;
  ${flexRowCenter};
`;

S.PetProfile = styled.div`
  gap: 34px;
  width: 292px;
  ${flexColumnCenter};

  & p{
    font-size: 40px;
    font-weight: bold;
  }
`;

S.PetImage = styled.img`
  background-color: white;
  width: 292px;
  height: 292px;
  border-radius: 50%;
`;

S.RateWrap = styled.div`
  ${flexColumnCenter};
  width: 505px;
  gap: 60px;
`;

S.ResultName = styled.p`
  ${h1Bold}
`;

S.PercentageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

S.AllRate = styled.div`
  width: 505px;
  ${flexColumnCenter};
  gap: 5px;
`;

S.ResultCategory = styled.div`
  display: flex;
  justify-content: space-between;
  width: 540px;

  &span {
    ${h6Medium}
    color: white;
  }
`;

S.PercentageWrap = styled.div`
  width: 540px;
  ${flexCenterRowSpaceBetween}
  
`;

S.Percent = styled.div`
  width: 408px;
  height: 20px;
  border-radius: 20px;
  background-color: white;
`;

S.Percentage = styled.span`
  font-size: ${theme.FONT_SIZE.h10};
`

S.CuteAndChicGage = styled.div`
  border-radius: 20px;
  height: 100%;
  background-color: blue;
`;

S.CalmAndActive = styled.div`
  border-radius: 20px;
  height: 100%;
  background-color: blue;
`;
S.LazyAndDilight = styled.div`
  border-radius: 20px;
  height: 100%;
  background-color: blue;
`;
S.CowardAndBrave = styled.div`
  border-radius: 20px;
  height: 100%;
  background-color: blue;
`;

// 상품나열
S.ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-bottom: 200px;
`;

S.ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 150px;

  h2 {
    text-align: left;
    font-size: ${theme.FONT_SIZE.h4};
    font-weight: ${theme.FONT_WEIGHT.bold};
  }

  a {
    text-align: right;
    margin-top: 0;
  }
`;

S.ProductsWrap = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

S.Products = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  flex-wrap: wrap;
  gap: 24px;
`;

S.ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 342px;
  height: 458px;
  border-radius: 10px;
  position: relative;
  background-color: #f8f9fa;

  & .productImage {
    width: 290px;
    height: 290px;
    margin-top: 21px;
  }
`;

S.ProductHeartICon = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 35px;
  right: 45px;
`;

S.CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

S.CardHeartIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 29px;
  top: 25px;
  z-index: 10;
`;

S.CardTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 14px 0 6px 0;
  width: 290px;
  gap: 6px;

  & b {
    text-align: left;
  }
`;
S.ProductName = styled.p`
  width: 220px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  height: 35px;
  font-size: ${theme.FONT_SIZE.h8};
`;

S.DiscountText = styled.div`
  display: flex;
`;

S.CardCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: solid 1px #e0e0e0;
  background-color: white;
  margin-top: 18px;
  width: 290px;
  height: 36px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;

S.CardCartIcon = styled.div`
  width: 16px;
  height: 16px;
`;

S.SubBanner = styled.div`
  width: 100%;
  text-align: center;
`;

S.Content = styled.div`
  margin-bottom: 200px;
  ${flexColumnCenter};
  width: 100%;
`;

  S.MainTextWrap = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px auto;
  `

  S.MainTitle = styled.p`
    font-size: 40px;
    font-weight: 900;
  `

  S.ProductWraper = styled.div`
    width: 1440px;
    margin: 0 auto 150px auto;
    row-gap: 48px;
    column-gap: 24px;
    display: flex;
    flex-wrap: wrap;
  `

  // S.ProductWrap = styled.div`
  //   grid-template-columns: repeat(4, 1fr);
  //   display: grid;
  //   justify-content: space-between;
  //   gap: 24px;
  // `;

  S.imageWrap = styled.div`
    position: relative;
    width: 342px;
    height: 342px;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 0 16px 0;

  &.small {
    width: 264px;
    height: 264px;
  }

  & .thumb {
    width: 100%;
  }

  & .heart {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 40px;
  } 
`

S.ProductWrap = styled.div`
  /* grid-template-columns: repeat(4, 1fr);
  display: grid;
  justify-content: space-between;
  gap: 24px; */
`;

S.ProductTitle = styled.p`
  font-size: 18px;
  width: 342px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  margin: 0 0 6px 0;
`

S.ProductPriceWrap = styled.div`
  display: flex;
  margin : 0 0 20px 0;
  & span {
      display: block;
      font-size: 18px;
      font-weight: 700;
      margin-right: 4px;
  }

  & .discount {
      color: rgb(200, 63, 63);
  }
`

S.ButtonWrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: solid 1px #bebebe;
  border-radius: 5px;
  width: 100%;
  height: 40px;

& img {
    margin: 0 4px 0 0;
}

& p {
    font-size: 16px;
    font-weight: 600;
}
`

export default S;
