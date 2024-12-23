import React, { useEffect, useState } from 'react';
import S from './style';

const SellerRevenueList = () => {
    const [sales, setSales] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSales = async () => {
            try {
                const response = await fetch('http://localhost:10000/orders/order/sales');
                if (!response.ok) {
                    throw new Error('데이터를 가져오는 데 실패했습니다.');
                }
                const data = await response.json();
                setSales(data);
            } catch (error) {
                console.error('데이터 가져오기 중 오류 발생:', error);
                setError(error.message);
            }
        };

        getSales();
    }, []); // 빈 배열로 설정하여 한 번만 실행

    // Helper function to safely parse numbers
    const parseToNumber = (value) => {
        return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    };

    // sales 상태는 여기에서 console.log로 출력
    console.log('판매량', sales);

    return (
        <S.Frame>
            <S.Title>
                <p>매출조회</p>
            </S.Title>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <form action="seller-serach-ok.seller" method="post">
                <input type="hidden" name="sellerId" value={''} />
                <S.NoticeSearch>
                    <S.InputGroup>
                        <input type="date" id="start-date" name="startDate" />
                        <span>~</span>
                        <input type="date" id="end-date" name="endDate" />
                    </S.InputGroup>
                    <S.Buttons>
                        <S.SearchBtn>검색</S.SearchBtn>
                        <S.ResetBtn type="reset">초기화</S.ResetBtn>
                    </S.Buttons>
                </S.NoticeSearch>
            </form>
            <S.NoticeList>
                <S.Table>
                    <thead>
                    <S.TableHeader>
                        <S.TableHeaderRow>
                            <S.TableHeaderCell>날짜별</S.TableHeaderCell>
                            <S.TableHeaderCell>주문수량</S.TableHeaderCell>
                            <S.TableHeaderCell>주문금액</S.TableHeaderCell>
                            <S.TableHeaderCell>취소수량</S.TableHeaderCell>
                            <S.TableHeaderCell>취소금액</S.TableHeaderCell>
                            <S.TableHeaderCell>판매금액</S.TableHeaderCell>
                        </S.TableHeaderRow>
                    </S.TableHeader>
                    </thead>
                    <tbody>
                    {sales.length > 0 ? (
                        sales.map((sale, index) => (
                            <S.TableRow key={index}>
                                <S.TableCell>{new Date(sale.orderDate).toISOString().split('T')[0]}</S.TableCell>
                                <S.TableCell>{sale.totalCount}</S.TableCell>
                                <S.TableCell>{sale.totalPrice}</S.TableCell>
                                <S.TableCell>{sale.orderCancelCount}</S.TableCell>
                                <S.TableCell>{sale.cancelPrice}</S.TableCell>
                                <S.TableCell>
                                    {parseToNumber(sale.totalPrice) - parseToNumber(sale.cancelPrice)}
                                </S.TableCell>
                            </S.TableRow>
                        ))
                    ) : (
                        <S.TableRow>
                            <S.TableCell colSpan={6}>데이터가 없습니다.</S.TableCell>
                        </S.TableRow>
                    )}
                    </tbody>
                    {sales.length > 0 && (
                        <tfoot>
                        <S.TableFooter>
                            <S.TableFooterCell>합계</S.TableFooterCell>
                            <S.TableFooterCell>
                                {sales.reduce((acc, sale) => acc + parseToNumber(sale.totalCount), 0)}
                            </S.TableFooterCell>
                            <S.TableFooterCell>
                                {sales.reduce((acc, sale) => acc + parseToNumber(sale.totalPrice), 0)}
                            </S.TableFooterCell>
                            <S.TableFooterCell>
                                {sales.reduce((acc, sale) => acc + parseToNumber(sale.orderCancelCount), 0)}
                            </S.TableFooterCell>
                            <S.TableFooterCell>
                                {sales.reduce((acc, sale) => acc + parseToNumber(sale.cancelPrice), 0)}
                            </S.TableFooterCell>
                            <S.TableFooterCell>
                                {sales.reduce(
                                    (acc, sale) => acc + (parseToNumber(sale.totalPrice) - parseToNumber(sale.cancelPrice)),
                                    0
                                )}
                            </S.TableFooterCell>
                        </S.TableFooter>
                        </tfoot>
                    )}
                </S.Table>
            </S.NoticeList>
        </S.Frame>
    );
};

export default SellerRevenueList;
