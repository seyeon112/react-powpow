import styled from "styled-components";

const S = {};

S.Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
`;


S.Title = styled.div`
    margin: 43px 0 80px 0;
    display: flex;
    justify-content: space-between;
    width: 1191px;
    
    & p {
        font-size: 40px;
        font-weight: bold;
    }
`;

S.NoticeSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;
`;

S.InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    
    & input[type="date"] {
         width: 342px;
         height: 48px;
         padding: 17px;
         border-radius: 20px;
         border: 1px solid #ccc;
    }
    
    & span {
        font-size: 20px;
    }
`

S.Buttons = styled.div`
    display: flex;
    margin: 35px 0 80px 0;
    gap: 10px;
`

S.SearchBtn = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    background-color: #113f8a;
`

S.ResetBtn = styled.button`
    width: 90px;
    height: 30px;
    border: solid 1px #888888;
    border-radius: 20px;
    color: #888888;
    cursor: pointer;
    background-color: #fff;
`

S.NoticeList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1440px;
    margin: 0 auto;

`;

S.Table = styled.table`
    width: 1440px;
    text-align: center;
    border-collapse: collapse;
`

S.TableHeader = styled.thead``;

S.TableRow = styled.tr`
    display: flex;
`;

S.TableHeaderRow = styled.tr`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border-bottom: 1px solid #828282;
`;

S.TableHeaderCell = styled.th`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    width: 220px;
`;

S.TableCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 0;
    width: 220px;
`;

S.TableFooterCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 0;
    width: 220px;
`;

S.TableFooter = styled.tr`
    display: flex;
    font-weight: bold;
`;



export default S;