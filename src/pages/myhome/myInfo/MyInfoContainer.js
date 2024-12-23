import React, { useEffect } from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "../../layout/Footer";
import S from "./style";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyInfoContainer = () => {

    // const { isLogin } = useSelector((state) => state.user);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(!isLogin){
    //         alert("로그인 후 이용해 주세요.")
    //         navigate("/login")
    //     }
    // }, [])

    const navigate = useNavigate();
    useEffect(() => {
        const jwtToken = localStorage.getItem("jwtToken");
        console.log(jwtToken)
        
        if (!jwtToken) {
            navigate("/login"); 
        }
    }, [navigate]);

    return (
        <div>
            <S.MyHomeLeft>
                <p>나의 정보</p>
                <ul>
                    <li><NavLink to={"/myhome"} end>프로필</NavLink></li>
                    <li>|</li>
                    <li><NavLink to={"/myhome/likes"}>좋아요</NavLink></li>
                    <li>|</li>
                    <li><NavLink to={"/myhome/notification"} >알림설정</NavLink></li>
                    <li>|</li>
                    <li><NavLink to={"/myhome/password-update"} >비밀번호 변경</NavLink></li>
                </ul>
            </S.MyHomeLeft>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MyInfoContainer;