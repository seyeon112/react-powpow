import styled from "styled-components";
import {
    h1Bold, h7Bold, h8Regular, gray500, h7Regular, h2Bold, h6Regular, h9Regular, h6Bold, h9Bold
} from '../../../global/common'
import theme from "../../../global/theme";
import { Link } from 'react-router-dom'
// import theme from "../../global/theme";

const S = {}

S.LikeListNoneBox = styled.div`
    width: 823px;
    height: 190px;
    display: flex;
    box-sizing: border-box;
    border-radius: 20px;
    border: solid 1px #888888;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 102px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    margin: 100px auto;

    & p:nth-child(1) {
        ${h6Bold}
        color: #909090;
        
    }
    & p:nth-child(2) {
        ${h7Regular}
        color: #909090;

    }
`


S.LikesAll = styled.div`
    width: 822px;
    margin: 0 auto;
    
`

S.LikeStoreWrap = styled.div`
    width: 822px;
    display: block;
    flex-wrap: wrap;
    justify-content: space-between;

`

// 스토어 좋아요 영역 제목
S.LikeStoreTItleWrap = styled.div`
    margin-top: 102px;
    margin-bottom: 18px;
    width: 822px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${h6Bold}

`

S.StoreTitle = styled.div`
    width: 54px;
    height: 30px;
    ${h6Bold}
`

S.OtherClickBtn = styled.div`
    width: 130px;
    height: 18px;
    ${h9Regular}
    font-size: 14px;
    cursor : pointer;
`

S.ImageWrap = styled.div`
    width: 190px;
    height: 190px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 0 10px 0;

    & img {
        width: 100%;
    }
`

S.ProductLikes = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    & > img {
        border-radius: 20px;
        width: 100%;
        cursor: pointer;
    }
`

S.ProductName = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    height: 36px;
    font-size: 18px;
    margin : 8px 0 4px 0;
    
    & > p {
        ${h9Bold}
    }
    
`

S.ProductPrice = styled.div`
    & > p {
        ${h9Regular}
    }

`
// 제품 전체 래퍼
S.productLikeList = styled.div`
    width: 823px;
    display: flex;
    flex-wrap: wrap;
    align-items: first;
    gap: 21px;
    margin-bottom: 86px;
    
`

S.ProfileInfo = styled.div`
    
    display: flex;
    align-items: center;
    & > img {
        width: 40px;
        height: 40px;
    }
    
    & span {
        margin-left: 10px;
        ${h9Bold}
    }

`

S.LikeCommTitleWrap = styled.div`
    margin-top: 102px;
    margin-bottom: 18px;
    width: 822px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ${h6Bold}

`

S.CommTitle = styled.div`
    width: 72px;
    height: 30px;
    ${h6Bold}

`

S.OtherClickCommBtn = styled.div`
    width: 150px;
    height: 18px;
    ${h9Regular}
    font-size: 14px;
    cursor : pointer;
`

S.CommLikeList = styled.div`
    width: 823px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 40px;
    column-gap: 20px;
    margin-bottom: 155px;

`


export default S;