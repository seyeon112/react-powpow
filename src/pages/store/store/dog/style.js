import styled from "styled-components";
import {
    flexRowCenter,
    flexColumnCenter,
    h4Medium,
    h8Medium,
    h1Bold,
    yellow200,
    h8Regular,
    h5Medium
} from '../../../../global/common'

const S = {}

    // 배너
    S.BannerContainer = styled.div`
      position: relative;
      width: 100%;
      height: 603px;
      margin-bottom: 139px;
    `;

    S.BannerComent = styled.div`
        position: absolute;
        font-size: 50px;
        font-weight: bold;
        line-height: 58px;
        top: 150px;
        left: 42%;
        transform: translateX(-45%);
        text-align: left;
        width: 1440px;
        
        & span {
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
        }
        
        & button{
            border-radius: 100px;
            width: 182px;
            height: 51px;
            margin-left: 50px;
            background-color: #FFE59A;
            border: 1px solid #131313;
            font-weight: normal;
            font-size: 20px;
            line-height: 28px;
            padding-bottom: 5px;
            cursor: pointer;
        }
    `;

S.CustomProductMessage = styled.p`
  width: 100%;
  text-align: center;
`;


    S.BannerButton = styled.img`
        width: 24px;
        height: 25px;
        padding-top: 10px;
        margin-left: 5px;
        cursor: pointer;
    `;

    S.Content = styled.div`
            margin-bottom: 100px;
            ${flexColumnCenter};
        width: 100%;
        overflow: hidden;
    `;

    S.Banner = styled.img`
            width: 1920px;
    `;




    // 카테고리들
    S.CategoriesWrap = styled.div`
            margin-bottom: 56px;
            gap: 47px;
            ${flexRowCenter};
    `;

    S.Category = styled.span`
            border-radius: 100px;
            ${flexColumnCenter};
            ${h8Medium};
            margin-top: 11px;
    `;


// 버튼 정렬 스타일

S.SortButtonWrapper = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin: 0 0 60px auto;
  
  & > div {
    position: relative;
  }
`

S.SortButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 42px;
  border-radius: 20px;
    margin-left: 10px;
  border: solid 1px #888888;
    cursor: pointer;

  img { 
    position: absolute; 
    top: 50%;
    right: 6px;
    transform: translate(0, -50%);
    width: 12px;
  }
`

S.SortModal = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  left: 0;
  min-width: 114px;
  top: 50px;
  z-index: 1000;
  gap: 12px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  p {
    white-space: nowrap;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &.active {
    display: flex;
  }
  
  & input {
    border : none;
  }
`

S.ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({subtitle}) => subtitle};
`



    // 드롭다운 필터링 버튼들

S.DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

S.DropdownContainer = styled.div`
    display: flex;
    gap: 10px;
`;

    S.DropdownContainer = styled.div`
        display: flex;
        position: relative;

        & button{
            padding: 10px 15px;
            background: white;
            border: 1px solid #D9D9D9;
            border-radius: 10px;
            cursor: pointer;
            margin-left: 10px;
        }
    `;

    S.DropdownItem = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        border-radius: 10px;

        &:hover {
            background-color: #f5f5f5;
            border-radius: 10px;
        }

        input {
            margin-right: 10px;
        }

        & img{
            width: 30px;
            height: 30px;
        }
    `;

    S.DropdownContent = styled.div`
        position: absolute;
        top: 50px;
        left: 10px;
        background: white;
        min-width: 120%;
        border: 1px solid #D9D9D9;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: ${props => props.isopen ? 'block' : 'none'};
        z-index: 1000;
    `;


    S.Menu = styled.div`
        cursor: pointer;
        
        & :hover{
            background-color: ${yellow200};
        }
    `;


S.SwiperDirection = styled.div`
    display: flex;
    flex-direction: row;
`;

S.Product = styled.div`
    width: 100%;
    //max-width: 342px;
    //height: 480px;
    position: relative;
    box-sizing: border-box;
    //text-align: center;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & span {
        display: inline-block;
        margin-top: 15px;
        width: 317px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & button {
        width: 100%;
        min-height: 42px;
        margin-top: 14px;
        border-radius: 5px;
        background-color: #fff;
        border: 1px solid #D9D9D9;
    }

    & img {
        width: 100%;
        max-width: 342px;
        height: 341px;
        border-radius: 10px;
    }

    .like-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 15px;
        right: 15px;
    }
`;

S.RecommendedPrice = styled.div`
    display: flex;
    flex-direction: row;
    & p{
        margin-right: 10px;
        margin-top: 5px;
    }
       
    `;

    S.ColorProducts = styled.div`
        margin: 0 auto;
        width: 100%;
        max-width: 1440px;
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;
        align-items: flex-start; 
    `;

    // 컬러 제품들 타이틀부터 제품까지 묶임
    S.Box = styled.div`
        display: flex;
            
        & button{
            font-size: 14px;
            border-radius: 20px;
            width: 96px;
            height: 42px;
            background-color: #fff;
            border-color: #888888;
            margin-bottom: 50px;
        }
    `;

    S.BoxTitle = styled.span`
            font-size: 40px;
            margin-right: 530px;
            font-weight: bold;
            width: 380px;
        `;

    S.Arrow = styled.img`
        width: 10px;
        height: 10px;
        margin-left: 10px;
    `

    // 베스트

    S.BestTitle = styled.span`
        ${h1Bold};
        margin-bottom: 50px;
        margin-top: 180px;
        width: 1440px;
        position: relative;
    `;

    S.BestProducts = styled.div`
            max-width: 1440px;
            display: flex;
            flex-direction: row;
        `;

    S.BestProduct = styled.div`
            display: flex;
            //align-items: center;
            //justify-content: center;
            flex-direction: column;
            flex-shrink: 0;
            position: relative;

            & img{
                width: 244px;
                height: 250px;
                border-radius: 10px;
            }
            
            & span{
                display: block;
                width: 244px;
                margin-top: 5px;
                flex-shrink: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
    
            & p{
                display: flex;
                margin-top: 5px;
            }
        
            
            & button{
                width: 244px;
                height: 36px;
                margin-top: 9px;
                border-radius: 5px;
                background-color: #fff;
            }

            .like-icon {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 10px;
                right: 10px;
            }
        `;

    S.NormalPrice = styled.div`
        display: flex;
        flex-direction: row;
        & p{
            margin-right: 10px;
        }
        
    `;



    S.BestProductWrap = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 55px;
        `;


    // 추천
    S.RecommendedProduct = styled.div`
            margin-top: 150px;
        max-width: 1440px;
        `;
    S.Title = styled.span`
            ${h1Bold};
            margin-bottom: 50px;
            margin-top: 180px;
        `;

    S.RecommendedWrap = styled.div`
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            justify-content: space-between;
            gap: 24px;
            margin-top: 50px;
        `;

    // 특가
    S.SpecialProduct = styled.div`
        display: flex;
        flex-direction: column;
        width: 244px;
        position: relative;
        
        & img {
            width: 100%;
            height: 244px;
            border-radius: 10px;
            object-fit: cover;
        }
        
        & button {
            width: 100%;
            height: 31px;
            border-radius: 5px;
            margin-top: 6px;
            background-color: #fff;
            border: 1px solid #D9D9D9;
        }
    
        & span {
            width: 100%;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            ${h8Regular};
            flex-shrink: 0;
            white-space: nowrap;
            display: inline-block;
        }
 
        
        // & span:first-child{
        //     display: flex;
        //     width: 500px;
        //     margin-top: 5px;
        //     ${h5Medium};
        // }
        
        .like-icon:first-child {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .like-icon {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 10px;
            right: 10px;
        }

        /* 첫 번째 상품 전체 크기 */
        .first-product {
            width: 300px; /* 원하는 크기로 조정 */
        }

        /* 첫 번째 상품 이름 스타일 */
        .first-product-name {
            ${h5Medium};
            width: 100%;
            height: 80px;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            flex-shrink: 0;
        }

        /* 첫 번째 상품 할인율 스타일 */
        .first-product-discount {
            ${h5Medium};
        }

        /* 첫 번째 상품 가격 스타일 */
        .first-product-price {
            ${h5Medium};
        }
        
        .rest{
            ${h8Regular};
        }
        
        
    `;


    S.Price = styled.div`
        display: flex;
        flex-direction: row;
    `;


    S.SpecialProducts = styled.div`
        display: grid;
        grid-template-columns: 538px repeat(3, 1fr);
        gap: 50px;
        width: 100%;
        min-width: 1440px;
        max-height: 790px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 50px;
        
        & > div:first-child {
            width: 538px; 
            height: 790px; 
            margin-right: 72px;
            grid-row: span 2;
    
            & img {
                height: 537px;
                margin-bottom: 10px;
            }
    
            & button {
                height: 70px;
                margin-top: 25px;
            }
    
            & span {
                ${h4Medium};
                padding-bottom: 10px;
            }
        }
    `;

    S.SpecialWrap = styled.div`
        margin-top: 150px;
    `;

// 스타일 추가
    S.ProductWraper = styled.div`
        width: 1440px;
        margin: 0 auto;
        row-gap: 48px;
        column-gap: 24px;
        display: flex;
        flex-wrap: wrap;
        
        & .swiper-grid > .swiper-wrapper {
            gap: 48px 30px !important;
        }
        
        & .swiper-grid-column .swiper-wrapper {
            display: flex !important;
            height: 100% !important;
            flex-wrap: wrap !important;
            width: 100% !important;
        }

        & .swiper {
            width: 100%;
            margin: 0 0 120px 0;
        }

        & .swiper-wrapper {
            height: ${(props) => props.$length < 5 ?  "530px" : "1200px"} !important;
        }

        & .swiper-slide {
            margin: 0 !important;
        }
    `

    S.NoneMessage = styled.p`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 530px;
        font-size: 20px;
        font-weight: 600;
    `

    S.ProductWrap = styled.div`
        display: flex;
        flex-direction: column;
    `

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

    S.BestProductWraper = styled.div`
        width: 1440px;
        row-gap: 48px;
        column-gap: 24px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto 120px auto;

        & .swiper {
            width: 100%;
            margin: 0 0 120px 0;

        }

        & .swiper-wrapper {
            height: 440px;
            gap: 30px;
        }


        & .thumb {
            width: 100%;
        }
        & .swiper-slide {
            margin: 0 !important;
        }
    `

    S.MainTextWrap = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 0 0 40px 0;
    `

    S.MainTitle = styled.p`
        font-size: 40px;
        font-weight: 900;
    `

    // 스타일 추가

    S.SpecialLayout = styled.div`
        width: 1440px;
        display: flex;
        flex-direction: row;
        gap: 72px;
        & .big {
            width: 537px;
            flex-shrink: 0;

            .image-wrap {
                width: 537px;
                height: 537px;
            }

        }
    `

    S.SpecialProductWraper = styled.div`
        
        column-gap: 49px;
        row-gap: 40px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 120px 0;

        & .item{
            width: 244px;
        }

        & .image-wrap {
            width: 244px;
            height: 244px;
        }
        
        & .thumb {
            width: 100%;
        }
    `

export default S;