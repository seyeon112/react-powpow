import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import S from "./style";
import HeartBtn from '../../community/community/HeartBtn';
import ProductDetail from "./ProductDetail";
import ProductReview from "./ProductReview";
import ProductRefundPolicy from "./ProductRefundPolicy";
import ProductDelivery from "./ProductDelivery";
import { ProductContext } from "../../../context/productContext";
import { StarRating } from "../../../context/starContext";

const ProductContainer = () => {
    const { id } = useParams();
    const { productState } = useContext(ProductContext);
    const { products } = productState;
    const [count, setCount] = useState(1);
    const [activeTab, setActiveTab] = useState('info');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const foundProduct = products?.find((pr) => String((pr).id) === String(id));

    // const {
    //     imageName1, imageName2, imageName3, imageName4,
    //     imagePath1, imagePath2, imagePath3, imagePath4
    // } = foundProduct;

    // 연관 상품만
    useEffect(() => {
        if (products && products.length > 0 && foundProduct) {
            const filtered = products
                .filter(product =>
                    product.productCategory === foundProduct.productCategory &&
                    product.id !== foundProduct.id
                )
                .slice(0, 10);
            setRelatedProducts(filtered);
        }
    }, [products, foundProduct]);
    
    // 리뷰 데이터 가져오기
    useEffect(() => {
        const getReviews = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:10000/review/reviews/${id}`);
                if (!response.ok) {
                    throw new Error('리뷰 데이터를 불러오는데 실패했습니다.');
                }
                const reviewData = await response.json();
                setReviews(reviewData);
            } catch (err) {
                setError(err.message);
                console.error('리뷰 데이터 조회 오류:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getReviews();
        }
    }, [id]);

    if (!foundProduct) {
        return <div>상품을 찾을 수 없습니다</div>;
    }

    const handleMinus = () => {
        setCount(prev => Math.max(1, prev - 1));
    };

    const handlePlus = () => {
        setCount(prev => Math.min(foundProduct.productStock, prev + 1));
    };


    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span
                key={index}
                style={{
                    color: index < rating ? 'gold' : 'gray',
                    marginRight: '2px'
                }}
            >
                ★
            </span>
        ));
    };

    const renderTabContent = () => {
        switch(activeTab) {
            case 'info':
                return <ProductDetail product={foundProduct} />;
            case 'review':
                return <ProductReview
                    product={foundProduct}
                    reviews={reviews}
                    loading={loading}
                    error={error}
                />;
            case 'delivery':
                return <ProductDelivery />;
            case 'change':
                return <ProductRefundPolicy />;
            default:
                return <ProductDetail product={foundProduct} />;
        }
    };

    const RelatedProducts = () => (
        <Swiper
            slidesPerView={4}
            spaceBetween={24}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
                paddingBottom: '30px',
                '--swiper-pagination-bottom': '0px',
                '--swiper-pagination-color': '#131313',
                '--swiper-pagination-bullet-inactive-color': '#888888'
            }}
        >
            {relatedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                    <S.Product>
                        <S.ProductImageWrap>
                            {/*<HeartBtn />*/}
                            <Link to={`/store/read/${product.id}`}>
                                <S.Images
                                    src={`${process.env.PUBLIC_URL}/assets/images/products/${product.productFileName}`}
                                    alt={product.productName}
                                    style={{borderRadius : "20px"}}
                                />
                            </Link>
                        </S.ProductImageWrap>
                        <S.ProductInfo>
                            <Link to={`/store/read/${product.id}`}>
                                <S.ProductCalled>{product.productName}</S.ProductCalled>
                            </Link>
                            <S.ProductPrice>{product.productPrice.toLocaleString()} 원</S.ProductPrice>
                        </S.ProductInfo>
                        <Link to="/cart">
                        <button>담기</button>
                        </Link>
                    </S.Product>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    const averageRating = reviews.length > 0
        ? (reviews.reduce((sum, review) => sum + review.reviewStar, 0) / reviews.length)
        : 0;


    const handleBuyNow = () => {
        if (foundProduct) {
            const productWithQuantity = { ...foundProduct, quantity: count };
            navigate("/pay", { state: { products: [productWithQuantity] } });
        }
    }

    return (
        <div>
            <div className="body-container">
                <S.BodyWrap>
                    <S.ProductInfoLeft>
                        <S.MainImg
                            src={`${process.env.PUBLIC_URL}/assets/images/products/${foundProduct.productFileName}`}
                            alt={foundProduct.productName}
                            style={{borderRadius: "20px"}}
                        />
                        <S.SubImgWrap>
                            {[
                                foundProduct.productFileName,
                                foundProduct.productFileName2,
                                foundProduct.productFileName3,
                                foundProduct.productFileName4
                            ]
                                .filter(fileName => fileName) // 값이 있는 파일명만 필터링
                                .map((fileName, index) => (
                                    <img
                                        key={index}
                                        src={`${process.env.PUBLIC_URL}/assets/images/products/${fileName}`}
                                        alt={`${foundProduct.productName} view ${index + 1}`}
                                        style={{borderRadius: "20px"}}
                                    />
                                ))}
                        </S.SubImgWrap>
                        <S.InfoSeller>
                            <p>상품코드: {foundProduct.productCode} | 원산지: 상품설명 참조</p>
                        </S.InfoSeller>
                    </S.ProductInfoLeft>
                    <S.ProductInfoRight>
                        <S.star>
                            {renderStars(Math.round(averageRating))}
                            <span>평균 {averageRating.toFixed(1)}</span>
                            <span>| 리뷰 {reviews.length || 0} 개</span>
                        </S.star>

                        <S.IconsWrap>
                            <HeartBtn/>
                        </S.IconsWrap>

                        <S.ProductName>{foundProduct.productName}</S.ProductName>

                        {foundProduct.productDiscount && <S.Coupon>할인가</S.Coupon>}

                        <S.ProductPriceWrap>
                            {foundProduct.productDiscount && (
                                <S.Percent>{foundProduct.productDiscount}%</S.Percent>
                            )}
                            <S.RealPrice>{foundProduct.productRealPrice?.toLocaleString()} 원</S.RealPrice>
                            <S.Price>{foundProduct.productPrice.toLocaleString()} 원</S.Price>
                        </S.ProductPriceWrap>

                        <S.PriceCheck>
                            <S.TagWrap>
                                <p>배송정보</p>
                            </S.TagWrap>
                            <S.InfoWrap>
                                <S.DeliveryInfo>
                                    <p>{foundProduct.deliveryCompany}</p>
                                    <p>배송비: {foundProduct.deliveryFee?.toLocaleString()}원</p>
                                    <p>10/01(화) 도착예정</p>
                                </S.DeliveryInfo>
                            </S.InfoWrap>
                        </S.PriceCheck>

                        <S.ProductBox>
                            <S.ProductNamein>{foundProduct.productName}</S.ProductNamein>
                            <S.Box>
                                <S.Select>
                                    <S.BtnMinus type="button" onClick={handleMinus}>-</S.BtnMinus>
                                    <input value={count} readOnly name="countProduct"/>
                                    <S.BtnPlus type="button" onClick={handlePlus}>+</S.BtnPlus>
                                </S.Select>
                                <S.Stock>재고 현황: {foundProduct.productStock}개</S.Stock>
                                <S.PriceIs>{(foundProduct.productPrice * count).toLocaleString()} 원</S.PriceIs>
                            </S.Box>
                        </S.ProductBox>

                        <S.ButtonContainer>
                            <Link to="/cart">
                                <S.CheckButton type="button">장바구니</S.CheckButton>
                            </Link>
                            <S.PaymentButton onClick={handleBuyNow}>바로구매</S.PaymentButton>
                        </S.ButtonContainer>
                    </S.ProductInfoRight>
                </S.BodyWrap>

                <S.Together>함께보면 좋은 상품</S.Together>
                <S.ProductWrap>
                    <RelatedProducts/>
                </S.ProductWrap>
            </div>

            <S.Container3>
                <S.InfoWrap>
                    <S.TabWrap>
                        {['info', 'review', 'delivery', 'change'].map((tab) => (
                            <button
                                key={tab}
                                className={`${tab}-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === 'info' && '상품정보'}
                                {tab === 'review' && '상품평'}
                                {tab === 'delivery' && '주문/배송안내'}
                                {tab === 'change' && '교환/반품안내'}
                            </button>
                        ))}
                    </S.TabWrap>
                    {renderTabContent()}
                </S.InfoWrap>
            </S.Container3>
        </div>
    );
};

export default ProductContainer;