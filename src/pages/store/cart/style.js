import styled from "styled-components";

const S = {}
  S.CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
    margin: 0 auto;
    text-align: center;

    .main-title {
      text-align: left;
    }

    .check {
      width: 100px;
    }
    .first {
      width: 300px;
    }
    .second {
      width: 400px;
    }
    .third {
      width: 380px;
    }
    .fourth {
      width: 100px;
    }
  `

  S.Title = styled.p`
    font-size: 40px;
    line-height: 54px;
    font-weight: bold;
    margin : 100px 0;
  `

  S.Border = styled.div`
    border: solid 1px #d9d9d9;
    border-radius: 10px;
    padding: 20px 100px;
    margin : 0 0 40px 0;
  `

  S.TopWapper = styled.div`
    display: flex;

  `
  S.Content = styled.div`

    border-bottom : solid 1px #d9d9d9;
    margin: 30px 0;
    padding: 30px 0;
    display: flex;
    align-items: center;
    
    &:last-child {
      border-bottom : none;
    }

    & img {
      width: 200px;
      border-radius: 20px;
      margin: 0 0 10px 0;
    }
  `

  S.Quantity = styled.div`
    display: flex;
    justify-content: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 30px;
      background-color: #d9d9d9;
    }

    & > button {
      border: none;
      background-color: #d9d9d9;
      width: 30px;
    }

    & > button:first-child {
      border: none;
      border-radius: 20px 0 0 20px;
    }

    & > button:last-child {
      border: none;
      border-radius: 0 20px 20px 0;
    }
  
  `

  S.PriceWrap = styled.div`
    display: flex;
  `

  S.RealPrice = styled.p`
    color: #d9d9d9;
    text-decoration: line-through;
    font-weight: bold;
    margin-right: 10px;
  `
  
  S.Price = styled.p`
    color: #333;
    font-weight: bold;
  `

  S.DiscountPrice = styled.p`
    color: rgb(200, 63, 63);
    font-weight: bold;
    margin-right: 10px;
  `

    S.Total = styled.div`
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding : 20px 0;
      margin : 20px 0;
      border-bottom: solid 1px #d9d9d9;

      &:last-child {
        border: none;
        font-size: 22px;
        font-weight: bold;
      }

    `

    S.ButtonWrap = styled.div`
      display: flex;
      justify-content: end;
      margin: 0 0 200px 0;

      & button:first-child{
        border: solid 1px #ddd;
        padding : 12px 80px;
        background: none;
        border-radius: 30px;
        margin: 0 10px 0 0 
      }

      & button:last-child{
        border: solid 1px #ddd;
        padding : 12px 80px;
        background: #113f8a;
        color : #fff;
        border-radius: 30px;
      }
    `

    S.NoneWrap = styled.div`
      width: 600px;
      height: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 24px;
        margin: 0 0 24px 0;
      }

      & a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 20px;
        width: 200px;
        height: 40px;
        background-color : #113f8a;
      }
    `

export default S;