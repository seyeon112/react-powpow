import React, { useState } from "react";
import S from "./style";

const CartProduct = ({ cart, checked, onChange, onQuantityChange  }) => {
    const { productName, productFileName, productPrice, productDiscount, productRealPrice, productSize, quantity = 1 } = cart;

    const handleCheckboxChange = (e) => {
        onChange(e.target.checked); // 체크 상태를 상위로 전달
    };

    const increase = () => onQuantityChange(quantity + 1); // 부모로 전달
    const decrease = () => quantity > 1 && onQuantityChange(quantity - 1); 
    return (
        
        <S.Content>
            <input
                className="check"
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <div className="first">
                <img src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt={productName} />
                <p>{productName}</p>
            </div>
            <S.Quantity className="second">
                <button onClick={decrease}>-</button>
                <div>{quantity}</div>
                <button onClick={increase}>+</button>
            </S.Quantity>
            <S.PriceWrap className="third">
                <S.DiscountPrice>{productDiscount}%</S.DiscountPrice>
                <S.RealPrice>{productRealPrice.toLocaleString('ko-KR')}</S.RealPrice>
                <S.Price>{productPrice.toLocaleString('ko-KR')}원</S.Price>
            </S.PriceWrap>
            <p className="fourth">{productSize}</p>
        </S.Content>
    );
};

export default CartProduct;
