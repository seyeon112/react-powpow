import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import S from "./style"; 
import { FindContext } from "../../context/findContext";

const FindId = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState(""); 
  const [attempts, setAttempts] = useState(0); 
  const [isBlocked, setIsBlocked] = useState(false); 
  const [allCheck, setAllCheck] = useState(false); 
  const { action } = useContext(FindContext);
  const [verificationCode, setVerificationCode] = useState(""); // 받아온 인증번호
  const [ memberEmail ] = useState(""); // 이메일 상태 추가
  const { setMemberEmail } = action;


  // 인증번호 발송
  const transferSms = async () => {
    if (!phoneNumber) {
      return alert("휴대폰 번호를 입력해주세요.");
    }

    await fetch("http://localhost:10000/member/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( phoneNumber )
    })
      .then((res) => res.json())
      .then((data) => setVerificationCode(data.verificationCode))
      .catch((error) => {
        console.error("Error:", error);
      });

    return alert("인증번호를 발송했습니다.");
  };

  // 회원 조회
  const findMemberByPhone = async () => {
    if (!phoneNumber) {
      return alert("휴대폰 번호를 입력해주세요.");
    }

    await fetch(`http://localhost:10000/member/find-id/${phoneNumber}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.memberEmail);
        if (data && data.memberEmail) {
          setMemberEmail(data.memberEmail);
          alert("회원 정보를 찾았습니다.");
        } else {
          alert("해당하는 회원 정보가 없습니다.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("회원 조회 실패");
      });
  };

  // 인증번호 확인
  const confirmVerificationCode = () => {
    if (isBlocked) {
      return alert("인증 시도 횟수를 초과했습니다. 다시 시도해주세요.");
    }

    if (authNumber === verificationCode) {  
      alert("인증번호가 일치합니다.");
      setAttempts(0);
      setIsBlocked(false);
      setAllCheck(true);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        alert("인증횟수를 초과했습니다. 다시 입력해주세요.");
        setAuthNumber("");
        setAttempts(0);
        setIsBlocked(true);
      } else {
        setAllCheck(false);
        alert(`인증번호가 일치하지 않습니다. (${newAttempts}/3)`);
      }
    }
  };



  return (
    <>
      <S.InputContainer>
        <S.LogoBox>
          <S.LogoWrap>
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </Link>
          </S.LogoWrap>
        </S.LogoBox>

        <S.InputWrapper>
          <S.Label htmlFor="name">이름</S.Label>
          <S.Input
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputWrapper>

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="phone">휴대폰 번호</S.Label>
            <S.Input
              type="text"
              id="phone"
              name="phone"
              placeholder="(-)없이 입력해주세요."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <S.AuthButton type="button" onClick={transferSms}>
              인증요청
            </S.AuthButton>
          </S.InputWrapper>
        </S.AuthNumberContainer>

        <S.AuthNumberContainer>
          <S.InputWrapper>
            <S.Label htmlFor="authNumber">인증번호</S.Label>
            <S.Input
              type="text"
              id="authNumber"
              name="authNumber"
              placeholder="인증번호"
              value={authNumber}
              onChange={(e) => setAuthNumber(e.target.value)}
            />
            <S.AuthButton type="button" onClick={confirmVerificationCode}>
              확인
            </S.AuthButton>
          </S.InputWrapper>
        </S.AuthNumberContainer>

        <Link to={{ pathname: "/find/find-complete", state: { memberEmail } }}>
          <S.NextButton type="button" disabled={!allCheck} onClick={findMemberByPhone}>
            다음
          </S.NextButton>
        </Link>
      </S.InputContainer>
    </>
  );
};

export default FindId;
