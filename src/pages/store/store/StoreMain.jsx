import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductContext } from '../../../context/productContext'; 
import HeartBtn from '../../community/community/HeartBtn'; 
import S from './style';
import {Grid, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import theme from '../../../global/theme';
import { Link, useLocation } from 'react-router-dom';
import ToCommunityBtn from './ToCommunityBtn';
import StoreCatBtn from './StoreCatBtn';
import StoreDogBtn from './StoreDogBtn';
import InfiniteScroll from 'react-infinite-scroll-component';

const StoreMain = () => {
    const { productState } = useContext(ProductContext);
    const { products } = productState;

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortFilteredProducts, setSortFilteredProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const itemsPerPage = 10;
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

    useEffect(() => {
    
        if (products && products.length > 0) {
            const sortfiltered = products.filter((product) => {
                const isColorMatch = productSort.color ? product.productColor === productSort.color : true;
                const isSizeMatch = productSort.size ? product.productSize === productSort.size : true;
                return isColorMatch && isSizeMatch;
            });
    
            // 정렬 처리
            if (productSort.price) {
                if (productSort.price === "DESC") {
                    sortfiltered.sort((a, b) => b.productPrice - a.productPrice);
                } else if (productSort.price === "ASC") {
                    sortfiltered.sort((a, b) => a.productPrice - b.productPrice);
                }
            }
            if (productSort.sort) {
                if (productSort.sort === "NEW") {
                    sortfiltered.sort((a, b) => new Date(b.productDate) - new Date(a.productDate));
                } else if (productSort.sort === "STAR") {
                    sortfiltered.sort((a, b) => b.reviewStar - a.reviewStar);
                } else if (productSort.sort === "COUNT") {
                    sortfiltered.sort((a, b) => b.productStock - a.productStock);
                }
            }
    
            
            setFilteredProducts(sortfiltered); // 필터링 결과 저장
            setSortFilteredProducts(sortfiltered); // 정렬 결과 저장

        // 인피니티 스크롤 초기 데이터 설정
            setDisplayedProducts(sortfiltered.slice(0, itemsPerPage));
            setCurrentPage(1);
            setHasMore(sortfiltered.length > itemsPerPage);
        }
    }, [products, productSort]);
        
    const fetchMoreProducts = () => {
        const nextPageStart = currentPage * itemsPerPage;
        const nextPageEnd = nextPageStart + itemsPerPage;
        const nextProducts = filteredProducts.slice(nextPageStart, nextPageEnd);

        if (nextProducts.length === 0) {
            setHasMore(false); // 더 불러올 데이터가 없으면 false 설정
        } else {
            setDisplayedProducts((prev) => [...prev, ...nextProducts]);
            setCurrentPage((prev) => prev + 1);
        }
    };

    // 상품 
    const AllProducts = displayedProducts.map(({
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

    const catRecommendProducts = filteredProducts.filter((p) => p.productAnimal === 'cat').slice(0, 8).map(({
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


    const dogRecommendProducts = filteredProducts.filter((p) => p.productAnimal === 'dog').slice(0, 8).map(({
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

            {/* <S.StoreToCommunityBanner>
                <img src={`${process.env.PUBLIC_URL}/assets/images/store/to-community-banner.png`} alt="배너2" />
                <ToCommunityBtn />
            </S.StoreToCommunityBanner> */}

           <S.MainTextWrap>
                <S.MainTitle>고양이 추천 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.ProductWraper>
                {catRecommendProducts}
            </S.ProductWraper>
                
            <S.GoShopping>
                <img src={`${process.env.PUBLIC_URL}/assets/images/store/toshopbanner.png`} alt="쇼핑하러 가기 이미지" />
                <S.GoShoppingTitle>
                    <p>고양이용품 쇼핑,</p>
                    <span>지금 powpow에서 시작하세요</span>
                    <span>powpow 고양이 기획전 보러가기</span>
                    <StoreCatBtn />
                </S.GoShoppingTitle>
            </S.GoShopping>

            <S.MainTextWrap>
                <S.MainTitle>강아지 추천 상품</S.MainTitle>
            </S.MainTextWrap>
            <S.ProductWraper>
                {dogRecommendProducts}
            </S.ProductWraper>

            <S.GoShopping2>
                <S.GoShoppingTitle2>
                    <p>강아지용품 쇼핑,</p>
                    <span>지금 powpow에서 시작하세요</span>
                    <span>powpow 강아지 기획전 보러가기</span>
                    <StoreDogBtn />
                </S.GoShoppingTitle2>
                <img src={`${process.env.PUBLIC_URL}/assets/images/store/toshopbanner2.png`} alt='배너2'></img>
            </S.GoShopping2>

            {/* 인피니티 스크롤 전체 상품 */}
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
                <S.InfiniteScrollContainer>
                    <InfiniteScroll
                        dataLength={displayedProducts.length}
                        next={fetchMoreProducts}
                        hasMore={hasMore}
                        loader={<p>Loading...</p>}
                    >
                    <S.ProductWraper $length={sortFilteredProducts.length}>{AllProducts}</S.ProductWraper>
                    </InfiniteScroll>
                </S.InfiniteScrollContainer>
            ) : (
                <S.ProductWraper $length={sortFilteredProducts.length}>
                    <S.NoneMessage>"검색된 상품이 없습니다."</S.NoneMessage>
                </S.ProductWraper>
            )}

        </>
    );
};

export default StoreMain;
