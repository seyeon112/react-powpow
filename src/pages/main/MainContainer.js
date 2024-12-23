import React, { useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import S from "./style";
import SwiperCore from "swiper/core";
import HeartBtn from "../community/community/HeartBtn";
import { ProductContext } from "../../context/productContext";
import { CommunityContext } from "../../context/communityContext";
SwiperCore.use([Pagination]);

const Main = () => {

  const bannerCount = [1, 2, 3];
  const bannerLength = bannerCount.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const onChangeIndex = (index) => { setActiveIndex(index + 1) } 

  // 상품
  const { productState, productAction } = useContext(ProductContext);
  const { products } = productState;
  const { setProducts } = productState; 

  // 게시글
  const { communityState, communityAction } = useContext(CommunityContext);
  const { communites } = communityState;

  const recommendCommunityLarge = communites.slice(0, 1).map(({id, imageName1, memberNickName}) => (
      <S.LargePost key={id}>
        <Link to={`/post/read/${id}`}>
          <S.MainProfileInfo>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
              alt="프로필"
            />
            <span className="UserId">{memberNickName}</span>
          </S.MainProfileInfo>
          <S.PostImage>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
              alt="메인포스트"
            />
          </S.PostImage>
        </Link>
      <S.Heart>
          <HeartBtn id={id} type={"community"} />
      </S.Heart>
    </S.LargePost>
  ))

  // 커뮤니티 글 6개
  const recommendCommunity = (
    <S.SmallWrap>
      <S.SmallPost>
        {communites.slice(1, 7).map(({id, imageName1, memberNickName}) => (
          <S.Post key={id}>
            <Link to={`/post/read/${id}`}>
              <S.SmallPostImage
                src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
                alt={`게시물-${id + 1}`}
              />
              <S.ProfileInfo>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/layout/profile.png`}
                  alt="프로필"
                />
                <span className="UserId">{memberNickName}</span>
              </S.ProfileInfo>
            </Link>
            <S.Heart>
                <HeartBtn id={id} type={"community"} />
            </S.Heart>
          </S.Post>
        ))}
      </S.SmallPost>
    </S.SmallWrap>
  )

  // 추천 상품 12개
  const recommendProducts = products.slice(0, 12).map(({
    id, productName, productFilePath, productFileName, productPrice, productDiscount
  }, index) => {
    const isDiscount = productDiscount !== 0;
    return (
      <S.ProductCard key={index}>
        <Link to={`store/read/${index + 1}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`}
            alt={productName}
          />
        </Link>
        <S.Heart>
            <HeartBtn id={id} type={"product"} />
        </S.Heart>
        <S.CardTextWrap>
          <S.ProductName>{productName}</S.ProductName>
          <S.DiscountText>
            {isDiscount && (
              <b>
                <span
                  style={{
                    color: "#C83F3F",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {productDiscount}%
                </span>
              </b>
            )}
            {productPrice.toLocaleString('ko-KR')}원
          </S.DiscountText>
        </S.CardTextWrap>
        <S.Cart className="small">
          <Link to={`/store/read/${id}`}>
            <p>상세보기</p>
          </Link>
        </S.Cart>
      </S.ProductCard>
    );
  })

  return (
    <>
      <Header />
        <S.SwiperContainer>
          <Swiper 
            onSlideChange={(e) => onChangeIndex(e.realIndex) }
            className="mySwiper1"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ dynamicBullets: true }}
          >
            {[1, 2, 3].map((num, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/layout/banner${num}.png`}
                  alt={`메인배너$${num}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <S.SwiperPager>
            <p>{`${activeIndex} / ${bannerLength}`}</p>
          </S.SwiperPager>
        </S.SwiperContainer>

        <S.SwiperContainer>
          <S.BannerTitle>
            <h2>지금 제일 인기 있는 상품이에요.</h2>
          </S.BannerTitle>
          <Swiper
            className="mySwiper2"
            slidesPerView={"auto"}
            spaceBetween={20}
          >
            {[
              { id: 1, src: "dentalgum1.png", coupon: "강아지 인기" },
              { id: 2, src: "shampoo3.png", coupon: "고양이 특가" },
              { id: 3, src: "feed.png", coupon: "세일 특가" },
              { id: 4, src: "dentalgum1.png", coupon: "강아지 인기" },
              { id: 5, src: "shampoo3.png", coupon: "고양이 특가" },
              { id: 6, src: "feed.png", coupon: "세일 특가" },
            ].map(({src, coupon, id}, i) => (
              <SwiperSlide key={i}>
                <S.ImageAndCart>
                  <S.HotImage>
                    <Link to="/store">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/${src}`}
                        alt={`상품-${i + 1}`}
                      />
                    </Link>
                    <S.Coupon>{coupon}</S.Coupon>
                    <S.Heart>
                        <HeartBtn id={id} type={"product"} />
                    </S.Heart>
                  </S.HotImage>
                  <S.Cart>
                    <Link to={"/store"}>
                      {/* <img
                        src={`${process.env.PUBLIC_URL}/assets/images/layout/shopping_cart_icon.png`}
                        alt="장바구니아이콘"
                      /> */}
                      <p>인기상품 보러가기</p>
                    </Link>
                  </S.Cart>
                </S.ImageAndCart>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperContainer>

        <S.Container>
          <S.TestWrap style={{ position: "relative" }}>
            <img
              className="banner"
              src={`${process.env.PUBLIC_URL}/assets/images/layout/testbanner05.png`}
              alt="테스트 배너"
            />
            <S.TestButton to="/petsonal">
              테스트 버튼
            </S.TestButton>
          </S.TestWrap>

          <S.RecommendSection>
            <S.CommunityPlusMore>
              <S.TitleWrapper>
                <h2>이런 게시물은 어때요?</h2>
                <Link to="/community">+ 더보기</Link>
              </S.TitleWrapper>
            </S.CommunityPlusMore>

            <S.RecommendContainer>
              {recommendCommunityLarge}
              {recommendCommunity}
            </S.RecommendContainer>
          </S.RecommendSection>

          <S.SubBanner>
            <Link to="/petsonal">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/main-sub-image.png`}
                alt="서브 배너"
              />
            </Link>
          </S.SubBanner>

          <S.ProductContainer>
            <S.ProductHeader>
              <h2>POWPOW의 추천상품이에요!</h2>
              <Link to="/product">
                <strong>+ 더보기</strong>
              </Link>
            </S.ProductHeader>

            <S.ProductsWrap>
              <S.Products>
                  {recommendProducts}
              </S.Products>
            </S.ProductsWrap>
          </S.ProductContainer>
        </S.Container>
      <Footer />
    </>
  );
};

export default Main;
