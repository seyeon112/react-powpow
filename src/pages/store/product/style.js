import styled from "styled-components";
import {
    h4Medium,
    h5Bold,
    h6Medium,
    h7Bold,
    h7Medium,
    h9Medium,
    h8Regular,
    h6Bold,
    h6Regular, h10Regular, h8Bold, h7Regular, h4Bold
} from "../../../global/common";

const S = {}


    S.BodyWrap = styled.div`
        display: flex;
        /* flex-direction: column; */
        width: 1440px;
        margin: 0 auto;
        gap:56px;
        margin-bottom: 55px;
        justify-content: center;
        margin-top: 175px;
    `;

    S.ProductInfoLeft = styled.div`
        display: flex;
        flex-direction: column;
        width: 464px;
        height: 500px;
    `;

    S.MainImg = styled.img`
        display: flex;
        width: 464px;
        height: 464px;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    `;

    S.SubImgWrap = styled.div`
        width: 464px;
        display: flex;
        gap : 20px;
        justify-content: left;
        margin-bottom: 20px;
        
        & img{
            display: flex;
            width: 98px;
            height: 98px;
            border-radius: 20px;
        }
    `;


S.InfoSeller = styled.div`
    display: flex;
    justify-content: left;
    gap: 15px;

    & p{
        display: flex;
        ${h8Regular}
    }

    & button{
        display: flex;
        border-radius: 20px;
        background-color: white;
        border: 1px solid #828282;
    }
`;

    // 하트 heart
    S.ProductInfoRight = styled.div`
        display: flex;
        flex-direction: column;
        width: 620px;
        position: relative;

        .like-icon {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0;
            left: 590px;
            background-color: #61dafb;
            border: 1px solid #131313;
            
        }
    `;


    S.star = styled.div`
        display: flex;
        margin-top: 5px;
    `;

    S.IconsWrap = styled.div`
        display: flex;
        justify-content: right;
        margin-bottom: 23px;
        
    `;


    S.ProductName = styled.span`
        display: flex;
        width: 100%;
        height: 72px;
        font-weight: 500;
        margin-bottom: 64px;
        ${h4Medium}
    `;

    S.ProductNamein = styled.span`
        display: flex;
        width: 100%;
        height: 72px;
        font-weight: 500;
        //margin-bottom: 64px;
        margin-top: 13px;
        margin-left: 115px;
        ${h4Medium}
    `;

    S.Coupon = styled.p`
        ${h4Medium}
    `;

    S.ProductPriceWrap = styled.div`
        display: flex;
        width: 100%;
        margin-bottom: 50px;
        align-items: end;
    `;

    S.Percent = styled.p`
        color: #C83F3F;
        padding-right: 32px;
        ${h4Bold}
    `;

    S.RealPrice = styled.p`
        padding-right: 17px;
        ${h4Bold}
    `;

    S.Price = styled.p`
        text-decoration:line-through;
        ${h6Medium};
        color: #888888;
    `;

    S.PriceCheck = styled.div`
        display: flex;
        //position: relative;
        flex-direction: row;
        margin-bottom: 50px;
        width: 303px;
    `;

    S.TagWrap = styled.div`
        display: flex;
        flex-direction: column;
        font-weight: 500;
        margin-right: 42px;
        width: 60px;
        height: 20px;
        ${h7Regular}
        
        & P{
            display: flex;
            //margin-bottom: 126px;
            width: 59px;
        }
    `;


    S.InfoWrap = styled.div`
        display: flex;
        flex-direction: column;
        
    `;

    S.DeliveryInfo = styled.div`
        display: flex;
        flex-direction: column;
        gap : 5px;
        justify-content: space-between;
        width: 200px;
    `;

    S.ProductBox = styled.div`
        display: flex;
        flex-direction: column;
        border: solid #CCCBC6 1px;
        border-radius: 20px;
        box-sizing: border-box;
        width: 620px;
        height: 228px;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        
        & p{
            ${h6Medium}
        }
    `;


    S.Box = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        

        & button {
            color: #828282;
            border: none;
            background-color: #ffffff;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            position: absolute;
            border-radius: 50px;
        }

        & input {
            width: 145px;
            height: 40px;
            border-radius: 50px;
            text-align: center;
            color: #828282;
            border: 1px solid #828282;
            font-size: 16px;
        }
    `;

    S.Select = styled.div`
        justify-content: center;
        margin-right: 90px;
    `;

    S.Stock = styled.span`
        ${h9Medium};
        color: #828282;
        margin-right: 80px;
        margin-top: 5px;
    `;

    S.PriceIs = styled.span`
        ${h5Bold};
    `;

    S.BtnMinus = styled.button `
        left: 70px;
        top: 4px;
    `;

    S.BtnPlus = styled.button`
        right: 420px;
        top: 4px;
    `;


    S.ButtonContainer = styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        ${h7Medium}
    `;

    S.CheckButton = styled.button`
        background-color: #FFFFFF;
        color: #888888;
        border: solid 1px;
        border-radius: 20px;
        cursor: pointer;
        width: 220px;
        height: 44px;
        ${h7Medium}
    `;

    S.PaymentButton = styled.button`
        background-color: #113F8A;
        border-radius: 20px;
        color: #fff;
        border: none;
        cursor: pointer;
        width: 220px;
        height: 44px;
        ${h7Medium}
    `;


    S.Together = styled.span`
        display: flex;
        margin: 0 auto;
        width: 1130px;
        margin-bottom: 30px;
        ${h6Bold}
    `;

    S.ProductWrap = styled.div`
        width: 1130px;
        gap: 12px;
        margin: 0 auto;
        margin-bottom: 87px;
    `;

    S.Product = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 100%;
        
        & button{
            border: 1px solid #d9d9d9;
            border-radius: 5px;
            height: 36px;
            width: 250px;
            background-color: #fff;
        }
    `;

    S.SwiperDirection = styled.div`
        display: flex;
        flex-direction: row;
    `;

    // 하트
    S.ProductImageWrap = styled.div`
        //position: relative;
        border-radius: 20px;
        position: relative;

        .like-icon {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 100px;
            left: 50px;
        }

        
    `;

    S.Images = styled.img`
        width: 250px;
        height: 250px;
        border-radius: 20px;
        
        
        
    `

    S.ProductInfo = styled.div`
        display: flex;
        flex-direction: column;
        gap: 9px;
    `;

    S.ProductCalled = styled.span`
        ${h8Regular};
        width: 250px;
        margin-top: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    `;
    S.ProductPrice = styled.span`
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
    `;

    /* 리뷰창 */
    S.Container3 = styled.div`
        display: flex;
        width: 935px;
        height: 887px;
        margin: 0 auto;
        margin-bottom: 70px;
        border-radius: 10px;
    `;

    S.InfoWrap = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    `;



    S.TabWrap = styled.div`
        display: flex;
        width: 100%;
        height: 70px;
        margin-bottom: 36px;
    
        & button {
            flex: 1;
            padding: 15px 10px;
            border: 1px solid #d9d9d9;
            background-color: #f5f5f5;
            color: #000;
            transition: all 0.3s ease;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            ${h6Bold};
        }
    
        & button.active { 
            background-color: #131313;
            color: #fff;
        }
    
        & button:hover {
            background-color: #131313;
            color: #fff;
        }
    `;


    S.ProductDetail = styled.div`
        display: flex;
    `;



    S.ReviewContainer = styled.div`
    `;

    S.ReviewCount = styled.div`
        margin-bottom: 35px;
        & span{
            ${h7Bold};
            margin-right: 50px;
        }
    `;


    S.ProductReview = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        width: 100%;
        height: 600px;
        //margin-top: 20px;
    `;

    S.ProductReviewDetail = styled.div`
        overflow-y: auto;
        width: 100%;
        height: 600px;
    
        // 스크롤바 전체 트랙
        &::-webkit-scrollbar {
            width: 6px; // 스크롤바 너비
        }
    
        // 스크롤바 핸들 (움직이는 부분)
        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.3); // 반투명 회색
            border-radius: 3px; // 둥근 모서리
            transition: background-color 0.3s ease;
        }
    
        // 스크롤바 핸들에 마우스 올렸을 때
        &::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.5); // 좀 더 진한 색상
        }
    
        // 스크롤바 트랙 (배경)
        &::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.1); // 매우 연한 회색
        }
        
        & img{
            width: 70px;
            height: 70px;
        }
    `;

    S.NickName = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        & img{
            width: 70px;
            height: 70px;
            margin-top: 10px;
        }
    `;

    S.WithButton = styled.div`
        display: flex;
        flex-direction: row;
        
    `

    S.ReviewContent = styled.div`
        margin-left: 100px;
        margin-right: 50px;
        width: 100%;
    `;

    S.HugReview = styled.div`
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        padding : 0 20px;
        & button{
            background:#fff;
            border: none;
        }

        & img{
            width: 20px;
            height: 20px;
            justify-content: space-between;
        }
    `;


    S.LinePer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #d9d9d9;
        margin-bottom: 31px;
        margin-top: 31px;
        width: 100%;
    `;

    S.UserInfo = styled.div`
        display: flex;
        & p{
            ${h7Regular};
            margin-bottom: 24px;
            justify-content: space-between;
        }
        
        & span{
            ${h7Regular};
            margin-bottom: 24px;
        }
        
    `;

    S.ReviewTitle = styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
    `;

    S.ReviewInput = styled.div`
        display: flex;
        flex-direction: row;
        margin-left: 100px;
        justify-content: center;
        align-items: center;
        
        
        & input{
            width: 563px;
            height: 90px;
            border-radius: 20px;
            padding: 5px 20px;
        }
        
        & button{
            width: 64px;
            height: 33px;
            background-color: #113f8a;
            color: #fff;
            border-radius: 50px;
            margin-left: 60px;
        }
    `;

    S.NewReview = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 43px;
        justify-content: center;
        align-items: center;
    `;


    // /* 배송 */
    S.Btn3 = styled.div` 
        //display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: center;
        width: 100%;
        height: 46%;
        gap: 20px;
        padding: 15px;
        margin-left: 150px;
        
        & p{
            ${h8Bold};
            margin-bottom: 18px;
        }
        
        & ul li{
            ${h10Regular};
            color: #ACACA8;
            list-style-type: circle;
            list-style-position:inside;
        }
    `;



    S.Btn4 = styled.div`
        ${h6Regular}
    `;

    S.Btn4Info = styled.div`
        & p{
            ${h8Bold};
            margin-bottom: 15px;
        }
        
        & ul li{
            ${h10Regular};
            color: #ACACA8;
            list-style-type: circle;
            list-style-position:inside;
        }
    `;

    S.Container = styled.div`
        width: 80%;
        height: 80%;
        margin: 0 auto;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        display: none;
    `;


export default S;