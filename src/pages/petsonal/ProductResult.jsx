import React from 'react';
import S from "./style";
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';
import HeartBtn from '../community/community/HeartBtn';

const ProductResult = ({products, petKind}) => {

    // 고양이 추천상품
    const catRecommendProducts = products
        .filter((p) => p.productAnimal === "cat")
        .filter((p) => p.productCategory === "의류")
        .slice(0, 8).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id}>
            <Link to={`/store/read/${id}`}>
                <S.imageWrap>
                    <HeartBtn className="heart" id={id} type={"product"} />
                    <img className='thumb' src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt="" />
                </S.imageWrap>
                <div className='title-wrap'>
                    <S.ProductTitle>{productName}</S.ProductTitle>
                    <S.ProductPriceWrap>
                        { productDiscount === 0 ? (
                            <span>{productPrice}</span>
                        ) : (
                            <>
                                <span className='discount'>{productDiscount}%</span>
                                {/* <span>{productRealPrice}</span> */}
                                <span>{productPrice.toLocaleString('ko-KR')} 원</span>
                            </>
                        ) }
                    </S.ProductPriceWrap>
                </div>
            </Link>
            <S.ButtonWrap >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                    alt="장바구니아이콘"
                />
                <p>담기</p>
            </S.ButtonWrap>
        </S.ProductWrap>
    ))


    const dogRecommendProducts = products
        .filter((p) => p.productAnimal === "dog")
        .filter((p) => p.productCategory === "의류")
        .slice(0, 8).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id}>
            <Link to={`/store/read/${id}`}>
                <S.imageWrap>
                    <HeartBtn className="heart" id={id} type={"product"} />
                    <img className='thumb' src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`} alt="" />
                </S.imageWrap>
                <div className='title-wrap'>
                    <S.ProductTitle>{productName}</S.ProductTitle>
                    <S.ProductPriceWrap>
                        { productDiscount === 0 ? (
                            <span>{productPrice}</span>
                        ) : (
                            <>
                                <span className='discount'>{productDiscount}%</span>
                                {/* <span>{productRealPrice}</span> */}
                                <span>{productPrice.toLocaleString('ko-KR')} 원</span>
                            </>
                        ) }
                    </S.ProductPriceWrap>
                </div>
            </Link>
            <S.ButtonWrap >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                    alt="장바구니아이콘"
                />
                <p>담기</p>
            </S.ButtonWrap>
        </S.ProductWrap>
    ))


    return (
        <div>
            <S.Content>
            {petKind === "강아지" ? (
            <>
                <S.MainTextWrap>
                <S.MainTitle>강아지 추천 상품</S.MainTitle>
                </S.MainTextWrap>
                <S.ProductWraper>
                {dogRecommendProducts}
                </S.ProductWraper>
            </>
            ) : (
            <>
                <S.MainTextWrap>
                <S.MainTitle>고양이 추천 상품</S.MainTitle>
                </S.MainTextWrap>
                <S.ProductWraper>
                {catRecommendProducts}
                </S.ProductWraper>
            </>
            )}

            </S.Content>
            <Footer />
        </div>
    );
};

export default ProductResult;