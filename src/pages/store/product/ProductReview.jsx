import React, {useContext, useEffect, useState} from 'react';
import S from "./style";
import {useParams} from "react-router-dom";
import {ProductContext} from "../../../context/productContext";
import {useSelector} from "react-redux";


const ProductReview = () => {

    const { productState } = useContext(ProductContext);
    const { products } = productState;
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [activeTab, setActiveTab] = useState('info');
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newReview, setNewReview] = useState('');
    const { currentUser } = useSelector((state) => state.user);
    const memberId = currentUser.id;
    const [selectedRating, setSelectedRating] = useState(0);

    const foundProduct = products?.find((pr) => String((pr).id) === String(id));

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
                console.log('받아온 리뷰 데이터:', reviewData);
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


    const handleReviewSubmit = async () => {
        if(newReview.trim() === '') return;
        if(selectedRating === 0) {
            return alert("별점을 선택해주세요");
        }
        const token = localStorage.getItem('jwtToken');
        if(!token){
            return alert("로그인 후 이용해주세요")
        }

        const reviewData = {
            memberId: memberId,
            productId: foundProduct.id,
            reviewContent: newReview,
            reviewStar: selectedRating
        };

        console.log('전송할 리뷰 데이터:', reviewData);

        const response = await fetch(`http://localhost:10000/review/write`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(reviewData)
        });

        console.log('리뷰 작성 응답:', response);

        if (response.ok) {
            const updatedReviews = await fetch(`http://localhost:10000/review/reviews/${foundProduct.id}`);
            if (updatedReviews.ok) {
                const data = await updatedReviews.json();
                console.log('업데이트된 리뷰 데이터:', data);
                setReviews(data);
                setNewReview('');
                setSelectedRating(0);
            } else {
                alert('리뷰 조회 실패');
            }
        } else {
            const errorData = await response.text();
            console.error('리뷰 추가 실패:', errorData);
            alert('리뷰 추가 실패');
        }
    };


    const handleDeleteReview = async (reviewId) => {
        const review = reviews.find((review) => review.id === reviewId);

        if (!review) {
            return alert('리뷰를 찾을 수 없습니다.');
        }

        if (review.memberId !== memberId) {
            return alert('본인의 리뷰만 삭제 가능합니다.');
        }

        const token = localStorage.getItem('jwtToken');

        if (!token) {
            return alert('로그인 후 이용해주세요.');
        }

        try {
            const response = await fetch(`http://localhost:10000/review/delete/${reviewId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const updatedReviews = reviews.filter((review) => review.id !== reviewId);
                setReviews(updatedReviews);
                alert('리뷰가 삭제되었습니다.');
            } else {
                const errorText = await response.text();
                console.error('리뷰 삭제 실패:', errorText);
                alert('리뷰 삭제 실패: ' + errorText);
            }
        } catch (error) {
            console.error('리뷰 삭제 오류:', error);
            alert('리뷰 삭제 중 문제가 발생했습니다.');
        }
    };


    const renderStars = (rating, isSelectable = false, onSelect = null) => {
        return [...Array(5)].map((_, index) => (
            <span
                key={index}
                onClick={() => isSelectable && onSelect && onSelect(index + 1)}
                style={{
                    color: index < rating ? 'gold' : 'gray',
                    marginRight: '2px',
                    cursor: isSelectable ? 'pointer' : 'default'
                }}
            >
                ★
            </span>
        ));
    };

    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };

    const allReview = reviews.map(({
                                       id,
                                       reviewContent,
                                       reviewStar,
                                       memberNickname,
                                       reviewDate,
                                   }, i) => (
        <div key={i}>
            <div className="user-info-wrap">
                <S.HugReview>
                    <S.NickName>
                        <div>{renderStars(reviewStar)}</div>
                        <img src="/assets/images/community/default-myProfile.png" alt="사용자 프로필"/>
                    </S.NickName>
                    <S.ReviewContent>
                        <S.UserInfo>
                            <span>{memberNickname}</span>
                            <span>&nbsp;{reviewDate}</span>
                        </S.UserInfo>
                        <S.WithButton>
                            {reviewContent}
                        </S.WithButton>
                    </S.ReviewContent>
                    <button onClick={() => handleDeleteReview(id)}>
                        <img src="/assets/images/community/trash.jpg" alt="삭제아이콘"/>
                    </button>
                </S.HugReview>
                <S.LinePer></S.LinePer>
            </div>
        </div>
    ));

    return (
        <S.ReviewContainer>
            <S.ReviewCount>
                <span>전체 상품평 ({reviews?.length || 0} 건)</span>
                <span>
                    평균 별점: {reviews?.length > 0
                    ? (reviews.reduce((sum, review) => sum + review.reviewStar, 0) / reviews.length).toFixed(1)
                    : '0.0'}
                    &nbsp;
                    {renderStars(
                        reviews?.length > 0
                            ? Math.round(reviews.reduce((sum, review) => sum + review.reviewStar, 0) / reviews.length)
                            : 0
                    )}
                </span>
            </S.ReviewCount>
            <div>
                <S.ProductReview>
                    <S.ProductReviewDetail>
                        {allReview}
                    </S.ProductReviewDetail>
                </S.ProductReview>
                <div>
                    <S.NewReview>
                        <S.ReviewTitle>
                            <span>리뷰 남기기</span>
                            <div>
                                {renderStars(selectedRating, true, handleStarClick)}
                            </div>
                        </S.ReviewTitle>
                        <S.ReviewInput>
                            <input
                                type="text"
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="상품에 대한 솔직한 리뷰를 남겨주세요"
                            />
                            <button type="button" onClick={() => handleReviewSubmit(reviews.id)}>등록</button>
                        </S.ReviewInput>
                    </S.NewReview>
                </div>
            </div>
        </S.ReviewContainer>
    );
};

export default ProductReview;