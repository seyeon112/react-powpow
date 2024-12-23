import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { FindContext } from "../../context/findContext";

const FindIdComplete = () => {
  const { state } = useContext(FindContext);
  
  const [message, setMessage] = useState("로딩 중");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (state.memberEmail) {
      setMessage(state.memberEmail); 
      setIsUpdate(true)
    } else {
      setMessage("회원 확인 중");
      setIsUpdate(true)
    }
  }, [state.memberEmail, isUpdate]);

  return (
    <div>
      <S.CompletionMain>
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

        <S.Box>
          <img
            id="Check"
            style={{ marginBottom: "7px" }}
            src={`${process.env.PUBLIC_URL}/assets/images/join/complete-check.png`}
            alt="체크"
          />
          <S.BoldText>{message}</S.BoldText>
          <Link to={"/find"}>
            <S.GoToLoginButton>뒤로 가기</S.GoToLoginButton>
          </Link>
        </S.Box>
      </S.CompletionMain>
      <footer />
    </div>
  );
};

export default FindIdComplete;