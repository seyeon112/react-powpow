import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import CouponPopup from "./CouponPopup";
import { useSelector } from "react-redux";

const ProfileList = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const [couponData, setCouponData] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const id = currentUser.id; // 사용자 ID
    console.log(currentUser)

    // 쿠폰 데이터 가져오기
    useEffect(() => {
        const fetchCouponData = async () => {
            try {
                const response = await fetch(`http://localhost:10000/coupons/member/${id}`);
                if (!response.ok) {
                    // console.error("쿠폰 데이터를 가져오는 데 실패했습니다.");
                    return;
                }
                const data = await response.json();
                setCouponData(data);
            } catch (error) {
                // console.error(error);
                alert("쿠폰 데이터를 가져오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchCouponData();
    }, [id]);

    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);
    };

    return (
        <div>
            <S.MyHomeContainer>
                <S.MyHomeWrap>
                    <S.UpdateButtonWrap>
                        <button>
                            <Link to="/myhome/profile-update">수정하기</Link>
                        </button>
                    </S.UpdateButtonWrap>
                    <S.ProfileBoxWrap>
                        {/* members 배열을 올바르게 매핑 */}
                        <S.ProfileBox>
                            <S.ProfileImage>
                                {/* 프로필 이미지 렌더링 */}
                                <img
                                    src={
                                        currentUser.memberImage ||
                                        currentUser.memberFilePath && currentUser.memberFileName
                                            ? `http://localhost:10000/member/display?fileName=${currentUser.memberFilePath}/${currentUser.memberFileName}`
                                            : `${process.env.PUBLIC_URL}/assets/images/default-profile-image.jpg`
                                    }
                                    alt="프로필 사진"
                                />
                                <p>{currentUser.memberNickname}</p>
                            </S.ProfileImage>
                            <S.ProfileBoxCouponWrap onClick={handleShowPopup}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/myhome/coupon-icon.svg`}
                                    alt="쿠폰"
                                />
                                <p>쿠폰</p>
                                <p>{couponData.length}</p>
                            </S.ProfileBoxCouponWrap>
                        </S.ProfileBox>
                        <S.MemberInputBoxContainer>
                            <S.MemberInputBoxWrap>
                                <S.MemberInputBox>
                                    <S.h7>이름</S.h7>
                                    <S.h8>{currentUser.memberName}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>닉네임</S.h7>
                                    <S.h8>{currentUser.memberNickname}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>아이디(이메일)</S.h7>
                                    <S.h8>{currentUser.memberEmail}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7>휴대폰번호</S.h7>
                                    <S.h8>{currentUser.memberPhone}</S.h8>
                                </S.MemberInputBox>
                                <S.MemberInputBox>
                                    <S.h7Address>주소</S.h7Address>
                                    <S.MemberInputAddress>
                                        <S.h8>{currentUser.memberZipcode}</S.h8>
                                        <S.h8>{currentUser.memberAddress}</S.h8>
                                        <S.h8>{currentUser.memberAddressDetail}</S.h8>
                                    </S.MemberInputAddress>
                                </S.MemberInputBox>
                            </S.MemberInputBoxWrap>
                            <S.MemeberUnsubscribe to="/unsubscribe">
                                *즉시탈퇴 &gt; POWPOW 탈퇴하기
                            </S.MemeberUnsubscribe>
                        </S.MemberInputBoxContainer>
                    </S.ProfileBoxWrap>
                </S.MyHomeWrap>
            </S.MyHomeContainer>

            {/* 팝업 */}
            {isOpenPopup && (
                <CouponPopup
                    couponData={couponData}
                    handleShowPopup={handleShowPopup}
                    isOpenPopup={isOpenPopup}
                    setIsOpenPopup={setIsOpenPopup}
                />
            )}
        </div>
    );
};

export default ProfileList;
