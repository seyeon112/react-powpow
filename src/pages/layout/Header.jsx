import React, { useEffect, useState } from 'react';
import S from "./style";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';

const Header = () => {
    const { isLogin, currentUser } = useSelector((state) => state.user);
    const memberId = currentUser.id;
    const [isHover, setIsHover] = useState(false);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isSearch, setIsSearch] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        dispatch(setUser({}));
        dispatch(setUserStatus(false));
        window.location.href = "http://localhost:10000/logout";
    };

    const handleMouseOver = () => {
        setIsHover(true);
    }
    const handleMouseOut = () => {
        setIsHover(false);
    }

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value); 
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() === "") return;  
        navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);  
        setSearchTerm("");  
        setIsSearch(false);  
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(); 
        }
    };

    const handleShowSearch = () => {
        setIsSearch(!isSearch); 
        if (!isSearch) {
            setSearchTerm(""); 
        }
    };

    return (
        <S.HeaderWrap className={isHover ? "active" : ""} onMouseOut={handleMouseOut}>
            <S.Header>
                <S.LogoWrap>
                    <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/layout/logo.png`} alt="로고" /></Link>
                </S.LogoWrap>
                <S.MenuWrap onMouseOver={handleMouseOver}>
                    <S.MainMenu>
                        <li><Link to={"/petsonal"}>펫스널컬러</Link></li>
                        <li><Link to={"/store"}>스토어</Link></li>
                        <li><Link to={"/community"}>커뮤니티</Link></li>
                        <li><Link to={"/myhome"}>마이홈</Link></li>
                    </S.MainMenu>
                    <S.SubMenuWrap className={isHover ? "active" : ""} >
                        <S.SubMenu>
                            <li><Link to={"/petsonal"}>테스트</Link></li>
                            <li></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/store-dog"}>강아지</Link></li>
                            <li><Link to={"/store-cat"}>고양이</Link></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/post/recommend/all"}>추천 바구니</Link></li>
                            <li><Link to={`/post/list/${memberId}`}>내 게시물</Link></li>
                            <li></li>
                        </S.SubMenu>
                        <S.SubMenu>
                            <li><Link to={"/myhome"}>나의 정보</Link></li>
                            <li><Link to={"/my-pet"}>반려동물 정보</Link></li>
                            <li><Link to={"/notice"}>공지사항</Link></li>
                        </S.SubMenu>
                    </S.SubMenuWrap>
                </S.MenuWrap>
                <S.IconWrap>
                {isSearch ? (
                        <S.SearchWrap>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchInput}
                                onKeyPress={handleKeyPress} 
                                autoFocus
                            />
                            <img
                                className='icon'
                                src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"
                                onClick={handleShowSearch}
                            />
                        </S.SearchWrap>
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/search.png`} alt="로고"
                            onClick={handleShowSearch}
                        />
                    )}
                    {/* <Link to={""} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/delivery.png`} alt="로고" /></Link> */}
                    <Link to={"/cart"} ><img src={`${process.env.PUBLIC_URL}/assets/images/layout/cart.png`} alt="로고" /></Link>
                    <p>|</p>
                    { isLogin ? (
                        <Link onClick={handleLogout}>로그아웃</Link> 
                    ) : (
                        <Link to={"/login"}>로그인</Link> 
                    )}
                </S.IconWrap>
            </S.Header>
        </S.HeaderWrap>
    );
};

export default Header;