import React, { useContext, useState } from "react";
import S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { JoinContext } from "../../context/joinContext";

const JoinPhone = () => {
  const { state, action } = useContext(JoinContext);
  const [authNumber, setAuthNumber] = useState(""); // 인증 번호 상태
  const [attempts, setAttempts] = useState(0); // 인증번호 횟수
  const [isBlocked, setIsBlocked] = useState(false); // 인증횟수 초과
  const [verificationCode, setVerificationCode] = useState(""); // 받아온 인증번호
  const [allCheck, setAllCheck] = useState(false); // 모든 검증 확인
  const navigate = useNavigate();
  const memberPhone = state.phone;

  const handleNextClick = (e) => {
    // 입력 값 확인
    if (!state.phone) {
      e.preventDefault();
      return alert("휴대폰 번호를 입력해주세요.");
    }
    if (!authNumber) {
      e.preventDefault();
      return alert("인증번호를 입력해주세요.");
    }

    if (allCheck && state.member === "buyer") {
      navigate("/join/buyer-join");
    } else if (allCheck && state.member === "seller") {
      navigate("/join/seller-join");
    } else {
      e.preventDefault();
      return alert("모든 인증 절차를 완료해주세요.");
    }
  };
  

  const transferSms = async () => {
    if (!memberPhone) {
      return alert("휴대폰 번호를 입력해주세요.");
    }

    await fetch("http://localhost:10000/member/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberPhone),
    })
      .then((res) => res.json())
      .then((data) => setVerificationCode(data.verificationCode))
      .catch((error) => {
        console.error("Error:", error);
      });

    return alert("인증번호를 발송했습니다.");
  };
  
  const testCode = "123456"
  // verificationCode 할 때 이걸로 변경
  
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
        alert("인증횟수를 초과했습니다. 다시 입력해주세요");
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
    <div>
      <S.PhoneMain>
        <S.Input>
          <Link to="/">
            <S.LogoWrap className="logo-margin">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`}
                alt="로고"
              />
            </S.LogoWrap>
          </Link>

          <div>
            <S.InputContainer>
              <S.InputField
                type="number"
                placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)"
                value={state.phone}
                onChange={(e) => action.setPhone(e.target.value)}
              />
              <S.AuthButton
                type="button"
                onClick={transferSms}
              >
                인증요청
              </S.AuthButton>
            </S.InputContainer>

            <S.AuthNumberContainer id="AuthNumberContainer">
              <S.InputContainer>
                <S.InputField
                  placeholder="인증번호 6자리 입력"
                  value={authNumber}
                  onChange={(e) => setAuthNumber(e.target.value)}
                />
                <S.AuthButton onClick={confirmVerificationCode}>
                  확인
                </S.AuthButton>
                <p id="PhoneResult"></p>
              </S.InputContainer>
            </S.AuthNumberContainer>
          </div>
        </S.Input>
          <S.LoginButton onClick={handleNextClick}>다음</S.LoginButton>
      </S.PhoneMain>
    </div>
  );
};

export default JoinPhone;
