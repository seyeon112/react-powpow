import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductContext } from '../../../../context/productContext';
import HeartBtn from '../../../community/community/HeartBtn';
import S from './style';
import {Grid, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import theme from '../../../../global/theme';
import { Link, useLocation } from 'react-router-dom';

const StoreDog = () => {
    const { productState } = useContext(ProductContext);
    const { products } = productState;

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortFilteredProducts, setSortFilteredProducts] = useState([]);
 
    const location = useLocation().pathname;
    const locationPath = location.split("/")[2] || "flushies";

    // 카테고리
    // 해당 모달창을 나오게 하기
    const [isActive, setIsActive] = useState(10);
    const onClickToActive = (i) => {
        if(i === isActive) {
        setIsActive(10)
        }else{
        setIsActive(i)
        }
    }

    // 커스텀 모달 부분 데이터
    const sortInfo = [
        { 
        title : "색상",
        sortOrder : ["Orange", "Gold", "Gradation", "LightPurple", "SkyBlue", "SagaGreen", "IceBlue", "DustySilver"],
        sub : [
            `${theme.PALETTE.petsonal["orange"]}`,
            `${theme.PALETTE.petsonal["gold"]}`,
            `${theme.PALETTE.petsonal["gradation"]}`,
            `${theme.PALETTE.petsonal["lightPurple"]}`,
            `${theme.PALETTE.petsonal["skyBlue"]}`,
            `${theme.PALETTE.petsonal["sagaGreen"]}`,
            `${theme.PALETTE.petsonal["iceBlue"]}`,
            `${theme.PALETTE.petsonal["dustySilver"]}`
        ]
        },
        {
        title : "가격",
        sortOrder : ["ASC", "DESC"],
        sub : ["낮은 가격순", "높은 가격순"]
        },
        {
        title : "사이즈",
        sortOrder : ["S", "M", "L"],
        sub : ["S", "M", "L"]
        },
        {
        title : "정렬",
        sortOrder : ["NEW", "STAR", "COUNT"],
        sub : ["최신 등록순", "별점순", "판매순"]
        }
    ]

    // 정렬 그룹 만들기
    const [ productSort, setProductSort ] = useState({ color : null, price : null, size : null, sort : null });

    // 초기화 함수
    const onClickToReset = () => {
        setProductSort({ color: null, price: null, size: null, sort: null });
    }

    // 정렬함수
    const onChangeToSort = (index, sortValue) => {
        setProductSort(prev => ({
            ...prev,
            [index]: sortValue
        }));
    }

    
    // Swiper 인스턴스 레퍼런스
    const allProductsSwiperRef = useRef(null);
    const bestProductsSwiperRef = useRef(null);

    useEffect(() => {

        // 카테고리 추출
        let locationProduct = "";
        if(locationPath === "flushies"){
            locationProduct = "장난감"
        }else if(locationPath === "treats"){
            locationProduct = "사료/간식"
        }else if(locationPath === "clothes"){
            locationProduct = "의류"
        }else {
            locationProduct = "헬스케어"
        }
        
                // 카테고리 필터링
        if (products && products.length > 0) {
                const filtered = products
                    .filter((product) => {
                        // 카테고리와 동물 필터
                        const isCategoryMatch = product.productCategory === locationProduct;
                        const isAnimalMatch = product.productAnimal === "dog";
                        return isCategoryMatch && isAnimalMatch;
                    });
                    
                const sortfiltered = products
                    .filter((product) => {
                        // 카테고리와 동물 필터
                        const isCategoryMatch = product.productCategory === locationProduct;
                        const isAnimalMatch = product.productAnimal === "dog";
                        
                        // 색상 필터
                        const isColorMatch = productSort.color
                            ? product.productColor === productSort.color
                            : true; // 색상이 지정되지 않았다면 필터를 무시
                        
                      // 사이즈 필터
                        const isSizeMatch = productSort.size
                        ? product.productSize === productSort.size
                        : true;

                        return isCategoryMatch && isAnimalMatch && isColorMatch && isSizeMatch;
                    });

                    // 정렬 처리
                    if (productSort.sort) {
                        if (productSort.price === "DESC") {
                            // 높은 가격 순
                            sortfiltered.sort((a, b) => b.productPrice - a.productPrice);
                        } else if (productSort.price === "ASC") {
                            // 낮은 가격 순
                            sortfiltered.sort((a, b) => a.productPrice - b.productPrice);
                        }
                    }

                    // 가격 정렬
                    if (productSort.price) {
                        if (productSort.price === "DESC") {
                            // 높은 가격 순
                            sortfiltered.sort((a, b) => b.productPrice - a.productPrice);
                        } else if (productSort.price === "ASC") {
                            // 낮은 가격 순
                            sortfiltered.sort((a, b) => a.productPrice - b.productPrice);
                        }
                    }

                    // 다른 정렬 조건
                    if (productSort.sort) {
                        if (productSort.sort === "NEW") {
                            // 최신 등록순 (날짜 내림차순)
                            sortfiltered.sort((a, b) => new Date(b.productDate) - new Date(a.productDate));
                        } else if (productSort.sort === "STAR") {
                            // 별점순 (높은 순서)
                            sortfiltered.sort((a, b) => b.reviewStar - a.reviewStar);
                        } else if (productSort.sort === "COUNT") {
                            // 판매순 (재고 높은 순서로 가정)
                            sortfiltered.sort((a, b) => b.productStock - a.productStock);
                        }
                    }


                    setFilteredProducts(filtered); // 필터링 결과 저장
                    setSortFilteredProducts(sortfiltered); // 필터링 된 값

                    if (allProductsSwiperRef.current && allProductsSwiperRef.current.swiper) {
                        allProductsSwiperRef.current.swiper.update();
                    }
                    if (bestProductsSwiperRef.current && bestProductsSwiperRef.current.swiper) {
                        bestProductsSwiperRef.current.swiper.update();
                    }
            }
        }, [products, locationPath, productSort]); 
        

    // 상품 
    const AllProducts = sortFilteredProducts.map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }, i) => (
        <S.ProductWrap key={i}>
            <SwiperSlide key={i}>
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
                <Link to={`/store/read/${id}`}>
                    <S.ButtonWrap >
                        {/* <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                            alt="장바구니아이콘"
                        /> */}
                        <p>상세보기</p>
                    </S.ButtonWrap>
                </Link>
            </SwiperSlide>
        </S.ProductWrap>
    ))

    const bestProducts = filteredProducts.sort((a, b) => a.reviewStar - b.reviewStar).slice(8, 16).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }, i) => (
        <S.ProductWrap key={i}>
            <SwiperSlide key={i}>
                <Link to={`/store/read/${id}`}>
                    <S.imageWrap className='small'>
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
                <Link to={`/store/read/${id}`}>
                    <S.ButtonWrap >
                        {/* <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                            alt="장바구니아이콘"
                        /> */}
                        <p>상세보기</p>
                    </S.ButtonWrap>
                </Link>
            </SwiperSlide>
        </S.ProductWrap>
    ))


    const SpecialBigProduct= filteredProducts.slice(16, 17).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id} className='item big'>
            <Link to={`/store/read/${id}`}>
                <S.imageWrap className='image-wrap'>
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
            <Link to={`/store/read/${id}`}>
                <S.ButtonWrap >
                    {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                        alt="장바구니아이콘"
                    /> */}
                    <p>상세보기</p>
                </S.ButtonWrap>
            </Link>
        </S.ProductWrap>
    ))

    const SpecialProducts = filteredProducts.slice(13, 19).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id} className='item'>
            <Link to={`/store/read/${id}`}>
                <S.imageWrap className='image-wrap'>
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
            <Link to={`/store/read/${id}`}>
                    <S.ButtonWrap >
                        {/* <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                            alt="장바구니아이콘"
                        /> */}
                        <p>상세보기</p>
                    </S.ButtonWrap>
                </Link>
        </S.ProductWrap>
    ))

    const recommendProducts = filteredProducts.slice(22, 30).map(({
        id, productName, productFileName, productPrice, productRealPrice, productDiscount
    }) => (
        <S.ProductWrap key={id}>
            <SwiperSlide key={id}>
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
                <Link to={`/store/read/${id}`}>
                    <S.ButtonWrap >
                        {/* <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                            alt="장바구니아이콘"
                        /> */}
                        <p>상세보기</p>
                    </S.ButtonWrap>
                </Link>
            </SwiperSlide>
        </S.ProductWrap>
    ))

    return (
        <>
                 <S.MainTextWrap>
                <S.MainTitle>강아지 컬러 추천 상품</S.MainTitle>
                <S.SortButtonWrapper>
                {
                    sortInfo.map((sortInfo, index) => (
                    <div key={index}>
                        <S.SortButtonWrap  onClick={() => onClickToActive(index)}>
                        <p>{sortInfo.title}</p><img src={`${process.env.PUBLIC_URL}/assets/images/store/down-arrow.svg`} alt='아래 아이콘'/>
                        </S.SortButtonWrap>
                        <S.SortModal className={isActive === index ? "active" : ""}>
                        {sortInfo.sub.map((subTitle, i) => (
                            <div key={i}>
                            <input 
                                value={i} type='radio' name={"sort" + index} 
                                checked={ 
                                    index === 0 ? productSort["color"] === sortInfo.sortOrder[i] : 
                                    index === 1 ? productSort["price"] === sortInfo.sortOrder[i] : 
                                        index === 2 ? productSort["size"] === sortInfo.sortOrder[i] : 
                                        productSort["sort"] === sortInfo.sortOrder[i] 
                                }
                                onChange={() => { onChangeToSort(index === 0 ? "color" : index === 1 ? "price" : index === 2 ? "size" : "sort", sortInfo.sortOrder[i]) }}
                            />
                            { index === 0 ? <S.ColorCircle subtitle={subTitle}></S.ColorCircle> : <p>{subTitle}</p>}
                            </div>
                        ))}
                        </S.SortModal>
                    </div>
                    ))
                }
                <S.SortButtonWrap onClick={onClickToReset}>
                        <p>초기화</p>
                    </S.SortButtonWrap>
                </S.SortButtonWrapper>
            </S.MainTextWrap>
            
            {sortFilteredProducts.length !== 0 ? (
                <S.ProductWraper $length={sortFilteredProducts.length}>
                    <Swiper
                        ref={allProductsSwiperRef}
                        key={filteredProducts.length}
                        slidesPerView={4}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                    >
                        {AllProducts}
                    </Swiper>
                </S.ProductWraper>
            ) : (
                <S.ProductWraper $length={sortFilteredProducts.length}>
                    <S.NoneMessage>"검색된 상품이 없습니다."</S.NoneMessage>
                </S.ProductWraper>
            )}


            <S.MainTextWrap>
                <S.MainTitle>강아지 BEST 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.BestProductWraper>
                <Swiper
                    ref={bestProductsSwiperRef}
                    key={filteredProducts.length}
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false, 
                    }}
                >
                    {bestProducts}
                </Swiper>
            </S.BestProductWraper>

            <S.MainTextWrap>
                <S.MainTitle>강아지 특가 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.SpecialLayout>
                {SpecialBigProduct}
                <S.SpecialProductWraper>
                    {SpecialProducts}
                </S.SpecialProductWraper>
            </S.SpecialLayout>

            <S.MainTextWrap>
                <S.MainTitle>강아지 컬러 추천 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.ProductWraper>
                {recommendProducts}
            </S.ProductWraper>
        </>
    );
};

export default StoreDog;
