import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import S from "./style";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { currentUser } = useSelector((state) => state.user);
    const memberId = currentUser?.id;

    const [cartProducts, setCartProducts] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]); // 체크 상태 관리
    const [selectedProducts, setSelectedProducts] = useState([]); // 선택된 상품
    const [isAllChecked, setIsAllChecked] = useState(false); // 전체 체크 상태

    const navigate = useNavigate();

    useEffect(() => {
        if (memberId) {
            const getCartList = async () => {
                const response = await fetch("http://localhost:10000/cart/all-carts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ memberId }),
                });

                const datas = await response.json();
                return datas.map((item) => ({ ...item, quantity: 1 }));
            };

            getCartList()
                .then((data) => {
                    setCartProducts(data);
                    setCheckedItems(Array(data.length).fill(false)); // 초기 상태: 모두 체크 해제
                })
                .catch(console.error);
        }
    }, [memberId]);

    // 개별 상품 선택 처리
    const handleSelectItem = (index, checked) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = checked;

        const updatedSelectedProducts = cartProducts.filter(
            (_, i) => updatedCheckedItems[i]
        );

        setCheckedItems(updatedCheckedItems);
        setSelectedProducts(updatedSelectedProducts);

        // 전체 체크 상태 업데이트
        setIsAllChecked(updatedCheckedItems.every(Boolean));
    };

    // 전체 체크 처리
    const handleSelectAll = (checked) => {
        const updatedCheckedItems = Array(cartProducts.length).fill(checked);

        setCheckedItems(updatedCheckedItems);
        setIsAllChecked(checked);

        // 선택된 상품 목록 업데이트
        if (checked) {
            setSelectedProducts(cartProducts);
        } else {
            setSelectedProducts([]);
        }
    };

    const totals = cartProducts.reduce(
        (acc, item) => {
            acc.totalDeliveryFee += (item.deliveryFee * item.quantity);
            acc.totalRealPrice += (item.productRealPrice * item.quantity);
            acc.totalDiscountedPrice += (item.productPrice * item.quantity);
            acc.totalDiscountPrice = acc.totalRealPrice - acc.totalDiscountedPrice
            return acc;
        },
        { totalDeliveryFee: 0, totalRealPrice: 0, totalDiscountedPrice: 0, totalDiscountPrice : 0}
    );

      // 선택한 상품으로 이동
    const handleGoToPay = () => {
        if (selectedProducts.length === 0) {
            // 선택된 상품이 없으면 전체 상품 추가
            navigate("/pay", { state: { products: cartProducts } });
        } else {
            // 선택된 상품만 추가
            navigate("/pay", { state: { products: selectedProducts } });
        }
    };


    // 수량 변경 핸들러
    const handleQuantityChange = (index, newQuantity) => {
        setCartProducts((prevProducts) => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index] = {
                ...updatedProducts[index],
                quantity: newQuantity, // 수량 업데이트
            };
            return updatedProducts;
        });
    };
    
    if(cartProducts.length === 0){
        return (
            <S.NoneWrap>
                <p>장바구니가 비어있습니다.</p>
                <Link to={"/"}>쇼핑하러 가기</Link>
            </S.NoneWrap>
        );
    }  


    return (
        <S.CartWrapper>
            <S.Title className="main-title">장바구니</S.Title>
            <S.Border>
                <S.TopWapper>
                    <input
                        className="check"
                        type="checkbox"
                        checked={isAllChecked}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                    <p className="first">상품 정보</p>
                    <p className="second">상품 수량</p>
                    <p className="third">상품 판매가격</p>
                    <p className="fourth">상품 사이즈</p>
                </S.TopWapper>
            </S.Border>
            <S.Border className="list">
                {cartProducts.map((cart, i) => (
                    <CartProduct
                        key={i}
                        cart={cart}
                        checked={checkedItems[i]}
                        onChange={(checked) => handleSelectItem(i, checked)}
                        onQuantityChange={(newQuantity) => handleQuantityChange(i, newQuantity)}
                    />
                ))}
            </S.Border>
            <S.Title className="main-title">결제정보</S.Title>
            <S.Border>
                <S.Total>
                    <p className="title">총 배송비</p>
                    <p className="total">{totals.totalDeliveryFee.toLocaleString('ko-KR')}원</p>
                </S.Total>
                <S.Total>
                    <p className="title">결제가격</p>
                    <p className="total">{totals.totalRealPrice.toLocaleString('ko-KR')}원</p>
                </S.Total>
                <S.Total>
                    <p className="title">할인</p>
                    <p className="total">{totals.totalDiscountPrice.toLocaleString('ko-KR')}원</p>
                </S.Total>
                <S.Total>
                    <p className="title">총 주문금액</p>
                    <p className="total">{totals.totalDiscountedPrice.toLocaleString('ko-KR')}원</p>
                </S.Total>
            </S.Border>
            <S.ButtonWrap>
                <div>
                    <button onClick={handleGoToPay}>선택 주문</button>
                    <button onClick={handleGoToPay}>전체 주문</button>
                </div>
            </S.ButtonWrap>
        </S.CartWrapper>
    );
};

export default Cart;
