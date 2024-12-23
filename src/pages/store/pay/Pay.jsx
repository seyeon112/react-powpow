import React, {useEffect, useState} from 'react';
import S from './style';
import Checkbox from './Checkbox';
import PayCoupon from './PayCoupon';
import PayBtn from './PayBtn';
import Card from "./Card";
import InsertedCard from "./InsertedCard";
import {useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Pay = () => {

    const location = useLocation();
    // 이동 후 데이터 들고오기
    const { products } = location.state || { products: [] };
    const [isInsert, setIsInsert] = useState(true);
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser)

    const { 
      id, memberAddress, memberAddressDetail, memberName, memberPhone, memberEmail
     } = currentUser;
    const navigate = useNavigate();

    const fulladdRess = memberAddress +" "+ memberAddressDetail;
    const [address, setAddress] = useState(fulladdRess)
    const [message, setMessage] = useState("문 앞에 놔주세요.")
    const onChangeAddress = (e) => {
      setAddress(e.target.value)
    }
    const onChangeMessage = (e) => {
      setMessage(e.target.value)
    }

    useEffect(() => {
      if (currentUser) {
          const fulladdRess = `${currentUser.memberAddress || ""} ${currentUser.memberAddressDetail || ""}`;
            setAddress(fulladdRess); // currentUser 값이 변경되었을 때 address 초기화
        }
    }, [currentUser]);


    const calculateDeliveryDate = () => {
      const today = new Date();
      const deliveryDate = new Date(today.setDate(today.getDate() + 3));
      const options = { month: "2-digit", day: "2-digit" };
      return deliveryDate.toLocaleDateString('ko-KR', options);
    };

    const totals = products.reduce(
      (acc, item) => {
          acc.totalDeliveryFee += (item.deliveryFee * item.quantity);
          acc.totalRealPrice += (item.productRealPrice * item.quantity);
          acc.totalDiscountedPrice += (item.productPrice * item.quantity);
          acc.totalDiscountPrice = acc.totalRealPrice - acc.totalDiscountedPrice
          return acc;
      },
      { totalDeliveryFee: 0, totalRealPrice: 0, totalDiscountedPrice: 0, totalDiscountPrice : 0}
  );

  const delivery = (
    <S.DeliveryPlaceWrap>
      <S.DeliveryPlaceTitle>배송지</S.DeliveryPlaceTitle>
      <S.DeliveryInfoBox>
        <S.MemberName>{memberName}</S.MemberName>
        <S.MemberPhone>
          <p>{memberPhone}</p><S.AnnonimusPhone><Checkbox /><p>안심번호 사용</p></S.AnnonimusPhone>
        </S.MemberPhone>
        <S.MemberInput onChange={onChangeAddress} value={address} placeholder='배송 주소를 입력하세요.'></S.MemberInput>
        <S.MemberInput onChange={onChangeMessage} value={message} placeholder='배송 메모를 입력하세요.'></S.MemberInput>
          <S.NextTimeCheck>
            <Checkbox />
            <p>다음에도 사용할게요</p>
          </S.NextTimeCheck>
      </S.DeliveryInfoBox>
    </S.DeliveryPlaceWrap>
  )

  const order = products.map(({
    productName, productFileName, productPrice, deliveryFee, productDiscount, productRealPrice, productSize,
    quantity
  }, i) => (
    <S.OrderBox key={i}>
      <S.OrderDeliveryStart>
        <S.OrderDeliveryTitle>
        <p>&#60;오늘 출발&#62;</p>
          <p>마감(15:00) {calculateDeliveryDate()} 배송 예정</p>
          <p>{deliveryFee} 원</p>
        </S.OrderDeliveryTitle>
        <S.DeliveryProductBox>
        <img src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt={productName} />
          <S.DeliveryProductInfo>
            <p>{productName}</p>
            <S.ProductInfoPrice>
              <p>{productDiscount}%</p><p>{productRealPrice.toLocaleString('ko-KR')}원</p> <p>{productPrice.toLocaleString('ko-KR')}원</p>
            </S.ProductInfoPrice>
            <p>총 주문 수량 : {quantity}</p>
          </S.DeliveryProductInfo>
          <S.PayCoupon>
            <PayCoupon />
          </S.PayCoupon>
        </S.DeliveryProductBox>
      </S.OrderDeliveryStart>
    </S.OrderBox>
  ))

  const paymentBox = (
    <S.PayBoxWrap>
      <S.PayBoxTitle>결제 수단</S.PayBoxTitle>
      <S.PayBox>
        <S.PayAccountCategory>
          <S.PayAccountTitle>
            <input type="radio" name="pay" id="account" />
            <p>계좌 간편결제</p>
          </S.PayAccountTitle>
        </S.PayAccountCategory>
        <S.PayCardCategory>
          <S.PayCardTitle>
            <input type="radio" name="pay" id="card" />
            <p>카드 간편결제</p>
          </S.PayCardTitle>
            {isInsert ? (
                <Card/>
            ) : (
                <InsertedCard/>
            )}
        </S.PayCardCategory>
        <S.PayNormalCategory>
          <input type="radio" name="pay" id="normal" />
          <p>일반결제</p>
        </S.PayNormalCategory>
        <S.PayNotice>
          <p>결제/할인혜택 안내</p>
          <p>등록 카드는 설정&#62;카드정보 에서 변경 가능합니다.</p>
        </S.PayNotice>
      </S.PayBox>
    </S.PayBoxWrap>

  )

  // 결제정보 파싱
  const productPrice = totals.totalDiscountedPrice;
  const customerName = products && products.length > 1 ? `${products[0].productName} 외 ${products.length}건` : products[0].productName;
  const orderName =  memberName;
  const customerEmail = memberEmail;
  return (
    <S.DeliveryWrap>
      <S.Delivery>
        {delivery} 
        <S.OrderTitle>주문상품</S.OrderTitle>
        {order}
        {paymentBox}
      </S.Delivery>
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
      {/*
        productPrice : 결제 가격
        orderName : 결제 이름
        customerName : 결제자
        customerEmail : 결제 이메일
       */}
      <S.ButtonWrap>
        <PayBtn 
          productPrice={productPrice}
          orderName={orderName}
          customerName={customerName}
          customerEmail={customerEmail}
          orderAddress = {address}
          orderMessage = {message}
          orderProducts = {products}
        />
      </S.ButtonWrap>
    </S.DeliveryWrap>
  );
};

export default Pay;