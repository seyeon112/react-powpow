import styled from "styled-components";


const S = {}

S.T = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  width: 1000px;
  margin-top: 60px;
  margin-bottom: 20px;
`

S.NoticeBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
S.NoticeTitle = styled.div`
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
    font-weight: bold;
`
S.NoticeDate = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #828282;
`
S.Notice = styled.div`
  width: 1000px;
  height: 100px;
  padding: 26px 0px;
  border-bottom: 1px solid #D9D9D9;
  cursor: pointer;
`
S.NoticeList = styled.div`
  margin-top: 60px;
  width: 1000px;
`
S.Title = styled.div`
  width: 100%;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`
S.Date = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #828282;
`
S.Count = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #828282;
`
S.Content = styled.div`
   line-height: 1.4;
   font-size: 22px;
   margin: 30px 0px;
   padding: 30px 0px;
   border-bottom: 1px solid #D9D9D9;
   border-top: 1px solid #D9D9D9;
`
S.Button = styled.div`
  & button {
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    border: none;
    background-color: #113F8A;
    border-radius: 20px;
    width: 180px;
    height: 42px;
    cursor: pointer;
  }
`

S.Span = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;  
`

export default S;