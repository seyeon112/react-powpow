import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";

const ProfileUpdate = () => {
    // Redux 상태 가져오기
    const { currentUser } = useSelector((state) => state.user);

    // State 선언
    const [authNumber, setAuthNumber] = useState(""); // 인증 번호 입력
    const [attempts, setAttempts] = useState(0); // 인증 시도 횟수
    const [isBlocked, setIsBlocked] = useState(false); // 인증 제한 여부
    const [petImagePreview, setPetImagePreview] = useState(null); // 프로필 이미지 미리보기
    const [userData, setUserData] = useState(currentUser); // 사용자 데이터 관리
    const [isVisible, setIsVisible] = useState(false); // 인증번호 입력창 표시 여부
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);


    const [address, setAddress] = useState({
        postcode: "",
        baseAddress: "",
        detailAddress: "",
    });


    const navigate = useNavigate();
    // const localJwtToken = localStorage.getItem("jwtToken");
    const { register, handleSubmit, formState: { isSubmitting } } = useForm({ mode: "onChange" });

    // // 초기화 및 인증 체크
    // useEffect(() => {
    //     if (!localJwtToken) {
    //         alert("로그인 후 이용해주시길 바랍니다.");
    //         navigate("/login");
    //     }
    // }, [navigate, localJwtToken]);

    // 인증번호 발송
    const transferSms = async () => {
        try {
            const response = await fetch("http://localhost:10000/member/sms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(currentUser.memberPhone),
            });
            const data = await response.json();
            setAuthNumber(data.verificationCode);
            alert("인증번호를 발송했습니다.");
        } catch (error) {
            console.error("SMS 발송 오류:", error);
        }
    };

    // 인증번호 확인
    const confirmVerificationCode = () => {
        const testCode = "123456"; // 임시 테스트 코드

        if (isBlocked) {
            alert("인증 시도 횟수를 초과했습니다. 다시 시도해주세요.");
            return;
        }

        if (authNumber === testCode) {
            alert("인증번호가 일치합니다.");
            setAttempts(0);
            setIsBlocked(false);
            setIsVisible(false);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);

            if (newAttempts >= 3) {
                alert("인증횟수를 초과했습니다. 다시 입력해주세요.");
                setAuthNumber("");
                setAttempts(0);
                setIsBlocked(true);
            } else {
                alert(`인증번호가 일치하지 않습니다. (${newAttempts}/3)`);
            }
        }
    };

    const handleComplete = (data) => {
        setAddress((prev) => ({
            ...prev,
            postcode: data.zonecode,
            baseAddress: data.address,
        }));
        setIsPostcodeOpen(false);
    };

    // 폼 제출 핸들러
    const handleFormSubmit = handleSubmit(async (data) => {

        try {
            const formData = new FormData();

            // 수정 완료
            console.log("userData", userData)
            console.log("data", data)

            // 이미지 등록 및 수정된 데이터를 userData에 반영시킨다.
            Object.entries(data).forEach(([key, value]) => {
                setUserData({ ...userData, [key]: value })
                if(key === 'memberImage'){
                    formData.append("uploadFile", value[0])
                }else{
                    const emptyImage = new Blob([], { type: 'image/png'})
                    formData.append("uploadFile", emptyImage)
                }
            });

            const { 
                memberName, memberNickname, memberEmail, memberPhone, memberZipcode,
                memberAddress, memberAddressDetail
            } = userData;

            const uploadData = {
                memberName : memberName,
                memberNickname : memberNickname,
                memberEmail : memberEmail,
                memberPhone : memberPhone,
                memberZipcode : address.postcode,
                memberAddress : address.baseAddress,
                memberAddressDetail : memberAddressDetail
            }

            console.log("uploadData", uploadData)

            // 나머지 데이터를 모두 append한다.
            Object.entries(uploadData).forEach(([key, value]) => {
                formData.append(key, value)
            });

            const uploadResponse = await fetch("http://localhost:10000/member/upload", {
                method: "POST",
                body: formData,
            });
            
            const updatedResponse = await uploadResponse.json();
            console.log("Update response: ", updatedResponse);

            if(updatedResponse?.uuid){
                // uuid를 append해서 보낸다
                formData.append("uuid", updatedResponse.uuid);
                
            }else{
                // 아니면 그냥 보낸다. uuid없이 보낸다.
                formData.append("uuid", "");
            }
            
            const updateResponse = await fetch("http://localhost:10000/member/profileEdit", {
                method: "PUT",
                body: formData,
            });

            const updateData = await updateResponse.json();
            console.log(updateData)
            alert(updateData.message);
            navigate("/myhome");

        } catch (error) {
            console.error("폼 제출 오류:", error);
        }
    });

    // 사용자 데이터 업데이트 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <S.MyHomeContainer encType="multipart/form-data" onSubmit={handleFormSubmit}>
            <S.MyHomeWrap>
                {/* 완료 버튼 */}
                <S.UpdateButtonWrap>
                    <button disabled={isSubmitting}>완료</button>
                </S.UpdateButtonWrap>

                {/* 프로필 박스 */}
                <S.ProfileBoxWrap>
                    <S.ProfileBox>
                        {/* 프로필 이미지 */}
                        <S.ProfileImage>
                            <img
                                src={petImagePreview || `http://localhost:10000/member/display?fileName=${currentUser.memberFilePath}/${currentUser.memberFileName}`}
                                alt="프로필사진"
                            />
                            <p>{currentUser.memberNickname}</p>
                        </S.ProfileImage>

                        {/* 이미지 편집 */}
                        <S.ProfileBoxImageWrap>
                            <S.EditButton as="label" htmlFor="petImageInput">
                                이미지 편집
                            </S.EditButton>
                            <input
                                id="petImageInput"
                                type="file"
                                style={{ display: "none" }}
                                {...register("memberImage", {
                                    validate: (files) => {
                                        console.log("validate", files[0] )
                                        const file = files[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => setPetImagePreview(reader.result);
                                            reader.readAsDataURL(file);
                                        }
                                    },
                                })}
                            />
                        </S.ProfileBoxImageWrap>
                    </S.ProfileBox>

                    {/* 입력 폼 */}
                    <S.MemberInputBoxContainer>
                        <S.MemberInputBoxWrap>
                            <S.MemberInputBox>
                                <S.h7>이름</S.h7>
                                <input
                                    placeholder="이름을 입력하세요"
                                    {...register("memberName")}
                                    value={userData.memberName}
                                    onChange={handleChange}
                                />
                            </S.MemberInputBox>

                            <S.MemberInputBox>
                                <S.h7>닉네임</S.h7>
                                <input
                                    placeholder="닉네임을 입력하세요"
                                    {...register("memberNickname")}
                                    value={userData.memberNickname}
                                    onChange={handleChange}
                                />
                            </S.MemberInputBox>

                            <S.MemberInputBox>
                                <S.h7>아이디(이메일)</S.h7>
                                <p>{currentUser.memberEmail}</p>
                            </S.MemberInputBox>

                            <S.MemberInputBox>
                                <S.h7>휴대폰번호</S.h7>
                                <S.MemberCertification>
                                    <input
                                        placeholder="휴대폰 번호를 입력하세요"
                                        value={userData.memberPhone}
                                        onChange={handleChange}
                                    />
                                    <S.AuthButton type = "button" onClick={() => setIsVisible(true)}>인증번호</S.AuthButton>
                                </S.MemberCertification>
                            </S.MemberInputBox>

                            {isVisible && (
                                <S.MemberInput2Box>
                                    <S.MemberCertification>
                                        <input
                                            placeholder="인증 번호를 입력하세요"
                                            value={authNumber}
                                            onChange={(e) => setAuthNumber(e.target.value)}
                                        />
                                        <S.AuthButton type="button" onClick={confirmVerificationCode}>
                                            확인
                                        </S.AuthButton>
                                    </S.MemberCertification>
                                </S.MemberInput2Box>
                            )}


                            <S.MemberInputBox>
                                <S.h7Address>주소</S.h7Address>
                                <S.MemberInputAddress>
                                    <S.ZipCode>
                                        <input
                                            placeholder="우편번호"
                                            {...register("memberZipcode")}
                                            value={address.postcode} // 상태값을 반영
                                            onChange={
                                                (e) =>
                                                    setAddress((prev) => ({
                                                        ...prev,
                                                        postcode: e.target.value,
                                                    })) // postcode만 업데이트
                                            }
                                            readOnly
                                        />
                                        <S.AuthButton
                                            type="button"
                                            onClick={() => setIsPostcodeOpen(true)}
                                        >
                                            우편번호
                                        </S.AuthButton>
                                    </S.ZipCode>
                                    {isPostcodeOpen && (
                                        <S.ModalBackground>
                                            <S.ModalContent>
                                                <S.CloseAddressBtn
                                                    type="button"
                                                    onClick={() => setIsPostcodeOpen(false)}
                                                >
                                                    닫기
                                                </S.CloseAddressBtn>
                                                <DaumPostcode
                                                    onComplete={handleComplete}
                                                    style={{ width: "100%", height: "400px" }}
                                                />
                                            </S.ModalContent>
                                        </S.ModalBackground>
                                    )}
                                    <input
                                        placeholder="기본주소"
                                        id="Sample6Address"
                                        {...register("memberAddress")}
                                        value={address.baseAddress} // 상태값을 반영
                                        onChange={
                                            (e) =>
                                                setAddress((prev) => ({
                                                    ...prev,
                                                    baseAddress: e.target.value,
                                                })) // baseAddress만 업데이트
                                        }
                                        readOnly
                                    />
                                    <input
                                        id="Sample6DetailAddress"
                                        placeholder="상세주소"
                                        {...register("memberAddressDetail")}
                                        value={userData.memberAddressDetail}
                                        onChange={handleChange}
                                    />
                                </S.MemberInputAddress>
                            </S.MemberInputBox>
                        </S.MemberInputBoxWrap>
                    </S.MemberInputBoxContainer>
                </S.ProfileBoxWrap>
            </S.MyHomeWrap>
        </S.MyHomeContainer>
    );
};

export default ProfileUpdate;
