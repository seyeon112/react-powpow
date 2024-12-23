import React from 'react';
import S from "./style";
import { Link } from 'react-router-dom';

const PasswordUpdateComplete = () => {
    return (
        <div>
            <S.CompletionMain>
                <S.LogoBox>
                        <Link to={"/main"}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" id="logo"/>
                        </Link>
                </S.LogoBox>
                <S.Box>
                    <img id="check" src={`${process.env.PUBLIC_URL}/assets/images/join/complete-check.png`} alt="체크"/>

                    <S.Text>비밀번호 변경이 완료되었습니다</S.Text>
                    <S.Text1>로그인하시면 더욱 다양한 서비스를 제공받으실 수 있습니다</S.Text1>
                    <Link to={"/myhome"}><S.NextButton type='button'>확인</S.NextButton></Link>
                </S.Box>
            </S.CompletionMain>
        </div>
    );
};

export default PasswordUpdateComplete;